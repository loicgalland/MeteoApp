import Navbar from "../components/Navbar.jsx";
import React, {useState} from "react";

function Home() {

    // state of location
    const [location, setLocation] = useState('')

    // update the state with the new location
    const handlelocation = (newLocation) =>{
        setLocation(newLocation)
    }
  return (
    <>
        <Navbar onLocationChange={handlelocation}/>
    </>
  )
}

export default Home
