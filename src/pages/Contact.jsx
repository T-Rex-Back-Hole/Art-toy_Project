import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="font-bold text-5xl text-center my-12">Contact</div>
          <form className="flex flex-col justify-center space-y-4 w-1/2">

            <div id="name-email-input" className="flex flex-col justify-center md:flex-row md:space-x-4">
              <div id="input-name" className="w-full md:w-1/2">
                  <input id="name" type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none"/>
              </div>

              <div id="input-email" className="w-full md:w-1/2 mt-4 md:mt-0">
                  <input id="email" type="email" placeholder="E-mail" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none"/>
              </div>
            </div>

            <div id="text-area" className="w-full">
              <textarea name="" id="text-area" rows="4" placeholder="Message" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none" ></textarea>
            </div>
            <div id="btn-contact" className="flex w-full">
              <button type="submit" class="w-full bg-[#B47AEA] text-white py-3 px-6 mb-12 rounded-md hover:bg-purple-600 focus:outline-none">
                      Send message
              </button>
            </div>

          </form>

          <section id="subscribe" className="bg-[#F7F7F7] p-8">
            <div id="container-text" className='flex flex-col justify-center text-center'>
              <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
              <h1 className="text-[#B47AEA] font-bold text-4xl">News Letter</h1>
              <p className="text-[#B47AEA]">Subscribe to our newsletter and receive all the news and exclusive deals from T-Rex!</p>
            </div>
            <div id="subscribe-email" className='flex justify-center'>
              <input type="email" placeholder='E-mail' className="w-96 m-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none" />
              <button type="submit" id='subscribe-btn' className="bg-[#B47AEA] px-12 py-2 m-4 rounded-md text-white hover:bg-purple-600 focus:outline-none font-semibold text-xl">Subscribe</button>
            </div>
          </section>

          <section id="icon-service">
            <div id="container-service" className='flex justify-evenly p-10'>

              <div id="service-box1" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-lock text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box2" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-rocket text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box3" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-gift text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box4" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-comments text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>

            </div>
          </section>
      
        
      
      
      
    </>
    
  )
}

export default Contact