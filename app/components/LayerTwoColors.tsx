'use client'
import React from 'react'

const LayerTwoColors = (props: {color1 : string, color2: string, distfrombottom: string}) => {
    return (
        <div className={`absolute z-[-1] flex max-w-[100%] w-screen h-[60vh] ${props.distfrombottom}`}>  
            <div className={`flex max-w-[50%] w-1/2 ${props.color1}`}>
                <div className={`absolute skew-y-6 ${props.color1} h-full w-1/2 bottom-[calc(3*tan(6deg)*25vw)]`}></div> 
                <div className={`absolute skew-y-[-6deg] ${props.color1} h-full w-1/2 bottom-[calc(tan(6deg)*25vw*-3)]`}></div>
            </div>
            <div className={`flex max-w-[50%] w-1/2 ${props.color2}`}>
                <div className={`absolute skew-y-6 ${props.color2} h-full w-1/2 bottom-[calc(tan(6deg)*25vw)]`}></div>
                <div className={`absolute skew-y-[-6deg] ${props.color2} h-full w-1/2 bottom-[calc(tan(6deg)*25vw*-1)]`}></div>
            </div>
            
        </div>
    );
}

export default LayerTwoColors;