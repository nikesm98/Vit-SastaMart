import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import Payment from "../../assets/img/payments.png";

import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        accusamus odit eum aspernatur neque repellendus veniam obcaecati
                        dicta. Mollitia possimus molestiae perspiciatis deleniti sunt
                        voluptas quidem, quasi voluptatem labore deserunt, ea nulla unde,
                        fuga consectetur et quaerat ut doloribus sint.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Police Colony, Mehrauli, New Delhi, 110030</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone no : 9654632744</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email : nikesm9818@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watch</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        VIT SASTAMART 2024 CREATED BY NS MAHARA. PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
