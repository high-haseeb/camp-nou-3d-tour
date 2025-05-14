// written by high-haseeb <github.com/high-haseeb>
import { Overlay } from "@/components/Overlay";
import { Scene } from "@/components/Scene";

const HomePage = () => {
  return (
        <div className="w-full h-screen bg-[#181818]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/75 via-red-500/50 to-yellow-500/40"/>
            <Overlay />
            <Scene />
        </div>
    );
}

export default HomePage;
