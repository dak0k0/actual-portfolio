import React from 'react'

const LayerTwoColors = () => {
    return (
        <div className="absolute flex max-w-[100%] w-screen h-[33.33vh] bottom-0">  
            <div className="flex max-w-[50%] w-1/2 bg-deep_cyan h-[33.33vh]">
                <div className="absolute skew-y-6 bg-deep_cyan h-full w-1/2 bottom-[calc(3*tan(6deg)*25vw)]"></div>
                <div className="absolute skew-y-[-6deg] bg-deep_cyan h-full w-1/2 bottom-[calc(tan(6deg)*25vw*-3)]"></div>
            </div>
            <div className="flex max-w-[50%] w-1/2 bg-lemon_yellow h-[33.33vh]">
                <div className="absolute skew-y-6 bg-lemon_yellow h-full w-1/2 bottom-[calc(tan(6deg)*25vw)]"></div>
                <div className="absolute skew-y-[-6deg] bg-lemon_yellow h-full w-1/2 bottom-[calc(tan(6deg)*25vw*-1)]"></div>
            </div>
            
        </div>
    );
}

export default LayerTwoColors;