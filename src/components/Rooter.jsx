import {Route, Routes} from "react-router-dom";
import Home from "../page/Home.jsx";
export default function Rooter(){
    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    )
}