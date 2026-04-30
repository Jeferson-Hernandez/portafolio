'use client'

import Model from "@/lib/model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";

const Scene = () => {
    return (
        <div className="mb-60 sm:mb-70 md:mb-110">
            <div className="absolute inset-0 translate-y-14 sm:translate-y-0 w-70 h-70 sm:w-120 sm:h-120 md:w-160 md:h-160 mx-auto -z-10">
                <Canvas camera={{ position: [0, 5, 14], fov: 30 }}>
                    <Suspense fallback={null}>
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