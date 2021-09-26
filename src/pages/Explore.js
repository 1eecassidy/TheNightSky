import { Link } from "react-router-dom"
import MercuryImg from "../assets/planets/Mercury.svg"
import VenusImg from "../assets/planets/Venus.svg"
import EarthImg from "../assets/planets/Earth.svg"
import MarsImg from "../assets/planets/Mars.svg"
import JupiterImg from "../assets/planets/Jupiter.svg"
import SaturnImg from "../assets/planets/Saturn.svg"
import UranusImg from "../assets/planets/Uranus.svg"
import NeptuneImg from "../assets/planets/Neptune.svg"
import MoonLanding from "../assets/explore/moonlanding.png"
import MarsRoverImg from "../assets/explore/marsrover.png"

export default function Explore() {
    return (
        <div className="pt-32">
            <div className="text-white text-6xl grid place-items-center uppercase">Explore</div>
            <div className="text-white pt-12">
                <h1 className="text-4xl pl-28 uppercase">Planets:</h1>
                <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                    <Link to='/mercury'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 h-full" alt="" src={MercuryImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Mercury</div>
                        </div>
                    </Link>

                    <Link to='/venus'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 h-full" alt="" src={VenusImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Venus</div>
                        </div>
                    </Link>

                    <Link to='/earth'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 h-56" alt="" src={EarthImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Earth</div>
                        </div>
                    </Link>

                    <Link to='/mars'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-72" alt="" src={MarsImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Mars</div>
                        </div>
                    </Link>

                    <Link to='/jupiter'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-36" alt="" src={JupiterImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Jupiter</div>
                        </div>
                    </Link>

                    <Link to='/saturn'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 h-full" alt="" src={SaturnImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Saturn</div>
                        </div>
                    </Link>

                    <Link to='/uranus'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-56" alt="" src={UranusImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Uranus</div>
                        </div>
                    </Link>

                    <Link to='/neptune'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-48" alt="" src={NeptuneImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Neptune</div>
                        </div>
                    </Link>

                </div>

            </div>
            <div className="w-full flex items-center justify-center text-lg mt-12 mb-4">
                <div className="inline-flex h-1 mx-4 bg-white rounded-2xl w-1/3"></div>
                <div className="inline-flex h-1 mx-4 bg-transparent rounded-2xl w-20"></div>
                <div className="inline-flex h-1 mx-4 bg-white rounded-2xl w-1/3"></div>
            </div>
            <div className="text-white pt-12">
                <h1 className="text-4xl pl-28 uppercase">Space Missions:</h1>
                <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                    <Link to='/moonlanding'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-88" alt="" src={MoonLanding} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Apollo 11</div>
                        </div>
                    </Link>

                    <Link to='/mars2020'>
                        <div className="cursor-pointer transition duration-500 transform my-8 hover:scale-105 w-72 h-72">
                            <div className="w-60 h-60 bg-exploreCards rounded-3xl grid place-items-center">
                                <img className="pb-8 w-full" alt="" src={MarsRoverImg} />
                            </div>
                            <div className="grid place-content-center mx-1 my-4 p-2 w-60 rounded-2xl text-xl font-semibold bg-exploreCards">Mars 2020</div>
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}
