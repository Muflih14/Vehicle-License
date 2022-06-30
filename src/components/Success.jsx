import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

function Success(){
    const navigate = useNavigate();
    const onContinueBtnClick = useCallback(() => {
         navigate("/license");
     }, [navigate]);
    return(
        <div className="NFT text-center">
            <div className="mintNFT">
            <h5>License NFT minted successfully, click on the button below to continue</h5>
            <button type="button" className="btn btn-primary" onClick = {onContinueBtnClick}>  CONTINUE  </button>
            </div>
        </div>
    )
};
export default Success;