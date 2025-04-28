import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-base-100 py-5">
            <div className="container mx-auto px-2">
                <div className="flex justify-between items-center">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><a href="/" className="hover:text-amber-500 transition">Home</a></li>
                            <li><a href="/aboutus" className="hover:text-amber-500 transition">About Us</a></li>
                            <li><a href="/faq" className="hover:text-amber-500 transition">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-8">Follow Us</h3>
                        <div className="flex justify-center space-x-5">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition text-2xl">
                                <FaFacebookF />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition text-2xl">
                                <FaInstagram />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noreferrer" className=" hover:text-red-500 transition text-2xl">
                                <FaXTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className=" hover:text-blue-700 transition text-2xl">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-amber-500" />

                <div className="text-center">
                    <p>
                        © {new Date().getFullYear()} Creator-Dashboard. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
