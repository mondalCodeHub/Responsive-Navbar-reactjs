import React from "react";
import { FaFacebookSquare, FaCode, FaReact, FaInstagramSquare, FaGithubSquare, FaHamburger } from 'react-icons/fa';
import { useState } from "react";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (

        <>
            <nav className="navbar">
                <div className="logo">
                    <h3 className="logo-title">  MONDALCODEHUB </h3>
                </div>
                <div className={showMediaIcons ? "menuLink mobile-menu-link" : "menuLink"}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Profile</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="SociallinksBox">
                    <ul className="socialMediaLinks">
                        <li>
                            <a href="#" target="_">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_">
                                <FaGithubSquare className="github" />
                            </a>
                        </li>
                    </ul>
                    {/* hamburger-menu */}
                    <div className="hamburgerMenu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} >
                            <FaHamburger />
                        </a>
                    </div>
                </div>
            </nav>
            <section className="mch-display">
                <p>Check out my</p>
                <h1>GitHub Profile</h1>
            </section>
        </>
    )
}

export default Navbar;