import React from "react";
import CarList from "./CarList";
import Connect from "./Connect";
function Home (){
    
    return(
        <div>
            <div className="header">
                <h1>Phoenix Car Dealership</h1>
                <Connect />
            </div>
            <div className="body">
                <CarList />
             </div>
        </div>
    )
};

export default Home;