import React from 'react';
import Typewriter from 'typewriter-effect'
import LayerTwoColors from './components/LayerTwoColors';
import Image from 'next/image'
import { DM_Serif_Display } from "next/font/google";

const dm_serif_display = DM_Serif_Display({weight: "400", subsets: ["latin"]})

const DesktopContent = () => {
    return (
        <div className="hidden md:block relative h-[calc(278.33vh+3*100vw*tan(6deg))] max-w-[100%] w-screen">
            <div className="relative h-[calc(100vh+43.33vh)]">
                <div className="flex flex-col items-center justify-center h-[calc(83.34vh-2*tan(6deg)*25vw)] text-palette-beige skew-y-[-3deg]">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString('<strong style="letter-spacing:0.1rem;font-size:40px;"> welcome to the dak0k0 chronicles.</strong>')
                            .pauseFor(1000)
                            .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(500)  // <br> does not work in flexboxes, so we use a div
                            .changeDelay(35)
                            .typeString('<p style="font-size:36px">herein lies a journey through life,</p>').pauseFor(500)
                            .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(500)
                            .typeString('<p style="font-size:36px">painstakingly documented</p>').pauseFor(250)
                            .typeString('<div style="display:block;width:100%;height:0px;"></div>').pauseFor(250)
                            .typeString('<p style="font-size:36px">one 3 A.M. coding session at a time.</p>')
                            .start()
                            ;
                        }} options={{
                            delay: 50,
                            cursor: ""
                        }}
                    />
                </div>
                <div className="h-[calc(50vw*tan(6deg))]"></div>
                <div className="flex w-full h-[60vh]">
                    <div className="flex w-1/2 h-full items-center justify-center z-10">
                        <div className="relative w-[350px] h-[calc(1.46*350px)]">
                            <Image src="/techpic.jpg" fill={true} alt="Picture of Dakota with a laptop on their lap staring out the window into the sunset"/>
                            <p className={`absolute left-[-150px] top-[30px] text-8xl ${dm_serif_display.className} text-palette-blue`}>technology</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 h-full items-center justify-center z-10">
                        <div className="grid w-[300px] h-[300px] grid-cols-3">
                            <div className="relative">
                                <Image src="/techsvgs/python.svg" fill={true} alt="python logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/java.svg" fill={true} alt="java logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/c.svg" fill={true} alt="c logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/logo-r-script.svg" fill={true} alt="r logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/react.svg" fill={true} alt="reactjs logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/nextjs-icon.svg" fill={true} alt="nextjs logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/vim.svg" fill={true} alt="vim logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/mathworks.svg" fill={true} alt="matlab logo"/>
                            </div>
                            <div className="relative">
                                <Image src="/techsvgs/visual-studio-code.svg" fill={true} alt="vscode logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-[-1] bg-palette-pink h-[calc(60vh+2*100vw*tan(6deg))] flex">
                <div className="flex w-[30%]"></div>
                <div className="flex w-[70%] items-center justify-center">
                    <div className="relative h-[400px] w-[calc(1.333333*400px)]">
                        <Image src="/brownie cooking class.JPG" fill={true} alt="picture of a sustainable brownie cooking class"/>
                        <p className={`absolute left-[-300px] top-[30px] text-8xl ${dm_serif_display.className} text-palette-green`}>sustainability</p>
                    </div>
                </div>
            </div>
            <div className="relative h-[calc(75vh+100vw*tan(6deg))]">
                <div className="absolute bg-black h-full w-full bottom-0 z-[-1]"></div>
                <div className="relative z-2 h-[60vh] flex">
                    <div className="flex items-center justify-center w-1/2">
                        <div className="relative h-[600px] w-[calc(0.666666*600px)]">
                            <Image src="/Dance.JPG" fill={true} alt="photo of dakota in a dance"/>
                            <p className={`absolute left-[-125px] top-[80px] text-8xl ${dm_serif_display.className} text-palette-pink`}>dance</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-1/2">
                        <div className="relative h-[calc(0.666666*500px)] w-[500px]">
                            <Image src="/andmore.JPG" fill={true} alt="photo of dakota in a dance"/>
                            <p className={`absolute left-[225px] bottom-[20px] whitespace-nowrap text-8xl ${dm_serif_display.className} text-palette-red`}>and more</p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[calc(15vh+100vw*tan(6deg))]">
                    <div className="absolute w-full h-[40px] bottom-2 z-0 flex items-center justify-center">
                        <div className="grid w-[170px] h-full grid-cols-3">
                            <a href="mailto:vbn6ct@virginia.edu" target="_blank" className="relative ">
                                <Image src="/contactmesvgs/email-svgrepo-com.svg" fill={true} alt="email"/>
                            </a>
                            <a href="https://www.linkedin.com/in/dakota-yu-0b01a125a/" target="_blank" className="relative">
                                <Image src="/contactmesvgs/linkedin-fill-svgrepo-com.svg" fill={true} alt="linkedin"/>
                            </a>
                            <a href="https://www.instagram.com/dakotayuu/" target="_blank" className="relative">
                                <Image src="/contactmesvgs/instagram-svgrepo-com.svg" fill={true} alt="instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <LayerTwoColors color1="bg-palette-beige" color2="bg-palette-green" distfrombottom="bottom-[calc(135vh+3*100vw*tan(6deg))]" />
            <LayerTwoColors color1="bg-palette-red" color2="bg-palette-purple" distfrombottom="bottom-[calc(15vh+100vw*tan(6deg))]" />
        </div>
    );
}

export default DesktopContent;