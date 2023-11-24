export default function Card({temperature, weather, date}){
    return(
        <div className="flex gap-1 flex-col items-center">
            <span className="text-white">{date}</span>
            <span className="text-white font-bold">{temperature}°C</span>
            <img src={weather} alt={weather}/>
        </div>
    )
}