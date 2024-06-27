import imag1 from '../../assets/products/1.png'
import imag2 from '../../assets/products/2.jpg'
import imag3 from '../../assets/products/3.jpg'
import imag4 from '../../assets/products/4.jpg'
import Header from '../header'
import Button from '../button'
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion'

const data = [
    {
        id:1,
        title:"Women Ethnic",
        color:"white",
        rate:5,
        image:imag1,
        delay:0.9,
        x:-100,
    },
    {
        id:2,
        title:"Women western",
        color:"Red",
        rate:4.5,
        image:imag2,
        delay:0.3,
        x:-100,
    },
    {
        id:3,
        title:"Goggles",
        color:"brown",
        rate:4.7,
        image:imag3,
        delay:0,
        x:100,
    },
    {
        id:4,
        title:"Printed T-Shirt",
        color:"Yello",
        rate:4.4,
        image:imag4,
        delay:0.6,
        x:100,
    },
    {
        id:5,
        title:"Fashin T-Shirt",
        color:"Pink",
        rate:4.5,
        image:imag2,
        delay:1.2,
        x:100,
    },
    
]

export default function Products() {
    return(
        <div className='overflow-hidden py-10 px-20 max-sm:px-5 mx-auto flex flex-col justify-center items-center text-center dark:bg-gray-900'>
            <Header top={"Top Selling Products for you"} h1={"Products"} desc={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi"} />
            <div className="content text-start grid grid-cols-5 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-32 mb-10 mt-14">
                {data.map((i) => (
                    <motion.div key={i.id} transition={{duration:0.7,delay:i.delay}} initial={{x:i.x,opacity:0}} whileInView={{x:0,opacity:1}} >
                        <motion.div className='hover:scale-110 hover:translate-y-[-10px] transition-all duration-300' >
                            <div className=' overflow-hidden w-36 h-52 relative rounded-md mb-3'><img className='w-52 h-52 mx-auto absolute object-cover' src={i.image} alt="image" /></div>
                            <div className='title font-semibold'>{i.title}</div>
                            <div className='color text-gray-600 text-sm'>{i.color}</div>
                            <div className='rate'><FaStar className='inline text-yellow-400 mt-[-5px]' /> <span>{i.rate}</span></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <motion.div transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}><Button rounded={"lg"} py={"1"} text={"View All Button"} /></motion.div>
        </div>
    );
}