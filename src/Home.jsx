import React from "react";
import CarList from "./CarList";

function Home (){
    
    return(
        <div>
            <div className="header">
                <h1>Phoenix Car Dealership</h1>
            </div>
            <div className="body">
                <CarList />
             </div>
        </div>
    )
};

export default Home;