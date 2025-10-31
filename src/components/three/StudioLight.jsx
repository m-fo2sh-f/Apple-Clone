import React, { useRef, useEffect } from 'react'
import { Environment, Lightformer } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { SpotLightHelper, DirectionalLightHelper } from "three"

const StudioLight = () => {
    const spot1 = useRef()
    const spot2 = useRef()
    const spot3 = useRef()
    const dirLight = useRef()



    return (
        <group name='lights'>
            <Environment>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <Lightformer
                        form="rect"
                        intensity={10}
                        position={[-10, 20, -5]}
                        scale={10}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                </group>
            </Environment>
            <spotLight
                ref={spot1}
                position={[-2, -5, 5]}
                intensity={Math.PI * 0.2}
                angle={0.25}
                decay={0}
            />
            <spotLight
                ref={spot2}
                position={[0, 5, 0]}
                intensity={Math.PI *.5}
                angle={0.25}
                decay={0}
            />
            <spotLight
                ref={spot3}
                position={[0, -15, 5]}
                intensity={Math.PI * 0.5}
                angle={0.25}
                decay={0.1}
            />


            <directionalLight
                ref={dirLight}
                position={[5, 10, 5]}
                intensity={0.5}
                color={'#fff'}
            />
        </group>
    )
}

export default StudioLight
