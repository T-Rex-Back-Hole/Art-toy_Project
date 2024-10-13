import React from 'react'

const Main = () => {
    return (
        <>
            <section id="refer">
                <h1 className="font-bold text-3xl text-center my-10 lg:text-5xl">Art Toy reference</h1>
                <div id="container-toy" className="relative flex justify-center lg:flex lg:justify-around">
                    <img src="./images/qq.png" alt="" className="container-toy w-40 pb-5 lg:w-2/12 lg:pb-0 "/>
                    <img src="./images/ddd.png" alt="" className="container-toy hidden lg:inline"/>
                    <img src="./images/uu.png" alt="" className="container-toy hidden lg:inline"/>
                    <img src="./images/ii.png" alt="" className="container-toy hidden lg:inline"/>

                    <i id="arrow-r" className="absolute fa-solid fa-circle-chevron-right text-3xl right-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                    <i id="arrow-r" className="absolute fa-solid fa-circle-chevron-left text-3xl left-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                    
                </div>
                <div id="refer-btn" className="flex justify-center my-8">
                <button className="bg-[#B47AEA] text-white px-10 py-2 rounded-full justify-center lg:rounded-md">All our news</button>
                </div>
            </section>

            <section id="category" className=" justify-center">
                <h1 className="text-center text-4xl font-bold my-6">Category</h1>
                <div id="container-category" className="flex flex-col lg:flex-row justify-center">
                    <div id="box-left" className="flex flex-col justify-center lg:w-1/2 bg-[#B47AEA] p-8 m-6 lg:p-6 lg:m-6 rounded-xl">
                        <img src="./images/cc.png" alt="" className="" />
                        <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:px-24 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white">ART TOY</button>
                    </div>
                    <div id="box-right" className="flex flex-col justify-center lg:w-1/2 bg-[#5BDEE7] p-8 m-6 lg:p-6 lg:m-6 rounded-xl">
                        <img src="./images/dead564.png" alt="" className="" />
                        <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:px-24 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white">HERO</button>
                    </div>
                </div>
                
                
            </section>
        </>
    )
}

export default Main