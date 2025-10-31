import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import ShowCase from "./components/ShowCase.jsx";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Performance from "./components/Performance.jsx";
import Highlights from "./components/Highlights.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main >
            <NavBar />
            <Hero/>
            <ProductViewer/>
            <ShowCase/>
            <Performance/>
            <Features />
            <Highlights/>
            <Footer/>
        </main>
    )
}
export default App