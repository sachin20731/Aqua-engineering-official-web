import React from 'react'
import interior from '../assets/interior.png'
import interior2 from '../assets/480578978_594161316781685_7806299601722349753_n.png'

function ServicePage() {
  return (
    <>

    <div className='bg-white h-300'>

        <div className='text-orange-500  text-2xl font-[outfit] justify-center flex  mt-4 pt-7 '> | Our Services |</div>
        <div className= 'text-black text-2xl sm:text-3xl md:text-5xl justify-center flex font-[outfit]  text-center '>Sri Lanka's No One Partner For <br/>  All Your Construction Needs.</div>

    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-6 ml-13 mr-13'>
                {/* Card 1 */}
                <div className='bg-white  border-1 border-b-gray-400 h-150 p-4 w-full max-w-sm mx-auto'>
                    <div className='flex justify-center gap-2'>
                    <img src={interior} alt="Interior 1" className='w-32 ' />
                    <img src={interior2} alt="Interior 2" className='w-32' />
                    </div>
                    <h3 className='text-xl font-[outfit] mt-4 text-center font-semibold'>House & Building Construction</h3>
                    <p className='text-gray-700 text-center mt-2'>
                    Expert services for building residential and commercial spaces from the ground up.
                    </p>
                </div>

                {/* Card 2 */}
                <div className='bg-white border shadow-lg rounded-xl p-4 w-full max-w-sm mx-auto'>
                    <div className='flex justify-center gap-2'>
                    <img src={interior} alt="Interior 1" className='w-32 rounded' />
                    <img src={interior2} alt="Interior 2" className='w-32 rounded' />
                    </div>
                    <h3 className='text-xl font-[outfit] mt-4 text-center font-semibold'>Interior Design</h3>
                    <p className='text-gray-700 text-center mt-2'>
                    Transform your space with our expert interior design services.
                    </p>
                </div>

                {/* Card 3 */}
                <div className='bg-white border shadow-lg rounded-xl p-4 w-full max-w-sm mx-auto'>
                    <img
                    src="https://www.royalinteriors.lk/wp-content/uploads/2022/10/Interior-Design.jpg"
                    alt="Interior Design"
                    className='w-full h-40 object-cover rounded'
                    />
                    <h3 className='text-xl font-[outfit] mt-4 text-center font-semibold'>Interior Design</h3>
                    <p className='text-gray-700 text-center mt-2'>
                    Transform your space with our expert interior design services.
                    </p>
                </div>
        </div>
    </div>
    </>
  )
}

export default ServicePage