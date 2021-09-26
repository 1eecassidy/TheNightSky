import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/mars_perseverance_rover/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1.3} />
        </>
    );
};

export default function MoonLanding() {


    return (
        <>
            <div className="pt-36">
                <Link to="/explore" className="ml-8 text-white">Go back</Link>
                <h1 className="text-5xl grid place-items-center text-white">Welcome to Mars 2020 Mission</h1>

                <div className="w-full h-96 px-56 mb-4 mt-16 outline-none cursor-pointer lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls autoRotate/>
                    </Canvas>
                </div>

                <div className="mt-5 md:mt-0 mx-52">
                    <div className="md:flex md:flex-col md:justify-center">

                        <p className="self-center mx-8 text-lg bg-gray-300 rounded-md font-medium tracking-wide text-center p-8">Mars 2020 is a Mars rover mission forming part of NASA's Mars Exploration Program that includes the rover Perseverance and the small robotic, coaxial helicopter Ingenuity. Mars 2020 was launched from Earth on an Atlas V launch vehicle at 11:50:01 UTC on 30 July 2020,[15] and confirmation of touch down in the Martian crater Jezero was received at 20:55 UTC on 18 February 2021. This work is based on "Mars Perseverance Rover" (https://sketchfab.com/3d-models/mars-perseverance-rover-28c2d309449848aea6b8b35e25d4acb6) by Alexei Tiong (https://sketchfab.com/alexeitiong) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</p>

                        <p className="self-center m-8 text-lg tracking-wide text-center text-white">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-36 md:grid-cols-2 lg:grid-cols-2">
                            <img className="flex p-6 text-6xl rounded-xl h-60 w-60" src="https://storage.echoar.xyz/wispy-violet-4999/6bca4f75-c15c-4754-8227-e9d027561e4f" alt="Mission QR" />
                            <a href="https://go.echoar.xyz/G6xs" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">View in AR</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}