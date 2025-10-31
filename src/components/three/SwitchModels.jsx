import React, {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import {MacBook16Modal} from "../models/Macbook-16.jsx";
import {MacBook14Modal} from "../models/Macbook-14.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const animationDuration = 1
const offsetDistance = 5

const fadeMeshs =(group,opacity)=>{
    if(!group) return;

        group.traverse((child)=>{
            if(child.isMesh){
                child.material.transparent = true;
                gsap.to(child.material, {
                    opacity,
                    duration:.8
                })
            }
        })

}
const moveGroup =(group ,x)=>{
    if(!group) return;

    gsap.to(group.position, {
        x,
        duration:animationDuration
    })
}


const SwitchModels = ({scale,isMobile}) => {
    const mac16 = useRef(null)
    const mac14 = useRef(null)
    const isMac16 = scale == 0.08 || scale == 0.05 ? true : false

    useGSAP(()=>{
        if(isMac16){
            moveGroup(mac16.current ,0)
            moveGroup(mac14.current ,-offsetDistance)

            fadeMeshs(mac16.current,1)
            fadeMeshs(mac14.current,0)
        }else{
            moveGroup(mac14.current ,0)
            moveGroup(mac16.current ,offsetDistance)

            fadeMeshs(mac14.current,1)
            fadeMeshs(mac16.current,0)
        }
    },[scale])

    const controlsConfig ={
        snap:true,
        speed:1.8,
        zoom:1,
        polar:[-Math.PI,Math.PI],
        azimuth:[-Infinity,Infinity],
        config: {
            mass: 1,
            tension: 0,
            friction: 26,
        },
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={mac16}>
                    <MacBook16Modal scale={isMobile ? 0.04: 0.06} />
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}>
                <group ref={mac14}>
                    <MacBook14Modal scale={isMobile ? 0.03: 0.04} />
                </group>
            </PresentationControls>
        </>
    )
}
export default SwitchModels
