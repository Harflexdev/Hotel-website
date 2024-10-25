import React from 'react'

const Picked = () => {
  return (
    <div className='flex mt-20 justify-center'>
        <div className="w-[87%] flex items-center justify-center  gap-6 p-8">
            <div className=" h-[450px] w-[30%]  rounded-2xl bg-img1 bg-cover bg-no-repeat"  ></div>
            <div className=" h-[450px] w-[75%] ">
                <div className="flex   justify-center gap-[50px]">
                    <div className=" h-[200px] w-[47%]  rounded-2xl bg-img2 bg-contain bg-no-repeat object-cover"></div>
                    <div className=" h-[200px] w-[47%]  rounded-2xl bg-img3 bg-contain bg-no-repeat"></div>
                </div>
                <div className="flex gap-4 justify-between mt-8">
                    <div className="  h-[200px] w-[47%]  rounded-2xl bg-img4 bg-contain bg-no-repeat object-cover"></div>
                    <div className="  h-[200px] w-[47%]  rounded-2xl bg-img5 bg-contain bg-no-repeat object-cover"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Picked