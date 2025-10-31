import React from 'react'
import useMacBookStore from "../store/index.jsx";
import clsx from "clsx";
import {Canvas} from '@react-three/fiber'
import {Box, OrbitControls} from "@react-three/drei";
import {MacBook14Modal} from "./models/Macbook-14.jsx";
import StudioLight from "./three/StudioLight.jsx";
import SwitchModels from "./three/SwitchModels.jsx";
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const {color ,scale ,setColor , setScale} = useMacBookStore()
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

    return (
        <section className="product-viewer relative ">
            <h2>Take a closer look</h2>
            <div className={'controls'}>
                <p className={'info'} > MacBook pro {scale} in {color} </p>
                <div className={'flex-center gap-5 mt-5'}>
                    <div className={'color-control'}>
                        <div onClick={()=>{setColor('#adb5bd')}}
                             className={clsx('bg-neutral-300',color === '#adb5bd' && 'active')} >
                        </div>
                        <div onClick={()=>{setColor('#2e2c2e')}}
                             className={clsx('bg-neutral-900',color === '#2e2c2e' && 'active')} >
                        </div>
                    </div>
                    <div className={'size-control'}>
                        <div onClick={()=>{setScale(0.06)}}
                             className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')} >
                            <p>14</p>
                        </div>
                        <div onClick={()=>{setScale(0.08)}}
                             className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')} >
                            <p>16</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={' w-full h-full relative '}>


                <div className='
                    absolute
                    top-50 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    sm:w-50 sm:h-50
                    lg:w-100 lg:h-100
                    bg-white
                    rounded-full
                    sm:blur-[100px]
                    opacity-50
                    pointer-events-none
                '>
                </div>

            </div>
            <Canvas id={'canvas'} camera={{position:[0,2,3] ,fov:50,near:.1 , far:100}}>
                <StudioLight />
                <SwitchModels isMobile={isMobile} scale={isMobile ? scale- 0.03 : scale}/>
            </Canvas>


        </section>
    )
}
export default ProductViewer
