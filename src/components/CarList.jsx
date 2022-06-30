import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import VehicleNFT from "../artifacts/contracts/VehicleNFT.sol/VehicleNFT.json";

// Vehicle NFT Contract Address
const VehicleNFTAddress="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export default function CarList() {

// Requests access to the user's Meta Mask Account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

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
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

// navigate to success page
	const navigate = useNavigate();
    const onMintNFTClick = useCallback(() => {
         navigate("/success");
     }, [navigate]);

// show selected vehicle details
	const [show, setShow] = useState(true);
	const [selected, setSelected] = useState(new Set());
	const [cars, setCars] = useState(new Map());

// vehicle data
	useEffect(() => {
		setCars(
			new Map([
				["Lexus", { model: "Lexus SUV", color: "Gold", year: "2022", img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DcTim9Wx8RW7d7ZBWgNZybhmzEsKI957Aw&usqp=CAU", chassisNo: "AS9KIJE4T56CVGR"}],
				["Toyota", { model: "Toyota Camry", color: "Silver", year: "2022", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINECG9mueQJGbIrmr_mVLpA-iMaqHwly7tA&usqp=CAU", chassisNo: "VC34G6TS3LK9DFH"}],
				["Lexus", { model: "Lexus", color: "Violet", year: "2021", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRi0RHkfWSekw3NBf-aobbSt3vVCbYC_GI7g&usqp=CAU", chassisNo: "PO34C57HGT3D9HI"}],
				["Lexus", { model: "Lexus BM", color: "Red", year: "2022", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1dMpxpTl355zcDg9_EeACbx9M_VqDKQ1Yw&usqp=CAU", chassisNo: "XC89VB9HY65D4GJ"}],
				["Rolls", { model: "Rolls Royce Phantom", color: "Silver", year: "2009", img:"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-rolls-royce-ghost-2020-uk-fd-hero-front_1.jpg?itok=bJTVAWTw", chassisNo: "GH89IJB64CK9GHT"}],
				["Range", { model: "Range Rover SVA", color: "Grey", year: "2010", img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/rr-auto-lwb-svo-0161_0.jpg?itok=zEjf8hD8", chassisNo: "TY9J87VJC0J29LC"}]
				])
			);
		}, []
	);

	// select selected car
    const [carClicked, setCarClicked] = useState(false);
    
	// pick values of selected car
	const handleChange = useCallback(({ target: { value } }) => {
		setCarClicked(!carClicked);
		setSelected((selected) => {
		const items = new Set([...selected]);
		items[items.has(value) ? "delete" : "add"](value);
		return items;
		});
	}, []);

	return (
		<div className="container-fluid">
		{show?
		// mapped car list
		<div className="container-fluid Cars">
			{[...cars].map(([key, value]) => (
				<div className="CarList" key={key}>
				<h2>{value.model}</h2>
				<img className="mb-3" src={value.img} width="400" alt="" />
				<h5>Color:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.color}</h5>
				<h5>Year:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.year}</h5>
				<h5>Chasis No.:&nbsp;&nbsp;{value.chassisNo}</h5>				
				<input type="checkbox" onChange={handleChange} value={key} />
				</div>
			))}
			
			<div className="mintLicense">    
				<button className="btn btn-primary" disabled={!carClicked} onClick={()=>setShow(false)}>Mint License</button>
			</div>
			
		</div>

		:
// selected car
		<div className="container-fluid map">
			<div>
			{[...selected].map((key) => (
				<div className="mapVehicle" key={key}>
					<div>
						<h4>
						Model:&nbsp; {cars.get(key).model}<br/>
						Color:&nbsp;&nbsp; {cars.get(key).color}<br/>
						Year:&nbsp;&nbsp;&nbsp;&nbsp; {cars.get(key).year}<br/>
						Chasis:&nbsp; {cars.get(key).chassisNo}<br/>
						</h4>
						{/* TokenURI: {data} */}
					</div>
				</div>
				
			))}
			</div>
				<div className="sucessPageButtons row">
					<div className="col-sm-4">
						<button className="btn btn-primary Back" onClick={()=>setShow(true)}>Back</button>
					</div>
					<div className="col-sm-4">
						<button onClick={fetchTokenURI} style={{ backgroundColor: "green" }}>MINT NFT</button>
					</div>
					<div className="col-sm-4">
						<button onClick= {onMintNFTClick} className="btn btn-warning">CONTINUE</button>
					</div>
				</div>
			</div>
			}
		</div>
	);
	}
