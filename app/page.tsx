'use client'
import Image from "next/image";
import Layer1 from "./components/Layer1"
import Typewriter from "typewriter-effect"
import LayerTwoColors from "./components/LayerTwoColors";

export default function Home() {
  return (
    <main className="relative h-[116.67vh] max-w-[100%] w-screen">
      <div className="relative z-[-1] bg-maroon_purple h-screen">
        <div className="flex flex-col items-center justify-center h-[calc(83.34vh-2*tan(6deg)*25vw)] skew-y-[-6deg] text-offwhite">
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter.typeString('<strong style="letter-spacing:0.1rem;font-size:20px;"> welcome to the dak0k0 chronicles.</strong>')
                    .pauseFor(1500)
                    .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(1000)  // <br> does not work in flexboxes, so we use a div
                    .changeDelay(40)
                    .typeString('herein lies a journey through life,').pauseFor(500)
                    .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(500)
                    .typeString('painstakingly documented').pauseFor(250)
                    .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(250)
                    .typeString('one 3 A.M. coding session at a time.')
                    .start()
                    ;
                }} options={{
                    delay: 50,
                    cursor: ""
                }}
            />
        </div>
      </div>
      <div className="relative z-[-1] bg-intense_blue h-screen"></div>
      <LayerTwoColors />
    </main>
  );
}
