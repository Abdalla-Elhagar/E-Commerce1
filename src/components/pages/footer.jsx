import footerImage from "../../assets/footer/footer.jpg"
import Logo from "../../assets/navbar/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const image = {
    backgroundImage:`url(${footerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover" ,
    width: "100%",
    height: "100%",
};

export default function Footer() {
    return(
        <div style={image} className="py-10 max-sm:px-5 pb-40 max-sm:flex-col max-sm:items-center max-sm:text-center px-20 flex justify-start  gap-32 flex-wrap text-white  relative">
            <div className="w-[500px] max-sm:w-full">
                <div className="flex items-center max-sm:justify-center mb-5">
                    <img className="w-12" src={Logo} alt="Logo" /> <span className="text-3xl font-bold ml-3">Shopsy</span>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.
                </div>
            </div>
            <div>
                <h2 className="text-xl max-sm:text-2xl font-bold">Important Links</h2>
                <ul className="flex flex-col gap-3 py-5">
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Home</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">About</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Contact</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Blog</li>
                </ul>
            </div>
            <div>
            <h2 className="text-xl max-sm:text-2xl font-bold">Links</h2>
                <ul className="flex flex-col gap-3 py-5">
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Home</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">About</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Contact</li>
                    <li className="max-sm:text-lg hover:text-primary hover:translate-x-1 transition-all duration-500">Blog</li>
                </ul>
            </div>
            <div>
                <div className="icons flex max-sm:justify-center gap-5">
                    <FaInstagram className="text-3xl" />
                    <FaFacebook className="text-3xl" />
                    <FaLinkedin className="text-3xl" />
                </div>
                <div>
                    <ul>
                        <li className="flex items-center justify-start gap-5 mt-7 mb-3"><FaLocationArrow className="text-md" /> <span>Noida, Uttar Pradesh</span></li>
                        <li className="flex items-center justify-start gap-5"><MdPhoneIphone className="text-xl mx-[-1.5px]" /><span>+91 123456789</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}