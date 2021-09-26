import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/venus/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={1.5} />
        </>
    );
};

export default function Venus() {


    return (
        <>
            <div className="pt-36">
                <Link to="/explore" className="ml-8 text-white">Go back</Link>

                <h1 className="text-5xl grid place-items-center text-white">Welcome to Venus</h1>

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

                        <p className="self-center mx-8 text-lg bg-gray-300 rounded-md font-medium tracking-wide text-center p-8">Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a little while before dawn. Venus orbits the Sun every 224.7 Earth days. It has a synodic day length of 117 Earth days and a sidereal rotation period of 243 Earth days.
                        </p>

                        <p className="self-center m-8 text-lg tracking-wide text-center text-white">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-36 md:grid-cols-2 lg:grid-cols-2">
                            <img className="flex p-6 text-6xl rounded-xl h-60 w-60" src="https://storage.echoar.xyz/wispy-violet-4999/50a234a1-cc5c-4870-9e1d-d709a2f3d6d2" alt="Planet QR" />
                            <a href="https://go.echoar.xyz/44Xn" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-secondary border rounded-full shadow-sm lg:mt-20 sm:mt-4 hover:shadow-lg bg-white">View in AR</button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}