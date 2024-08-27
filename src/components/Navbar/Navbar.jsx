import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import './Navbar.css';

export default function Navbar() {

    const navLinks = [
        { path: '/', name: 'Dashboard', icon: <FaHome /> },
        { path: '/bills', name: 'Bills', icon: <FaCashRegister /> },
        { path: '/ProductsCategories', name: 'Our Products', icon: <FaHamburger /> },
        { path: '/employees', name: 'Employees', icon: <BsFillPersonLinesFill /> },
        { path: '/weather', name: 'Weather', icon: <TiWeatherPartlySunny /> },
    ];


    const navClass = 'text-white flex gap-3 md:text-xl ease-in duration-200 ';
    const activeNavClass = 'md:translate-x-2 text-yellow-300 md:text-[#00ffea] md:scale-100 scale:110';

    return (
        <div className="h-full bg-[#F5F6FD] p-0 md:p-[20px] flex md:w-auto ">
            <div
                className={`bg-[#06163a] md:w-[210px] w-[40px] lg:w-[280px] text-white  md:rounded-2xl shadow-lg 
                    h-full p-2 md:p-5`}
            >
                <div className="flex">
                    <h1 className='hidden md:block text-[26px] font-bold '>
                        DineMaster Pro <span className="text-xs text-green-400">V2</span>
                    </h1>
                    <h1 className='md:hidden flex w-full flex-col justify-center items-center text-cyan-400 text-2xl font-bold'>
                        <span>D</span>
                        <span>M</span>
                        <span className="text-xs text-green-400">V2</span>
                    </h1>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                    {navLinks.map((item) => (
                        <div
                            key={item.name}
                            className="navLinks-cont duration-100 ease-in text-cyan-500"
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => (isActive ? `${navClass} ${activeNavClass}` : `${navClass}`)}
                            >
                                <h1 className="text-2xl">{item.icon}</h1>
                                <h1 className='hidden md:block '>
                                    {item.name}
                                </h1>

                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
