import OwnerImage from '../../../public/images/owner-image.png'
import { motion } from 'framer-motion'


export default function Owner() {
    return (
        <div className="flex flex-col h-full w-full gap-3 p-3 justify-evenly items-center">
            <p>Meet the Owner</p>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className='max-h-40 md:max-h-48 2xl:h-56 '>
                <img src={OwnerImage} className='w-full h-full object-cover' alt="Owner Image" />
            </motion.div>
            <div>
                <h1 className="text-[25px] font-bold text-white mb-2 italic">Tushar Mohan</h1>
                <p className='text-[13px] 2xl:text-[16px] leading-5 font-normal italic'>"Eating is my Favourite Hobby"</p>
            </div>
        </div>
    )
}