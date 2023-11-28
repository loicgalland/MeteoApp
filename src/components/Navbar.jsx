import {useState} from "react";

export default function Navbar({ onLocationChange }){

    // state of location
    const [location, setLocation] = useState('')

    // update the location
    const handleChange = (e) =>{
        setLocation(e.target.value)
    }
    // send location on the state in props
    const submitLocation = (e) =>{
        e.preventDefault()
        onLocationChange(location)
    }

    return(
        <nav>
            <form className="flex mt-2 gap-3">
                <input type="text"
                       placeholder="City..."
                       className="p-2 border border-slate-50 rounded-full w-full bg-inherit text-slate-50 placeholder:text-slate-50 text-slate-50np"
                       onChange={handleChange}
                />
                <button
                    type="subimt"
                    className="bg-orange-700 text-white rounded-full py-1 px-4"
                    onClick={submitLocation}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    )
}