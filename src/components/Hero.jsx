import React from 'react'

const Hero = () => {
    return (
        <>
            <section id="slider-container">
                <div id="slider-wrap" className="relative max-w-*">
                    <div id="slider" className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
                        {/* <img id="slider-1" src="./images/banner1.png" alt="" className="grow shink-0 basis-full snap-start object-cover "/> */}
                        <img id="slider-2" src="./images/banner2.png" alt="" className="grow shink-0 basis-full snap-start object-cover "/>
                        <img id="slider-3" src="./images/banner3.png" alt="" className="grow shink-0 basis-full snap-start object-cover "/>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Hero