import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/neptune/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1} />
        </>
    );
};

export default function Neptune() {


    return (
        <>
            <div className="pt-36">
            <Link to="/explore" className="ml-8 text-white">Go back</Link>

                <h1 className="text-5xl grid place-items-center text-white">Welcome to Neptune</h1>

                <div className="w-full h-96 px-4 outline-none cursor-pointer lg:block">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="mt-5 md:mt-0 mx-52">
                    <div className="md:flex md:flex-col md:justify-center">

                        <p className="self-center mx-8 text-lg bg-gray-300 rounded-md font-medium tracking-wide text-center p-8">Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident or the Greek letter psi.

                        </p>

                        <p className="self-center m-8 text-lg tracking-wide text-center text-white">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-36 md:grid-cols-2 lg:grid-cols-2">
                            <img className="flex p-6 text-6xl rounded-xl h-60 w-60" src="https://storage.echoar.xyz/wispy-violet-4999/270df91e-d092-43b1-ad6c-b1835523ec15" alt="Planet QR" />
                            <a href="https://go.echoar.xyz/ya76" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">View in AR</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}