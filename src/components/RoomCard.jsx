
import { useNavigate } from 'react-router-dom';
const RoomCard = ({ index, city, frontImage, availabilityDate, status, type, location, description, price }) => {
    const navigate = useNavigate();
    const goDetailPage = () => {
        navigate(`/room-detail-page/${index}`);
    }

    return (
        <div className="card">
            <div className="image-container">
                <img src={frontImage} style={{ width: "300px", height: "200px", objectFit: "cover" }} alt="path error" />
                <div className="availability">{status} from {availabilityDate}</div>
            </div>
            <div className='card-text'>
                <p style={{ color: "gray", fontSize: "14px" }}> {type}</p>
                <h3>{city},{location}</h3>
                <p style={{ color: "gray", fontSize: "16px" }}>{description}</p>
                <p style={{ color: "green", fontSize: "18px" }}><b>{price}/Month</b></p>
                <div className="card-button">
                    <button onClick={goDetailPage} className="card-btn">View Details</button>

                </div>
            </div>

        </div>

    );
}
export default RoomCard;