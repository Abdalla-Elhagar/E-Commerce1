import image1 from "../../assets/products/2.jpg"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "framer-motion";




export default function WinterSale(){
    return(
        <div>
            <div className="top md:py-28 md:gap-20 lg:gap-40 xl:gap-62 my-20 lg:pl-32 max-sm:px-5 flex md:ml-20 sm:mx-0 md:justify-center max-sm:justify-center max-sm:items-center md:flex-row max-sm:flex-col md:p-10">
                <motion.div transition={{duration:0.7}} initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} className="w-[430px] max-sm:w-full h-[350px] max-sm:mb-20 max-sm:px-0 overflow-hidden relative object-cover flex justify-center sm:pl-0 pl-10"><img  className="object-cover absolute max-sm:w-full w-[430px] h-[350px]" src={image1} alt="winter Sale image" /></motion.div>
                <div className=" ml-40 max-sm:mx-0 max-sm-px-0 sm:px-5 w-1/2 max-sm:w-full">
                    <motion.h1 transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className="md:text-4xl max-sm:px-0 max-sm:w-full md:text-start sm:text-center sm:text-3xl font-bold text-black dark:text-white">Winter Sale upto 50% Off</motion.h1>
                    <motion.p transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className="text-gray-500 max-sm:w-full max-sm:px-0 md:text-start  sm:text-center my-5 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</motion.p>
                    <div className=" max-sm:px-0 leading-[60px] max-sm:w-full">
                        <motion.li transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}><GrSecure className="inline p-4 w-12 h-12 rounded-full bg-purple-400 mr-5" /><span>Quality Products</span></motion.li>
                        <motion.li transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}><IoFastFood className="inline p-4 w-12 h-12 rounded-full bg-orange-400 mr-5" /><span>Fast Delivery</span></motion.li>
                        <motion.li transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}><GiFoodTruck className="inline p-4 w-12 h-12 rounded-full bg-green-400 mr-5" /><span>Easy Payment method</span></motion.li>
                        <motion.li transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}}><GiFoodTruck className="inline p-4 w-12 h-12 rounded-full bg-yellow-400 mr-5" /><span>Get Offers</span></motion.li>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}