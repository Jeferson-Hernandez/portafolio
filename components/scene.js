'use client'

import Model from "@/lib/model";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

function Loader() {
    return (
    <Html center>
        <div 
            className="w-15 h-15 -translate-y-16 border-5 border-light border-t-transparent rounded-full animate-spin"
        ></div>
    </Html>
    )
}

const Scene = () => {
    return (
        <div className="mb-60 sm:mb-70 md:mb-100">
            <div className="absolute inset-0 translate-y-14 sm:translate-y-0 w-70 h-70 sm:w-120 sm:h-120 md:w-160 md:h-160 mx-auto -z-10">
                <Canvas camera={{ position: [8, 5, 14], fov: 8 }}>
                    <Suspense fallback={<Loader />}>
                        <Model />
                        <OrbitControls autoRotate />
                        <Environment preset="night" />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Scene;