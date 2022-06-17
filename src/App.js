import React, { useEffect } from "react";
import './App.css';
import { Routes, Route, useNavigationType, useLocation, } from "react-router-dom";
import Home from "./Home";
import MintNFT from "./MintNFT";
import Success from "./Success";
import License from "./License";

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
            case "/mint-NFT":
                title = "";
                metaDescription = "";
                break;
            case "/success":
                title = "";
                metaDescription = "";
                break      
            case "/License":
                title = "";
                metaDescription = "";
                break;   
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
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/mint-NFT" element={<MintNFT />}/>
      <Route path="/success" element={<Success />}/>
      <Route path="/License" element={<License />}/>

    </Routes>);
}

export default App;
