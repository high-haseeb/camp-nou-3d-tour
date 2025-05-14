// written by high-haseeb <github.com/high-haseeb>
"use client";

import { Center, Environment, GizmoHelper, GizmoViewcube, Loader, OrbitControls  } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Suspense } from "react";
import { useControls } from "leva";

const environmentPresets = [
    "sunset",
    "dawn",
    "night",
    "warehouse",
    "forest",
    "apartment",
    "studio",
    "city",
    "park",
    "lobby"
];

export const Scene = () => {

    const { preset } = useControls('Environment', {
        preset: {
            options: environmentPresets,
            value: 'city'
        }
    });

    return (
        <div className="w-full h-full">
            <Loader/>
            <Canvas className="w-full h-screen" camera={{ fov: 22.0, zoom: 0.5 }}>
                <Suspense fallback={null}>
                    {/* @ts-ignore */}
                    <Environment preset={preset} />
                </Suspense>
                <GizmoHelper alignment="bottom-right" margin={[80, 80]} >
                    <GizmoViewcube />
                </GizmoHelper>
                <OrbitControls/>
                <Center>
                    <Model />
                </Center>
            </Canvas>
        </div>
    );
}
