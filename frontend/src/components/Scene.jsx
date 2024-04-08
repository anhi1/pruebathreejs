import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z= 4
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial()
        )
        scene.add(cube)
        renderer.render(scene, camera)

    }, []);

    return (
        <div className="Contenedor3D" ref={mountRef} style={{ width: '100%', height: '100vh' }}>
            
        </div>
    );
}

export default Scene;
