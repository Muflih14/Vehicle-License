import React, { useState } from "react";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import VehicleMapping from "../artifacts/contracts/VehicleNFT.sol/VehicleNFT.json";

// Vehicle Mapping Contract Address
const VehicleMappingAddress= "0x5FbDB2315678afecb367f032d93F642f64180aa3";

//Get Selected car with i.d.
const VehicleLicense = () => {
  const { id } = useParams();
  const carItem = Cars.find((carItem) => carItem.id === id);


  const [license, setLicense] = useState("");

  // Fetches the License
  async function maptLicense() {
    
  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const contract = new ethers.Contract(
			VehicleMappingAddress,									
			VehicleMapping.abi,
			provider
		);
		try {
			const data = await contract.maptLicense();
			console.log("data: ", data);
      setLicense(data);
		} catch (error) {
			console.log("Error: ", error);
		}
		}
	}

  return (
    <div className="container-fluid">
      <div className ="mintNFT">
        <h1>{carItem.model}</h1>
        <img src={carItem.img} width= "80%" alt="" />
        <h2>Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{carItem.color}</h2>
        <h2>Year:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{carItem.year}</h2>
        <h2>Chasis No.:&nbsp;&nbsp;{carItem.chassisNo}</h2>
        <h2>TOKEN URI: {carItem.tokenURI}</h2>
        <h2>LICENSE:{license} </h2> 
      </div>
      <div className="text-center">
        <Link to={`/mapSuccess`}> 
          <button className="btn btn-primary" onClick = {maptLicense}>MAP LICENSE TO VEHICLE </button>
        </Link>  
      </div>
    </div>
  );
};

export default VehicleLicense;
