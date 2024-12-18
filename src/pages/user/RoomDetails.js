import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { DetailImage } from "../../components/DetailImage";

const RoomDetails = () => {
    const { roomId } = useParams();
    const [roomData, setRoomData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/roomdetails/${roomId}`)
            .then(response => {
                console.log("Room data:", response.data);
                setRoomData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching room data:", error);
                setError(error.response ? error.response.data : error.message);
                setLoading(false);
            });
    }, [roomId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading room data: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="room-detail-headings">
                <h1>Room Details</h1>
            </div>

            <div className="detail-container">
                <DetailImage
                    frontImage={roomData.front_image}
                    galleryImages={roomData.gallery_images}
                    price={roomData.room_price}
                    location={roomData.room_address}
                    nearBy={roomData.nearBy || 'not specified'}
                />
            </div>

            <div className="room-detail-contents">
                <div className="room-features-content">
                    <div className="room-features">
                        <h2> Room Features</h2>
                        <div className="features-grid">
                            <div><i className="fas fa-bed fa-fw"></i> 2 Bedroom</div>
                            <div><i className="fas fa-bath fa-fw"></i> 1 Bathroom</div>
                            <div><i className="fas fa-ruler-combined fa-fw"></i> Room size 12*12</div>
                            <div><i className="fas fa-wifi fa-fw"></i> Free Wi-Fi</div>
                            <div><i className="fas fa-tv fa-fw"></i> Flat Screen TV</div>
                            <div><i className="fas fa-utensils fa-fw"></i> Kitchen Access</div>
                            <div><i className="fas fa-coffee fa-fw"></i> Complimentary Coffee</div>
                            <div><i className="fas fa-parking fa-fw"></i> Free Parking</div>
                            <div><i className="fas fa-smoking-ban fa-fw"></i> Non-Smoking</div>
                            <div><i className="fas fa-venus-mars fa-fw"></i> Prefered Gender: Doesn't Matter</div>
                        </div>
                    </div>
                </div>

                <div className="room-description">
                    <h2> Room Description</h2>
                    <div className="room-description-text">
                        <p>The room is spacious with a large window that offers a stunning view of the city skyline.</p>
                        <p>It features a comfortable double bed with a premium mattress to ensure a good night's sleep.</p>
                        <p>The room has a bathroom with a walk-in shower, fresh towels, and complimentary toiletries.</p>
                        <p>There's a work desk with a lamp and a chair, making it a perfect spot for business travelers.</p>
                        <p>The room is equipped with a flat-screen TV and free Wi-Fi for your entertainment.</p>
                        <p>A small kitchenette area includes a mini-fridge, and a coffee maker for your convenience.</p>
                    </div>
                </div>
            </div>

            <div className="location-checkout">
                <div className="room-location">
                    <div className="location-header"><h2>Where it is located</h2></div>
                    <div id="map">
                        <iframe
                            title="A unique title"
                            className="map-frame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.645074638183!2d85.32024431453747!3d27.68230098279939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1c8b22d4d%3A0x228b22a745a72a9f!2sDhobighat%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1641253411111!5m2!1sen!2snp"
                            style={{ width: "600px", height: "525px", border: "0" }}
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="room-checkout">
                    <div className="checkout-box">
                        <div className="checkout-header"><h2>Contact to House Owner</h2></div>
                        <div className="contact-form">
                            <h3>Contact Form</h3>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-number">Contact number *</label>
                                <input type="number" id="contact-number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message"></textarea>
                            </div>
                            <button className="contact-form-button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RoomDetails;
