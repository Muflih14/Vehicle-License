import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";  
import Plate from "./Plate";

function MintNFT(){
    const navigate = useNavigate();
    const onMintBtnClick = useCallback(() => {
         navigate("/success");
     }, [navigate]);

    return (
        <div className="NFT text-center">
            <div className="NFT-Box">
                
              <div className="mintNFT">
                <Plate />
                <p>Click the button to link license to vehicle</p>
                <button type="button" className="btn btn-primary" onClick = {onMintBtnClick}>  MINT LICENSE NFT </button>
              </div>
            </div>
        </div>
    )
}

export default MintNFT