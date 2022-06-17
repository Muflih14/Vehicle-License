import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Data.json";

export default function CarList() {
    const navigate = useNavigate();
    const onGenerateLicenseButtonClick = useCallback(() => {
         navigate("/mint-NFT");
     }, [navigate]);

	return (
		<div className="container-fluid Cars">
			{Data.map(({ cars, i }) => (
				<div key={cars + i}>
					{cars.map((item) => (
						<div  className = "CarList" key={item.id}>
							<h2>{item.name}</h2>
							<img className="mb-3" src={item.img} width="400" alt="" />
                            <h5>{item.year}</h5>
                            <h5>{item.price}</h5>
                            <div className="text-center">    
                                <button type="button" className="btn btn-primary" onClick={onGenerateLicenseButtonClick}>Link License</button>
                            </div>
                        </div>
					))}
				</div>
			))}
		</div>
	);
};

