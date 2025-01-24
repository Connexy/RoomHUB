import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function HowitWorks2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <div class="hiw-container">
                <div class="ci-container">
                    <div class="hiw-heading">
                        <h1>How it works</h1>
                        <p><i class="fa-solid fa-user"></i> Do you need Help</p>
                    </div>
                    <div class="btn-wrapper">
                        <Link to='/how-it-works-page-tenant'><button style={{ background: "none", border: "none", color: "black" }} class="tenant">Tenant</button></Link>
                        <button style={{ border: "none", backgroundColor: "#2A9D8F", color: "white" }} class="tenant">Landlord</button>
                    </div>
                    <div class="text-wrapper">

                        <div class="text-part">
                            <h3>1. Post Room</h3>
                            <p>
                                The properties on the room less platform are all verified by our
                                team
                            </p>
                            <br />
                            <p>
                                This means that we guarantee the reality, the authencity of the
                                photos and the accuracy of the information in the listing so htath
                                you can book online in complete safety
                            </p>
                            <br />
                            <h3>2. Manage Rooms</h3>
                            <p>
                                The properties on the room less platform are all verified by our
                                team
                            </p>
                            <br />
                            <p>
                                This means that we guarantee the reality, the authencity of the
                                photos and the accuracy of the information in the listing so htath
                                you can book online in complete safety
                            </p>
                            <br />
                            <h3>2. Manage Bookings</h3>
                            <p>
                                The properties on the room less platform are all verified by our
                                team
                            </p>
                            <br />
                            <p>
                                This means that we guarantee the reality, the authencity of the
                                photos and the accuracy of the information in the listing so htath
                                you can book online in complete safety
                            </p>
                            <br />
                            <h3>3. Deal Closed</h3>
                            <p>
                                The properties on the room less platform are all verified by our
                                team
                            </p>
                            <br />
                            <p style={{ marginBottom: "50px" }}>
                                This means that we guarantee the reality, the authencity of the
                                photos and the accuracy of the information in the listing so htath
                                you can book online in complete safety
                            </p>


                        </div>
                    </div>

                </div>
            </div >
            {/* <Footer /> */}
        </>
    )
}

