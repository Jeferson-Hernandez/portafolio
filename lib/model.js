'use client'

import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/model.glb")
    return (
        <primitive object={gltf.scene} scale={.7}/>
    )
}

export default Model;