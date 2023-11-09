import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import Rooter from "./components/Rooter.jsx";
import './sass/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Rooter />
      </BrowserRouter>
  </React.StrictMode>,
)
