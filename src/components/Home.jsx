import React from "react";
import Connect from "./Connect";
import "../App.css";
function Home (){
    
    return(
        <div>
            <div className="header">
                <h1>Phoenix Car Dealership</h1>
                <Connect />
            </div>
        </div>
    )
};

export default Home;