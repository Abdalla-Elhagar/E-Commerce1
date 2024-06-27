import { motion } from "framer-motion";

export default function Header(props) {
    return(
        <div className="px-10"> 
            <motion.p transition={{duration:0.7}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className=" text-sm font-medium text-primary/80">{props.top}</motion.p>
            <motion.h1 transition={{duration:0.7,delay:0.3}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className="text-3xl font-bold dark:text-white text-dark">{props.h1}</motion.h1>
            <motion.p transition={{duration:0.7,delay:0.3}} initial={{y:50,opacity:0}} whileInView={{y:0,opacity:1}} className=" text-xs text-gray-400">{props.desc}</motion.p>
        </div>
    );
}