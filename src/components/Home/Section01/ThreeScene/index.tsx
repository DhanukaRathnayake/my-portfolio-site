import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./index.module.css";

const LavaBallWithSatellite: React.FC = () => {
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
    controls.enableZoom = false; // Disable zooming

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Lava Ball
    const lavaGeometry = new THREE.SphereGeometry(1.5, 64, 64); // Smaller size
    const lavaMaterial = new THREE.MeshStandardMaterial({
      color: 0xff4500, // Base color (orange)
      emissive: 0xff4500, // Glow color
      emissiveIntensity: 1.5, // Glow intensity
      roughness: 0.5, // Slightly rough
      metalness: 0.1, // Slightly metallic
    });
    const lavaMesh = new THREE.Mesh(lavaGeometry, lavaMaterial);
    scene.add(lavaMesh);

    // Satellite
    const satelliteGeometry = new THREE.SphereGeometry(0.2, 16, 16); // Small sphere
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: 0x00aaff, // Blue color
      emissive: 0x00aaff, // Glow color
      emissiveIntensity: 1.0, // Glow intensity
    });
    const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satelliteMesh);

    // Satellite Orbit
    const satelliteOrbitRadius = 3; // Distance from the lava ball
    let satelliteAngle = 0; // Angle for orbit rotation

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

      // Rotate the lava ball
      lavaMesh.rotation.x += 0.001;
      lavaMesh.rotation.y += 0.001;

      // Animate the satellite orbit
      satelliteAngle += 0.01; // Speed of orbit
      satelliteMesh.position.x =
        Math.cos(satelliteAngle) * satelliteOrbitRadius;
      satelliteMesh.position.z =
        Math.sin(satelliteAngle) * satelliteOrbitRadius;

      // Animate the lava ball's emissive intensity
      lavaMaterial.emissiveIntensity = Math.sin(Date.now() * 0.001) * 0.5 + 1.5;

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

export default LavaBallWithSatellite;
