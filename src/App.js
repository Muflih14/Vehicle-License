import React, { useEffect } from "react";
import CarList from "./components/CarList";
import MintNFT from "./components/MintNFT";
import Success from "./components/Success";
import VehicleLicense from "./components/VehicleLicense";
import MapSuccess from "./components/MapSuccess";
import Home from "./components/Home";
import { Routes, Route, useNavigationType, useLocation, } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;
    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action]);
    useEffect(() => {
        let title = "";
        let metaDescription = "";
        // eslint-disable-next-line
        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/Mint-NFT":
                title = "";
                metaDescription = "";
                break;
            case "/Success":
                title = "";
                metaDescription = "";
                break;
        case "/VehicleMap":
                title = "";
                metaDescription = "";
                break;
            case "/mapSuccess":
                title = "";
                metaDescription = "";
                break      
         }
        if (title) {
            document.title = title;
        }
        if (metaDescription) {
            const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);
    
    return (
        <div>
            <Home />
      <Routes>
        <Route exact path="/" element={<CarList />} component ={MintNFT}/>
        <Route path="/MintNFT/:id" element={<MintNFT />}/>
        <Route path="/Success/:id" element={<Success />}/>
        <Route path="/VehicleLicense/:id" element={<VehicleLicense />}/>
        <Route path="/mapSuccess" element={<MapSuccess />}/>
      </Routes>
      </div>);
    };
     
   export default App;