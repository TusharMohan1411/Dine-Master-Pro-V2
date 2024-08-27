
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 }
};

export default function MainSection({ children }) {
    return (
        <AnimatePresence>
            <motion.section
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={{ duration: 0.5 }}
                className="h-full pb-5 flex flex-col grow scrollable-element">
                {children}
            </motion.section>
        </AnimatePresence>
    )
}
