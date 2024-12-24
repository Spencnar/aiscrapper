import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(300, 300);
    mount.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Create texture loader
    const textureLoader = new THREE.TextureLoader();
    
    // Load FBX model
    const loader = new FBXLoader();
    loader.load('/threed/cyberknife.fbx', (fbx) => {
      fbx.scale.setScalar(0.008);
      fbx.rotation.x = Math.PI / 2;
      
      // Load and apply texture
      const texture = textureLoader.load('/threed/cyberknifecolor.png');
      
      // Apply texture to all meshes in the model
      fbx.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Check if material is MeshStandardMaterial or MeshBasicMaterial
          if (child.material instanceof THREE.MeshStandardMaterial || 
              child.material instanceof THREE.MeshBasicMaterial) {
            child.material.map = texture;
            child.material.needsUpdate = true;
          } else {
            // Create a new material if the current one doesn't support textures
            child.material = new THREE.MeshStandardMaterial({
              map: texture
            });
          }
        }
      });
      
      scene.add(fbx);
    });
    
    const animate = () => {
      requestAnimationFrame(animate);
      if (scene.children.length > 2) { // Check if model is loaded (2 is for lights)
        scene.children[2].rotation.z += 0.01;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-72 h-72" />;
};

export default ModelViewer;