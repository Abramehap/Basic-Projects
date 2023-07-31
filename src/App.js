import React from "react";
import {Brand , NavBar , CTA} from "./Components/index";
import {Footer , Blog , Possibility , Features , WhatGPT3 , Header} from "./Containers/index";
import './App.css'


const App=()=> {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar/>
                <Header/>
            </div>
                <Brand/>
                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>
        </div>
    )
}

export default App