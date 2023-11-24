import Navbar from "../components/Navbar.jsx";
import Weather from "../components/Weather.jsx";
import React, {useState} from "react";

function Home() {

    // state of location
    const [location, setLocation] = useState('Lyon')

    // update the state with the new location
    const handlelocation = (newLocation) =>{
        setLocation(newLocation)
    }
  return (
    <div   className="flex flex-col max-w-xs home__container">
        <Navbar onLocationChange={handlelocation}/>
        <Weather location={location}/>
    </div>
  )
}

export default Home
