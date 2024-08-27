import { useSelector } from "react-redux";
import useWeather from "../../Hooks/useWeather";

export default function WeatherComp() {
    const cityForWeather = useSelector(state => state.weather.cityName)

    const { showd } = useWeather(cityForWeather);

    return (
        <div className="rounded-lg flex flex-col justify-center h-full w-full p-4">
            <div>
                <p className="text-md text-gray-400 font-bold capitalize">{showd.city}</p>
                <p className=" text-blue-900 font-semibold capitalize">{showd.description}</p>
            </div>
            <div className="w-16 md:w-28 -my-3">
                <img src={`https://openweathermap.org/img/wn/${showd.icon}@2x.png`}
                    alt="Weather Image"
                    className="w-full object-cover hover:scale-110 duration-200" />
            </div>
            <div>
                <h1 className="text-5xl md:text-3xl xl:text-5xl font-extrabold">{showd.temp}°C</h1>
                <p className="text-[16px]  text-gray-500">Feels Like {showd.feels_like}°C</p>
            </div>

        </div>
    );
}
