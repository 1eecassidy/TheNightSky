import ShuttleImg from "../assets/home/shuttle.svg"
import SatelliteleImg from "../assets/home/satellite.svg"

export default function Home() {
    return (
        <div className="pt-32">
            <div className="text-white text-6xl grid place-items-center">Welcome</div>
            <div className="text-white grid place-items-center pt-12">
                <h1 className="text-4xl ">About</h1>
                <p className="text-2xl text-center mx-48 tracking-widest py-2">The Night Sky is a website that allows the users to view the 3D models and AR views of different planets, spacecrafts, and satellites. It is a tool that allows all the space enthusiasts to explore all the space around us.</p>
            </div>
            <div className="w-full flex items-center justify-center text-lg mt-12 mb-4">
                <div className="inline-flex h-1 mx-4 bg-white rounded-full w-1/3"></div>
                <div className="inline-flex h-1 mx-4 bg-transparent rounded-full w-20"></div>
                <div className="inline-flex h-1 mx-4 bg-white rounded-full w-1/3"></div>
            </div>
            <div className="text-white grid place-items-center pt-12">
                <h1 className="text-4xl ">Goal</h1>
                <p className="text-2xl text-center mx-48 tracking-widest py-2">Our Goal is to give an ease of access to astronomy knowledge to people all around the world in a way that everyone can enjoy. Aside from entertaining, we also wanted to create an interactive learning experience so that everyone have the option to play around while learning in the same time thus making the learning experience more fun.</p>
            </div>
            <div className="w-full flex items-center justify-center mt-12 mb-4  h-full">
                <img src={ShuttleImg} alt="Shuttle" className="w-1/4 float-left" />
                <div className="inline-flex h-1 mx-4 bg-transparent rounded-full w-60"></div>
                <img src={SatelliteleImg} alt="Shuttle" className="w-1/4" />
            </div>
        </div>
    )
}
