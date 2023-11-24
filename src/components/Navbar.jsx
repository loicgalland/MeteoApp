import {useState} from "react";

export default function Navbar({ onLocationChange }){

    // state of location
    const [location, setLocation] = useState('')

    // update the location
    const handleChange = (e) =>{
        setLocation(e.target.value)
    }
    // send location on the state in props
    const submitLocation = () =>{
        onLocationChange(location)
    }

    return(
        <nav className="max-w-lg flex justify-center">
            <form className="flex p-6 gap-3">
                <input type="text" placeholder="City..." className="p-2 border border-zinc-700 rounded-full" value={location} onChange={handleChange}/>
                <button type="subimt" className="bg-orange-700	text-white rounded-full py-1 px-4" onClick={submitLocation}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    )
}