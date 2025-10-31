import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import ShowCase from "./components/ShowCase.jsx";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main >
            <NavBar />
            <Hero/>
            <ProductViewer/>
            <ShowCase/>
        </main>
    )
}
export default App