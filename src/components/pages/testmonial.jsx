import Header from "../header";
import image1 from "../../assets/products/2.jpg"
import Slider from "react-slick";
import { motion } from "framer-motion";

const data = [
    {
        id:1,
        name:'Ahmed Rady',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam temporibus, inventore impedit',
        image:image1,
    },
    {
        id:1,
        name:'Ahmed Rady',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam temporibus, inventore impedit',
        image:image1,
    },
    {
        id:1,
        name:'Ahmed Rady',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam temporibus, inventore impedit',
        image:image1,
    },
    {
        id:1,
        name:'Ahmed Rady',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam temporibus, inventore impedit',
        image:image1,
    },
    
]



export default function Testmonial() {
    var settings = {
        dots: true,
        speed: 500,
        Infinity: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,

        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    Infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2 ,
                },
                
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };


    return(
        <div className="testimonials py-10 flex flex-col justify-center items-center text-center">
            <Header top={"What our customers say"} h1={"Testimonial"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quod, voluptas porro, impedit reprehenderit officia incidunt culpa dignissimos doloribus,"} />
            <motion.div transition={{duration:1}} initial={{opacity:0,scale:0.5,y:100}} whileInView={{opacity:1,scale:1,y:0}} className="content grid grid-cols-1 relative  my-20">

                <Slider className="relative" {...settings}>
                    {data.map(i => (
                        <motion.div initial={{width:300,display:"flex",x:50}} key={i.id} className=" bg-primary/10 dark:bg-gray-800 w-[500px] shadow-lg h-[250px] py-8 px-6 rounded-xl flex flex-col items-start text-start relative">
                            <img className="w-20 h-20 rounded-full" src={i.image} />
                            <p className="text-sm my-3 space-y-3 text-gray-500">{i.desc}</p>
                            <h1 className="mt-[-10px] text-xl font-bold">{i.name}</h1>
                            <p className="text-9xl absolute right-0 top-[-20px] text-gray-400 font-serif">,,</p>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
}