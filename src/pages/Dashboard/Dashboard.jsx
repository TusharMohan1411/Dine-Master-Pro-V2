import TotalSales from './../../components/Dashboard-Comp/TotalSales';
import PopularProducts from './../../components/Dashboard-Comp/PopularProducts';
import Time from './../../components/Dashboard-Comp/Time';
import Owner from '../../components/Dashboard-Comp/Owner';
import WeatherComp from '../../components/Dashboard-Comp/Weather';
import EmpCount from './../../components/Dashboard-Comp/EmpCount';
import ProductCount from '../../components/Dashboard-Comp/ProductCount';
import MainSection from '../../components/Main/MainSection';
import OrdersCount from '../../components/Dashboard-Comp/OrdersCount';
import Banner from '../../components/Dashboard-Comp/Banner';
import { motion } from 'framer-motion'

export default function Dashboard() {
    return (
        <MainSection>
            <div className="Dashboard-cont-main mt-1 overflow-y-scroll md:overflow-hidden px-2 md:px-5 flex-grow
             flex w-full h-screen scrollable-element">

                <div className="grid gap-3 md:gap-6 pb-2 md:grid-rows-6 grid-cols-4 md:overflow-y-hidden max-h-full w-full">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        className="p-1 col-span-4 md:h-full h-[340px] md:col-span-3 min-h-32 row-span-6 md:row-span-2">
                        <Banner />
                    </motion.div>

                    <div className="row-span-6 p-3 col-span-4 md:col-span-1 shadow-md bg-white rounded-xl flex flex-col gap-4 h-full justify-between">

                        <div className="min-h-28 font-semibold text-xl p-1 rounded-xl grow">
                            <WeatherComp />
                        </div>
                        <div className="min-h-3/5 bg-[#06163A] text-white text-center font-semibold text-xl rounded-xl h-3/5">
                            <Owner />
                        </div>

                    </div>

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
                        className="rounded-xl cursor-pointer col-span-4 md:col-span-1 flex justify-center items-center h-full w-full">
                        <EmpCount />
                    </motion.div>

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
                        className="col-span-4 cursor-pointer md:col-span-1 h-full rounded-xl ">
                        <ProductCount />
                    </motion.div>

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
                        className="col-span-4 cursor-pointer md:col-span-1 rounded-xl">
                        <Time />
                    </motion.div>

                    <div className="flex md:flex-row flex-col gap-3 col-span-4 md:col-span-3 mt-4 md:mt-0 p-2 row-span-3 rounded-xl">
                        <div className='grow flex h-full flex-row md:flex-col justify-evenly md:items-start items-center'>
                            <div>
                                <OrdersCount />
                            </div>
                            <div>
                                <TotalSales />
                            </div>
                        </div>
                        <div className='w-full md:h-full md:w-3/4'>
                            <PopularProducts />
                        </div>
                    </div>

                </div>
            </div>
        </MainSection>
    )
}
