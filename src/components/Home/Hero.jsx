import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero-area py-10 bg-green-300">
        <div className="container mx-auto px-5 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 text-center mb-10">
            <h1 className='text-[50px] font-bold lg:w-[80%] pt-10'>Increase Your Customers Loyalty and Satisfaction</h1>
            <p className='text-lg font-semibold lg:w-[75%] py-5'>We help businesses like yours earn more customers, standout from competitors,  make more money</p>
            <button className='btn bg-green-500'>Get Started</button>
          </div>
          <div className="col-span-12 lg:col-span-6 mx-auto">

            <div className="flex mb-6">
              <div className="basis-5/8 pr-4">
                <img src="/public/hero/hero-1.png" alt="" />
              </div>
              <div className="basis-3/8">
              <img src="/public/hero/hero-2.png" alt="" />
              </div>
            </div>

            <div className="flex">
              <div className="basis-3/8 pr-4">
                <img src="/public/hero/hero-3.png" alt="" />
              </div>
              <div className="basis-5/8">
              <img src="/public/hero/hero-4.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
