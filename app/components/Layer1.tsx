'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

const Layer1 = () => {
    return (
        <div className="absolute z-1 max-w-[100%] w-screen h-[50vh] bottom-0">  
            <div className="absolute z-10 max-w-[100%] w-screen bg-black bottom-0 h-[50vh]">
                <div className="flex flex-col items-center justify-center h-full text-offwhite">
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
                            .typeString('through 3 A.M. coding sessions.')
                            .start()
                            ;
                        }} options={{
                            delay: 50,
                            cursor: ""
                        }}
                    />
                    
                </div>
            </div>
            <div className="absolute z-0 max-w-[100%] w-screen bg-black bottom-[calc(tan(6deg)*50vw)] skew-y-6 h-[50vh]">
            </div>
            
        </div>
    );
}

// welcome to the dak0k0 chronicles.

export default Layer1;