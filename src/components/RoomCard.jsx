import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RoomCard = ({
    index, // Room ID
    city,
    frontImage,
    status,
    type,
    location,
    description,
    price,
    onToggleFavorite,
}) => {
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState(false); // Local state to track favorite status

    const getRoomStatus = () => (status === "Booked" ? "Booked" : "Available");

    const toggleFavorite = async () => {
        const newFavoriteState = !favorite;
        setFavorite(newFavoriteState); // Update UI immediately for responsiveness

        try {
            // Send a POST request to the backend to add/remove favorite
            const userId = localStorage.getItem("userId") // Replace with the actual logged-in user's ID
            await axios.post("http://localhost:5000/api/favorites", {
                userId,
                roomId: index,
            });

            // Optionally, update global favorite count using a parent callback
            onToggleFavorite(newFavoriteState);
        } catch (error) {
            console.error("Failed to toggle favorite:", error);
            setFavorite(!newFavoriteState); // Revert UI change if the request fails
        }
    };

    const goDetailPage = () => {
        navigate(`/room-detail-page/${index}`);
    };

    return (
        <div className="card">
            <div className="image-container">
                <img
                    src={frontImage}
                    alt="Room"
                    style={{
                        borderRadius: "5px",
                        width: "300px",
                        height: "200px",
                        objectFit: "cover",
                    }}
                />
                <div className={`availability ${status === "Booked" ? "booked" : "available"}`}>
                    {getRoomStatus()}
                </div>
                <button
                    className="favorite-icon"
                    onClick={toggleFavorite}
                    title={favorite ? "Remove from Favorites" : "Add to Favorites"}
                >
                    <i className={`fa-solid fa-heart ${favorite ? "filled" : "empty"}`}></i>
                </button>
            </div>
            <div className="card-text">
                <div className="room-card-type">
                    <p>{type} room</p>
                </div>
                <h3>
                    {city}, {location}
                </h3>
                <p style={{ color: "gray", fontSize: "16px" }}>{description}</p>
                <p style={{ color: "green", fontSize: "18px" }}>
                    <b>{price}/Month</b>
                </p>
                <div className="card-button">
                    <button onClick={goDetailPage} className="card-btn">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
