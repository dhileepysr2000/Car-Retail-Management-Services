import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

export function Footer() {
    return (
        <>
            <div className="container p-5 total">
                <div className="row p-3">
                    <div className="col-lg-3 text-white">
                        <h3>We Are Car retail company</h3>
                        <p>The success of a car retail company is often dependent on factors such as market demand, customer service, pricing, inventory management, and effective marketing strategies.</p>
                    </div>
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-4 text-white">

                        <h3>Location</h3>
                        <p>234, Varadharajamill, Hopes, Coimbatore - 600091, Tamilnadu,India </p>
                    </div>
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-3 text-white">
                        <h3>Contact</h3>
                        <p>+91-44-4856-3345</p>
                        <p>@dhcarretail.in</p>
                        <p>www.carretail.in</p>
                        <p><FiFacebook className="icons"></FiFacebook>&nbsp;<FiInstagram className="icons"></FiInstagram>&nbsp;<FiTwitter className="icons"></FiTwitter>&nbsp;<FiLinkedin className="icons"></FiLinkedin></p>
                    </div>
                </div>
            </div>
        </>
    );
}