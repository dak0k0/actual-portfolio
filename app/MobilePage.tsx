import React from 'react'
import LayerTwoColors from './components/LayerTwoColors';

const MobilePage = () => {
    return (
        <div className={`z-[-1] max-w-[100%] absolute top-0 w-screen h-[calc(80vh+60vh+60vh+200vw*tan(6deg)+60vh+20vh+100vw*tan(6deg))] md:hidden`}>
            <div className="absolute z-[-1] bottom-[calc(20vh+100vw*tan(6deg)+60vh+60vh+200vw*tan(6deg))] h-[60vh] bg-palette-beige w-full">
                <div className="absolute bg-palette-beige skew-y-6 w-full h-full bottom-[calc(50vw*tan(6deg))]">

                </div>
                <div className="absolute bg-palette-beige skew-y-[-6deg] w-full h-full bottom-[calc(50vw*tan(6deg)*-1)]">

                </div>
            </div>
            <div className="absolute z-[-2] bottom-[calc(80vh+100vw*tan(6deg))] h-[calc(60vh+200vw*tan(6deg))] bg-palette-pink w-full">

            </div>
            <div className="absolute z-[-1] bottom-[calc(20vh+100vw*tan(6deg))] h-[60vh] bg-palette-purple w-full">
                <div className="absolute bg-palette-purple skew-y-6 w-full h-full bottom-[calc(50vw*tan(6deg))]">

                </div>
                <div className="absolute bg-palette-purple skew-y-[-6deg] w-full h-full bottom-[calc(50vw*tan(6deg)*-1)]">

                </div>
            </div>
        </div>
    );
}
export 

default MobilePage;