import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./index.module.css";

const LavaBall: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();

    // Load Textures
    const albedoMap = textureLoader.load("/textures/baseColor.jpg"); // Base color
    const normalMap = textureLoader.load("/textures/normal.png"); // Surface details
    const roughnessMap = textureLoader.load("/textures/roughness.jpg"); // Roughness
    const metallicMap = textureLoader.load("/textures/normalDX.jpg"); // Metallic
    const aoMap = textureLoader.load("/textures/normalGL.jpg"); // Ambient occlusion
    const displacementMap = textureLoader.load("/textures/displacement.jpg"); // Displacement
    const emissiveMap = textureLoader.load("/textures/emission.jpg"); // Glow

    // Create Material
    const lavaMaterial = new THREE.MeshStandardMaterial({
      map: albedoMap, // Base color
      normalMap: normalMap, // Surface details
      roughnessMap: roughnessMap, // Roughness
      metalnessMap: metallicMap, // Metallic
      aoMap: aoMap, // Ambient occlusion
      displacementMap: displacementMap, // Displacement
      displacementScale: 0.1, // Adjust displacement strength
      emissiveMap: emissiveMap, // Glow
      emissive: 0xff4500, // Glow color
      emissiveIntensity: 1.5, // Glow intensity
    });

    // Create Sphere
    const lavaGeometry = new THREE.SphereGeometry(3, 64, 64);
    const lavaMesh = new THREE.Mesh(lavaGeometry, lavaMaterial);
    scene.add(lavaMesh);

    // Handle Resize
    const handleResize = () => {
      const width = mountRef.current!.clientWidth;
      const height = mountRef.current!.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Initial Resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the lava ball smoothly
      lavaMesh.rotation.x += 0.001;
      lavaMesh.rotation.y += 0.001;

      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      controls.dispose();
    };
  }, []);

  return <div ref={mountRef} className={styles.container} />;
};

export default LavaBall;
