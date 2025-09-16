import Logo from "../assets/navbar/Logo.png" 
import DarkMode from "./darkMode";
import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import Form from "./form";
import { IoIosCart } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";



const menu = [
    {
        id: 1,
        name: 'Home',
        link: '#',
        delay:2.3,
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '#',
        delay:2.5,
    },
    {
        id: 3,
        name: 'Kids Wear',
        link: '#',
        delay:2.7,
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '#',
        delay:2.9,
    },
    {
        id: 5,
        name: 'Electronics',
        link: '#',
        delay:3.1,
    },    
]


export default function NavBar(){
    const [show,setShow] = useState(false);
    
        
    function open() {
        setShow(i => !i)
    }
    
    
    return(
        <div className="navBar z-20 relative bg-white dark:bg-gray-800 dark:text-white duration-200 mx-auto">
            <motion.div transition={{duration:0.7}} initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} className="upper relative px-12 bg-primary/40 h-14 flex items-center justify-between">
                <motion.div transition={{duration:0.5,delay:0.7}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="left flex">
                    <img className="w-10 h-9" src={Logo} alt="Logo" />
                    <h1 className="pl-2 text-3xl font-bold">Shopsy</h1>
                </motion.div>
                <div className="right flex gap-3 items-center">
                    <motion.div transition={{duration:0.5,delay:1.2}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="searchBar  max-sm:hidden h-8 group relative">
                        <IoMdSearch className="searchIcon group-hover:text-secondary text-xl text-gray-400 absolute right-3 top-1/2 translate-y-[-50%]" />
                        <input className="border transition-all duration-300 w-[200px] sm:w-[200px] group-hover:w-[300px] h-8 border-gray-200 dark:border-gray-500 dark:bg-slate-800 rounded-full px-2 py-0.5 focus:border-primary focus:outline-none" type="text" placeholder="search" />
                    </motion.div>
                    <motion.div onClick={open} transition={{duration:0.5,delay:1.5}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="order group hover:h-8 hover:py-2 bg-secondary flex px-4 py-1.5 text-white rounded-full h-7">
                        <div className="text group-hover:block text-md mt-[-4px] mr-2 hidden">Order</div>
                        <IoIosCart className="text-xl" />

                        

                    </motion.div>
                        <Form show={show} setShow={setShow} className={` ${show === true ? "block" : "hidden"}`} />
                    
                    <motion.div transition={{duration:0.5,delay:1.8}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}}><DarkMode /></motion.div>
                    
                </div>
            </motion.div>
            <motion.div transition={{duration:0.7,delay:2}} initial={{height:0 ,opacity:0}} animate={{height:45 ,opacity:1}}  className="lower  max-sm:hidden relative shadow-md"> 
                <ul className="flex relative justify-center items-center sm:gap-5 md:gap-10 py-2 m-auto">
                    {menu.map((data)=>(
                        <motion.li transition={{duration:0.5,delay:data.delay}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className=" hover:text-primary" key={data.id}>
                            <a href={data.link}>{data.name}</a>
                        </motion.li>
                    ))}
                    <motion.li transition={{duration:0.5,delay:3.3}} initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}} className="relative cursor-pointer group "> 
                        <span>Trending Products</span>
                        <FaCaretDown className="inline ml-1 group-hover:rotate-180 transform duration-200" />
                        <ul className=" dark:text-black absolute bg-white shadow-lg p-2 w-52 rounded-lg hidden group-hover:block ">
                            <li className="px-2 py-2 hover:bg-primary/20 hover:pl-3 rounded-lg transition-all duration-200">Trending Products</li>
                            <li className="px-2 py-2 hover:bg-primary/20 hover:pl-3 rounded-lg transition-all duration-200">Best Selling</li>
                            <li className="px-2 py-2 hover:bg-primary/20 hover:pl-3 rounded-lg transition-all duration-200">Top Rated</li>
                        </ul>
                    </motion.li> 
                </ul>
            </motion.div>
        </div>
    );
}