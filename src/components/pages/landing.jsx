import { motion } from "framer-motion";
import LeftLanding from "../leftLanding";
import women from "../../assets/landing/women.png"
import shopping from "../../assets/landing/shopping.png"
import sale from "../../assets/landing/sale.png"
import Slider from "react-slick";

const data = [
    {
        id:1,
        title: "Upto 50% off on all Men's Wear",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente a iusto unde soluta nulla assumenda vitae quis temporibus, molestiae, repudiandae",
        img: women,
    },
    {
        id:2,
        title: "30% off on all Women's Wear",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente a iusto unde vitae quis temporibus, molestiae, repudiandae",
        img: shopping,
    },
    {
        id:3,
        title: "70% off all product's Wear",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente a iusto unde soluta nulla assumenda vitae quis temporibus, molestiae, repudiandae",
        img: sale,
    },
    
];

export default function Landing() {
    var settings = {
        dots: false,
        arrows: false,
        Infinite: true,
        speed:800,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return(
        <div className="landing relative overflow-hidden w-full bg-gray-100 dark:bg-gray-950 pb-8 sm-pb-0">
            <motion.div transition={{duration:0.7,delay:3.7}} initial={{x:100,y:-100,rotate:135,opacity:0}} animate={{x:0,y:0,opacity:1}} className=" absolute bg-primary/40 rounded-3xl rotate-45 z-0 right-0 top-[-270px] w-[600px] h-[700px]"></motion.div>
            <Slider {...settings} >           

                {data.map((item) => (
                    <motion.div key={item.id} transition={{duration:0.7,delay:4.3}} initial={{opacity:0,x:-50,display:"grid"}} animate={{opacity:1,x:0}} className="grid grid-cols-1 sm:grid-cols-2 relative px-10">
                        <LeftLanding h1Text={item.title} pText={item.desc} />
                        <motion.div transition={{duration:0.7,delay:4.3}} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}} className="order-1 sm:order-2 mx-auto">
                            <img className="sm:w-[450px] sm:scale-125 object-contain sm:h-[450px] w-[300px] h-[300px] mt-40 mx-auto max-md:w-[450px] max-md:h-[270px]" src={item.img} alt="women" />
                        </motion.div>
                    </motion.div>
                ))}
                
            </Slider>
            
        </div>
    );
}