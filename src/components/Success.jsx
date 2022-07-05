import React from "react";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Success = () => {
    const { id } = useParams();
    const carItem = Cars.find((carItem) => carItem.id === id);

      return(
        <div className ="container-fluid">
            <div className="success text-center">
                <h5>License NFT minted successfully, click on the button below to continue</h5>
            </div>
            <div className="text-center">
                <Link to={`/vehicleLicense/${carItem.id}`} >      
			        <button className="btn btn-primary">CONTINUE</button>
			    </Link>
            </div>
       
        </div>
    )
};
export default Success;