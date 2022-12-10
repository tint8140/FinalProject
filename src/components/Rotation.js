import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";
import "./styles.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export default function Rotation() {
  const [spin, setSpin] = useState(true);

  function screenClick() {
    setSpin(false);
  }

  return (
    <div
      onClick={(e) => {
        screenClick();
      }}
    >
      <div id="title">Find a ramdom Country</div>

      <Canvas>
        <Earth position={[0, 0, 0]} />
        <PerspectiveCamera makeDefault position={[-2, 0, -1]}>
          <directionalLight intensity={0.7} />
        </PerspectiveCamera>
        <OrbitControls autoRotate={spin} />
      </Canvas>
    </div>
  );
}
