import { FaRegCopyright, FaArrowAltCircleUp } from "react-icons/fa";

import "./index.css"

const Footer = () => {

    const scrollToTop = () => {
        const section = document.getElementById("home");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // smooth scroll back to home
        }
    };

    return <div className="footer-bg">
        <div className="footer-text-container">
            <FaRegCopyright className="copy-right-icon" />
            <h1 className="footer-text">2025 Kavya — Crafted with passion & code. All rights reserved.</h1>
        </div>
        <FaArrowAltCircleUp className="up-arrow-icon" onClick={scrollToTop} />
    </div>
}

export default Footer