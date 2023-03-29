import React from 'react'
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png';
const Footer = () => {

    return (
        <footer className=" mt-16 p-10  text-black"
            style={{
                backgroundImage: `url(${footerImg})`,
                backgroundPosition: 'center'
            }}
        >
            <div className="footer">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/</div>' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/</div>' className="link link-hover">Cavity Filling</Link>
                    <Link to='/</div>' className="link link-hover">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Our ADDRESS</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className="footer-center  mt-16">
                <p>Copyright © 2023 - All Right Reserved </p>
            </div>
        </footer>
    )
}

export default Footer;