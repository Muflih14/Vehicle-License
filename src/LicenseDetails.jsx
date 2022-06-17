import React from "react";
import Plate from "./Plate"

function LicenseDetails(props){

    return (
        <div className="container-fulid carsList">
         
            <div>
                {props.license.map((v, i) => {
                    return(
                        <div className="licenseCard">
                            <div className="text-center">
                                <h2>License Details</h2>
                            </div>
                            <div className="plateDetails">
                                <Plate/>
                                
                            </div>
                            <div className="carDetails text-center">
                                <h4>{v[0]}</h4>
                                <h4>{v[1]}</h4>
                                <h4>{v[2]}</h4>
                            </div>
                           
                        </div>)                
                    })};
                </div>
        </div>
    )
};
export default LicenseDetails;