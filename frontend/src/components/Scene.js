import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'

const Scene = () => {
    const mountRef = useRef(initialValue:null)

    useEffect(effect: () => {

    }, deps:[])

    return (
        <div className="Contenedor3D"
            ref={mountRef}
            style={{width:'100%', height:'100vh'}}
            >
            <h1>hola</h1>
        </div>
    )
}

export default Scene