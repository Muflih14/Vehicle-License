import React, { useState } from "react";
import Cars from "./Cars";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import VehicleNFT from "../artifacts/contracts/VehicleNFT.sol/VehicleNFT.json";

// Vehicle NFT Contract Address
const VehicleNFTAddress="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

const MintNFT = () => {
  const { id } = useParams();
  const carItem = Cars.find((carItem) => carItem.id === id);

  const [token, setToken] = useState("");

  // Fetches the tokenURI
  async function fetchTokenURI() {

  // If MetaMask exists
  if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const contract = new ethers.Contract(
			VehicleNFTAddress,									
			VehicleNFT.abi,
			provider
		);
		try {
			const data = await contract.tokenURI();
			console.log("data: ", data);
      setToken(data);
		} catch (error) {
			console.log("Error: ", error);
		}
		}
	}


  return (
    <div className="container-fluid">
        <div className ="mintNFT">
          <h1>{carItem.model}</h1>
          <img src={carItem.img} width= "70%" alt="" />
          <h2> Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{carItem.color}</h2>
          <h2>Year:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{carItem.year}</h2>
          <h2>Chasis No.:&nbsp;&nbsp;{carItem.chassisNo}</h2>
          <h2>TOKEN URI: {token}</h2>
        </div>
        <div className="text-center">
          <Link to={`/Success/${carItem.id}`}> 
            <button className="btn btn-primary" onClick = {fetchTokenURI}>MINT NFT</button>
          </Link>  
        </div>
    </div>

  );
};

export default MintNFT;
