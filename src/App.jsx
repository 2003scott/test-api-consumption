import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DogRamdom } from "./pages/DogRamdom.";
import { DogTIpo } from "./pages/DogTipo";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DogRamdom/>}/>
                <Route path="/tipo" element={<DogTIpo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
