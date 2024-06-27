import Header from "../header";
import image1 from "../../assets/best-products/1.png"
import image2 from "../../assets/best-products/2.png"
import image3 from "../../assets/best-products/3.png"
import { FaStar } from "react-icons/fa";
import Form from "../form";
import { useState } from "react";
import { motion } from "framer-motion";

const data = [
    {
        id:1,
        image:image1,
        title:"Casual Wear",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto quisquam quam, nobis rerum, tempore iusto saepe sit obcaecati necessitatibus repellat iste dolore consequuntur facilis provident quod consequatur beatae quia.",
    },
    {
        id:2,
        image:image2,
        title:"Printed shirt",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto quisquam quam, nobis rerum, tempore iusto saepe sit obcaecati necessitatibus repellat iste dolore consequuntur facilis provident quod consequatur beatae quia.",
    },
    {
        id:3,
        image:image3,
        title:"Women shirt",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda architecto quisquam quam, nobis rerum, tempore iusto saepe sit obcaecati necessitatibus repellat iste dolore consequuntur facilis provident quod consequatur beatae quia.",
    },
    
]

export default function BestProducts() {

    const [show,setShow] = useState(false);
    
        
    function open() {
        setShow(i => !i)
    }

    return(
        <div className="text-center dark:bg-gray-900 py-16 overflow-hidden">
            <Header top={"Top Rated Products for you"} h1={"Best Products"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"} />
            <div className="content flex justify-around items-center flex-wrap gap-10 max-sm:flex-col px-10 mx-auto ">
                {data.map(i=>(
                    <motion.div transition={{duration:0.7}} initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} key={i.id} className="shadow-2xl hover:dark:bg-primary hover:bg-gray-800 group dark:shadow-none dark:bg-gray-800 w-[300px] h-[270px] relative mt-40 flex flex-col justify-center items-center rounded-2xl">
                        <div className="mx-auto flex flex-col justify-center items-center transition-all duration-300 px-5">
                            <img className="w-34 h-48 absolute top-[-90px] group-hover:scale-110 transition-all duration-300" src={i.image} alt="img" />
                            
                            <div className="flex gap-1 mt-20 ">
                                <FaStar className="inline text-yellow-400" />
                                <FaStar className="inline text-yellow-400" />
                                <FaStar className="inline text-yellow-400" />
                                <FaStar className="inline text-yellow-400" />
                            </div>
                            <h1 className="text-xl font-bold group-hover:text-white">{i.title}</h1>
                            <p className="text-sm line-clamp-2 dark:group-hover:text-white text-gray-500 mb-3">{i.desc}</p>
                            
                            <div onClick={open} className={`orderButton hover:scale-110 transition-all text-center w-fit duration-300 mt-3  text-white rounded-full bg-gradient-to-r from-primary to-secondary`}><button className="group-hover:bg-white rounded-full px-3 py-1 group-hover:text-primary ">Order Now</button></div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <Form show={show} setShow={setShow} className={` ${show === true ? "block" : "hidden"}`} />
        </div>
    );
}