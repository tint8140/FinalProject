import React, { useRef, Suspense, useState, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
// import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
// import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import Position from "./Position";
import { Display } from "../Display";

export default function Earth(props) {
  const [points, setPoints] = useState(<Position />);

  useEffect(() => {
    Display.information(onPointsChange);
  }, []);

  function onPointsChange() {
    setPoints(<Position />);
  }

  const earth = useRef();

  //creating earth
  const earthMap = useLoader(TextureLoader, "./images/earth.jpg");

  return (
    <Suspense fallback={null}>
      <Stars
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={earth} rotation={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthMap} metalness={0.4} roughness={0.7} />
        {points}
      </mesh>
    </Suspense>
  );
}
