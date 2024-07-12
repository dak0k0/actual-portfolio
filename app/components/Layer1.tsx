'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'

const Layer1 = () => {
    return (
        <div className="absolute z-1 max-w-[100%] w-screen h-[50vh] bottom-0">  
            <div className="absolute z-10 max-w-[100%] w-screen bg-black bottom-0 h-[50vh]">
                <div className="flex flex-col items-center justify-center h-full text-offwhite">
                    placeholder text
                </div>
            </div>
            <div className="absolute z-0 max-w-[100%] w-screen bg-black bottom-[calc(tan(6deg)*50vw)] skew-y-6 h-[50vh]">
            </div>
            
        </div>
    );
}

// welcome to the dak0k0 chronicles.

export default Layer1;