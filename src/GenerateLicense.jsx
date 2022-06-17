import React, { useState} from "react";

function GenerateLicense({createLicense}){
 
    const [buyerName,setBuyerName]=useState('');
    const [buyerAddress,setBuyerAddress]=useState('');
    const [carPrice,setCarPrice]=useState('');
  
    const handleSubmit=(e)=>{
      createLicense([buyerName,buyerAddress,carPrice]);
      e.preventDefault();
    };    
  

    return (
        <div>
            <div className="licenseDetails"> 
             <h5>
                Provide the information below to generate your license
             </h5>   

                <div className="formDetails">        
                    <form>  
                        <label>Buyer's Name</label><br/>
                        <input
                            type="text"
                            placeholder="Buyer's name"
                            value={buyerName}
                            onChange={e=>setBuyerName(e.target.value)}
                            autoFocus
                            required
                        />
                    </form>
                    <form>
                        <label>Buyer's Public Address</label><br/>
                        <input
                            type="text"
                            placeholder="Buyer's public address"
                            value={buyerAddress}
                            onChange={e=>setBuyerAddress(e.target.value)}
                            autoFocus
                            required
                    />
                    </form>

                    <form>
                        <label>Price</label><br/>
                        <input
                            type="text"
                            placeholder="price"
                            value={carPrice}
                            onChange={e=>setCarPrice(e.target.value)}
                            autoFocus
                            required
                        />
                    </form>
                </div>
            <div className= "text-center">
                <button type= "button" className="btn btn-primary" onClick={handleSubmit}>
                    Link Details to NFT
                </button>
            </div>    
            </div>        
        </div>
    )
};

export default GenerateLicense;