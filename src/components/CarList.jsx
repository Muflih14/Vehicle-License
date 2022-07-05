import React from "react";
import Cars from "./Cars";
import { Link } from "react-router-dom";

const CarList = () => {
	
	return (	
		<section>
		  <div className="container-fluid">
			<h1>Cars</h1>
			<div className="Cars">
			  {Cars.map((carItem) => (
				<div key={carItem.id} className="CarList">
				  <h2 className="cardTitle">{carItem.model}</h2>
				  <img src={carItem.img} alt="" width="80%" />
				  <p className="cardDescription">{carItem.color}</p>
				
				  <div className = "text-center">
				  	<Link to={`/MintNFT/${carItem.id}`}>
						<button className="btn btn-primary">Click to Link with NFT</button>
				  	</Link>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		  </section>

		)
	};

	export default CarList