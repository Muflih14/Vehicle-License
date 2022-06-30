import React from "react";
import { ethers } from "ethers";
import VehicleMapping from "../artifacts/contracts/VehicleMapping.sol/VehicleMapping.json";

const VehicleMappingAddress= "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function Plate() {

  const val1 = (Math.floor(Math.random() * 100) + 100).toString().substring(1);
  const val2 = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  const plateNo= val1 + "-" + text + "-"+ val2;

  async function setPlateNo() {
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(VehicleMappingAddress, VehicleMapping.abi, signer);
      const transaction = await contract.setPlateNo(plateNo);

      setPlateNo({plateNo});
      await transaction.wait();
    }
  


  return (
    <div className="LicensePlate text-center">
      <h1>{plateNo}</h1>
      <h2>{setPlateNo}</h2>
    </div>
  );
}
