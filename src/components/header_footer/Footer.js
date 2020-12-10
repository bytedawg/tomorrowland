import React from "react";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_roboto footer_logo_venue">TommorowLand</div>
                <div className="footer_copyright">2021 All rights reserved.</div>
            </Fade>
        </footer>
    );
}

export default Footer;