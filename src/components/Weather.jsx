import {useState, useEffect} from "react";
import Card from "./Cards.jsx";
import {SecretKey} from "../../Env/config.js";

export default function Weather({ location }){
    // data for weather
    const [temperature, setTemperature] = useState('0')
    const [humidity, setHumidity] = useState(0)
    const [wind, setWind] = useState(0)
    const [weather, setWeather] = useState('')
    const [listOfDays, setListOfDays] = useState([])
    const [error, setError] = useState(false)

    // data for date
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() +1
    const todayDate = `${day}/${month}`

    // fetch API to collect all the weather data
    const fetchWeather = async () =>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${SecretKey}&units=metric&lang=fr&cnt=5`);
        if(response.status === 200){
            response.json().then(weather =>{
                setTemperature(weather.list[0].main.temp.toFixed(1))
                setHumidity(weather.list[0].main.humidity)
                setWind(weather.list[0].wind.speed)
                setWeather(weather.list[0].weather[0].description)
                setListOfDays(weather)
                setError(false)
            })
        }else{
            setError(true)
        }
    }

    // Call the function FetchWeather every time that location change
    useEffect(() => {
        fetchWeather();
    }, [location]);

    return(
        <div className="container__weather">
            <div className="flex flex-col">
                <span className="text-4xl m-0 text-white">{!error ? location : 'Ville inconnue'}</span>
                <span className="text-white">{todayDate}</span>
                <span className="text-1xl m-0 text-white">{!error ? weather : 'NaN'}</span>
            </div>
            <div>
                <div>
                    <span className="text-white"><span className="text-8xl font-bold ">{!error ? temperature : 'NaN'}</span>°C</span>
                </div>
                <div className="flex gap-3 mb-2">
                    <div className="bg-slate-500/50 py-1 px-2 rounded-full flex gap-2 items-center">
                        <i className="fa-solid fa-droplet text-white"></i>
                        <span className="text-white">{humidity}%</span>
                    </div>
                    <div className="bg-slate-500/50 py-1 px-2 rounded-full flex gap-2 items-cente">
                        <i className="fa-solid fa-wind text-white"></i>
                        <span className="text-white">{wind}m/s</span>
                    </div>
                </div>
            </div>
            <div className=" bg-slate-500/50 rounded-xl flex justify-center p-2">
                {listOfDays.length !== 0 ? listOfDays.list.map((day) =>(
                    <Card
                        key={day.dt}
                        date={`J+${listOfDays.list.indexOf(day) +1}`}
                        temperature={!error ? day.main.temp.toFixed(1) : 'NaN'}
                        weather={`https://openweathermap.org/img/wn/${day.weather[0].icon.replace('n', 'd')}@2x.png`}
                    />
                )) : ''}
            </div>
        </div>
    )
}