import { IoMdClose } from "react-icons/io";
import Button from "./button";
import { motion, AnimatePresence } from "framer-motion";

const Form = ({show,setShow}) => {
    return(
        <>
        <AnimatePresence>
            { show&&
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className={`backdrop-blur-sm w-screen h-screen z-50 bg-black/50 fixed left-0 top-0`}>
                <motion.div 
                initial={{ opacity: 0, y: 0, x: '-50%' }}
                animate={{ opacity: 1, y: '-50%' }}
                exit={{ opacity: 0, y: 30 }}
                transition={{
                  initial: { duration: 0.5, delay: 0 },
                  animate: { duration: 0.5 },
                  exit: { duration: 0.5, delay: 5 },
                }}
                className="py-4 px-2 rounded-md fixed dark:bg-gray-900 dark:text-white items-center flex top-1/2 left-1/2 text-black w-80 h-64 bg-white flex-col translate-y-[-50%]">
                    <div className="mb-2 title gap-44  flex justify-between">
                        <motion.p>Order Now</motion.p> 
                        <motion.div>
                            <IoMdClose onClick={()=>setShow(i=>!i)} className="text-xl cursor-pointer" />
                        </motion.div> 
                    </div>
                    <div className="inputs flex flex-col">
                        <input className="w-64 m-auto border border-gray-500 dark:bg-gray-800 rounded-full my-2 py-1 px-3" type="text" placeholder="Name" />
                        <input className="w-64 m-auto border border-gray-500 dark:bg-gray-800 rounded-full my-2 py-1 px-3" type="email" placeholder="Email" />
                        <input className="w-64 m-auto border border-gray-500 dark:bg-gray-800 rounded-full my-2 py-1 px-3" type="text" placeholder="Address" />
                    </div>
                    <Button rounded={"full"} py={"1"} text={"Order Now"} />
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
        
        </>
    );
}

export default Form;