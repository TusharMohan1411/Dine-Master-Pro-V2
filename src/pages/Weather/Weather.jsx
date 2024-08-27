import { useRef } from "react";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../contexts/weatherSlice";
import useWeather from "../../Hooks/useWeather";

export default function Weather() {
    const dispatch = useDispatch();
    const cityForWeather = useSelector(state => state.weather.cityName)

    const { showd, weatherErrorMsg, wloading, weatherImg } = useWeather(cityForWeather);

    const city = useRef()

    function handleSetCityName(e) {
        e.preventDefault();
        dispatch(weatherActions.searchWeather(city.current.value))
        city.current.value = '';
    }

    return (
        <MainSection>
            <MainHeader PageHeading={'Weather Forecast'}>
                <form onSubmit={handleSetCityName} className="flex gap-4">
                    <input
                        type="text"
                        name="cityName"
                        placeholder="Search City"
                        className="px-4 py-2 w-56 md:w-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md "
                        ref={city} />
                    <button type="submit" ><FaSearch size={20} /></button>
                </form>
            </MainHeader>

            <MainData>
                {wloading ? (
                    <div className="text-center font-bold text-4xl">
                        <p className="text-lg font-medium">Loading Data... Please wait</p>
                    </div>
                ) : (
                    <div className="w-full p-1 rounded-lg">
                        {weatherErrorMsg ? (
                            <p className="text-red-500 font-medium">{weatherErrorMsg}</p>
                        ) : (
                            <div className="flex justify-center items-center flex-col lg:flex-row gap-5">

                                <div className="bg-white md:p-5 p-2 w-full justify-center rounded-lg shadow-lg flex gap-1 md:gap-3 flex-col ">
                                    <div className="flex items-center">
                                        <h1 className="md:text-5xl text-4xl font-bold text-black">
                                            {showd.city}
                                        </h1>
                                        <div className="w-16 md:w-20">
                                            <img src={`https://openweathermap.org/img/wn/${showd.icon}@2x.png`}
                                                alt="Weather Image"
                                                className="w-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <img
                                            src={weatherImg}
                                            alt="Weather Image"
                                            className="h-full w-full object-cover rounded-md"
                                        />
                                    </div>
                                    <p className="text-xl capitalize font-semibold text-gray-500 mt-2">{showd.description}</p>
                                </div>

                                <div className="flex min-w-1/2 w-full items-center justify-center lg:justify-start mx-auto h-full gap-5 flex-wrap grow">
                                    <div className="bg-white flex flex-col gap-3 justify-center items-center p-3 shadow-lg rounded-lg lg:h-56 lg:w-2/5 min-h-32 h-full w-[45%]  text-center">
                                        <h2 className="lg:text-4xl text-2xl font-bold text-black">{showd.temp} °C</h2>
                                        <p className="md:text-lg text-xs ">Temperature</p>
                                    </div>
                                    <div className="bg-white flex flex-col gap-3 justify-center items-center p-3 shadow-lg rounded-lg lg:h-56 lg:w-2/5 min-h-32 h-full w-[45%]   text-center ">
                                        <h2 className="lg:text-4xl text-2xl font-bold text-black">{showd.feels_like} °C</h2>
                                        <p className="md:text-lg text-xs ">Feels Like</p>
                                    </div>
                                    <div className="bg-white flex flex-col gap-3 justify-center items-center p-3 shadow-lg rounded-lg lg:h-56 lg:w-2/5 min-h-32 h-full w-[45%]   text-center ">
                                        <h2 className="lg:text-4xl text-2xl font-bold text-black">{showd.humidity}%</h2>
                                        <p className="md:text-lg text-xs ">Humidity</p>
                                    </div>
                                    <div className="bg-white flex flex-col gap-3 justify-center items-center p-3 shadow-lg rounded-lg lg:h-56 lg:w-2/5  min-h-32 h-full w-[45%]  text-center ">
                                        <h2 className="lg:text-4xl text-2xl font-bold text-black">{showd.windSpeed}</h2>
                                        <p className="md:text-lg text-xs ">Wind Speed (Km/h)</p>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                )}

            </MainData>

        </MainSection>
    );
}
