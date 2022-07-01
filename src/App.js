import React, { useEffect } from "react";
import Home from "./components/Home";
import Success from "./components/Success";
import './App.css';
import { Routes, Route, useNavigationType, useLocation, } from "react-router-dom";

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
        case "/success":
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
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/success" element={<Success />}/>
  </Routes>);
}

export default App;
