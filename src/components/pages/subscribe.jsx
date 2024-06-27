import orange from "../../assets/sub/orange.jpg"
import { motion } from "framer-motion";

const image = {
    backgroundImage:`url(${orange})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover" ,
    width: "100%",
    height: "100%",
};

export default function Subsceibe() {
    return(
        <motion.div transition={{duration:1}} initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} style={image}>
            <div className="container m-auto px-30  max-sm:px-5 py-10">
                <h1 className="text-4xl text-white font-bold text-center mb-5">Get Notified About New Products</h1>
                <motion.input transition={{duration:1,delay:0.3}} initial={{opacity:0,y:50,x:"-50%"}} whileInView={{opacity:1,y:0,x:"-50%"}} type="email" placeholder="Enter your Email" className="p-3 w-[55%] max-sm:w-full bg-white text-black relative left-1/2 translate-x-[-50%]" />
            </div>
        </motion.div>
    );
}