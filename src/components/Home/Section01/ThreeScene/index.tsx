import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import styles from "./index.module.css";

const DotSphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const dotSphere = useRef<THREE.Points | null>(null);
  const originalSpherePositions = useRef<THREE.Vector3[]>([]);
  const cubePositions = useRef<THREE.Vector3[]>([]);
  const clock = useRef(new THREE.Clock()); // Track time for smooth morphing

  const morphDuration = 3; // Time to morph fully (3 seconds)
  const stayDuration = 5; // Time to stay in one shape (5 seconds)
  const sphereRadius = 6; // Custom sphere radius

  const transitionStartTime = useRef<number | null>(null); // To track when the transformation starts
  const isMorphing = useRef<boolean>(false); // Flag to track whether morphing is in progress
  const isSphereShape = useRef<boolean>(true); // Flag to track which shape is current (true for sphere, false for cube)

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(10, 10, 20); // Adjusted for a better 3D view
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls for manual rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Create a Dot-Based Sphere (starting shape is a sphere)
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64); // Sphere geometry with custom radius

    const rootStyles = getComputedStyle(document.documentElement);

    const pointsMaterial = new THREE.PointsMaterial({
      color: rootStyles.getPropertyValue("--color-blob-4").trim(), // Blue color for dots
      size: 0.2, // Size of each dot
      sizeAttenuation: true, // Dots appear smaller as they move away
    });

    // Convert the sphere geometry into points
    dotSphere.current = new THREE.Points(sphereGeometry, pointsMaterial);
    scene.add(dotSphere.current);

    // Store original sphere positions
    const positions = sphereGeometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      originalSpherePositions.current.push(
        new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
      );
    }

    // Create cube positions on the surfaces
    const cubeSize = 5; // Size of the cube
    const cubeGeometry = new THREE.BoxGeometry(
      cubeSize * 2,
      cubeSize * 2,
      cubeSize * 2,
      20,
      20,
      20
    ); // Cube geometry with more segments
    const cubeVertices = cubeGeometry.attributes.position.array;
    for (let i = 0; i < cubeVertices.length; i += 3) {
      const x = cubeVertices[i];
      const y = cubeVertices[i + 1];
      const z = cubeVertices[i + 2];
      if (
        Math.abs(x) === cubeSize ||
        Math.abs(y) === cubeSize ||
        Math.abs(z) === cubeSize
      ) {
        cubePositions.current.push(new THREE.Vector3(x, y, z));
      }
    }

    // Ensure both shapes have the same number of points
    while (
      cubePositions.current.length < originalSpherePositions.current.length
    ) {
      const randomFace = Math.floor(Math.random() * 6);
      let x, y, z;
      switch (randomFace) {
        case 0: // +X face
          x = cubeSize;
          y = (Math.random() - 0.5) * cubeSize * 2;
          z = (Math.random() - 0.5) * cubeSize * 2;
          break;
        case 1: // -X face
          x = -cubeSize;
          y = (Math.random() - 0.5) * cubeSize * 2;
          z = (Math.random() - 0.5) * cubeSize * 2;
          break;
        case 2: // +Y face
          x = (Math.random() - 0.5) * cubeSize * 2;
          y = cubeSize;
          z = (Math.random() - 0.5) * cubeSize * 2;
          break;
        case 3: // -Y face
          x = (Math.random() - 0.5) * cubeSize * 2;
          y = -cubeSize;
          z = (Math.random() - 0.5) * cubeSize * 2;
          break;
        case 4: // +Z face
          x = (Math.random() - 0.5) * cubeSize * 2;
          y = (Math.random() - 0.5) * cubeSize * 2;
          z = cubeSize;
          break;
        case 5: // -Z face
          x = (Math.random() - 0.5) * cubeSize * 2;
          y = (Math.random() - 0.5) * cubeSize * 2;
          z = -cubeSize;
          break;
      }
      cubePositions.current.push(new THREE.Vector3(x, y, z));
    }

    // Ensure both shapes have the same number of points
    while (
      originalSpherePositions.current.length < cubePositions.current.length
    ) {
      const randomIndex = Math.floor(
        Math.random() * originalSpherePositions.current.length
      );
      originalSpherePositions.current.push(
        originalSpherePositions.current[randomIndex].clone()
      );
    }

    // Add Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
    scene.add(ambientLight);

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

      if (!dotSphere.current) return;

      // Rotate the sphere around the Y-axis
      dotSphere.current.rotation.y += 0.0005;

      // Get elapsed time since the start of the animation
      const time = clock.current.getElapsedTime();

      // If the transition hasn't started yet, check if we need to start it
      if (!isMorphing.current && time >= stayDuration) {
        // Start morphing after 5 seconds of staying in the current shape
        transitionStartTime.current = time;
        isMorphing.current = true; // Set the flag to indicate morphing is in progress
      }

      // Calculate the morph progress
      let morphProgress = 0;
      if (isMorphing.current && transitionStartTime.current !== null) {
        const elapsedTime = time - transitionStartTime.current;
        // If elapsed time is within the morph duration, interpolate between shapes
        if (elapsedTime <= morphDuration) {
          morphProgress = elapsedTime / morphDuration;
        } else {
          // Once the morphing is complete, reset the flag for the next loop
          morphProgress = 1;
          isMorphing.current = false;
          transitionStartTime.current = null;
          isSphereShape.current = !isSphereShape.current; // Toggle between sphere and cube

          // Reset the clock to start the next cycle
          clock.current.start();
        }
      }

      // Morph between sphere and cube
      const positionsArray =
        dotSphere.current.geometry.attributes.position.array;
      for (let i = 0; i < positionsArray.length; i += 3) {
        const point = new THREE.Vector3(
          positionsArray[i],
          positionsArray[i + 1],
          positionsArray[i + 2]
        );

        // Get the target position based on the current shape
        const targetPosition = isSphereShape.current
          ? originalSpherePositions.current[i / 3]
          : cubePositions.current[i % cubePositions.current.length];

        // Interpolate between the current shape and the target shape based on morph progress
        point.lerpVectors(
          isSphereShape.current
            ? cubePositions.current[i % cubePositions.current.length]
            : originalSpherePositions.current[i / 3],
          targetPosition,
          morphProgress
        );
        positionsArray[i] = point.x;
        positionsArray[i + 1] = point.y;
        positionsArray[i + 2] = point.z;
      }

      // Mark the position attribute as needing an update
      dotSphere.current.geometry.attributes.position.needsUpdate = true;

      // Update controls
      controls.update();

      // Render the scene
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

export default DotSphere;
