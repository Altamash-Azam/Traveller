import React from 'react'

const ImageOverlay = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="absolute z-10 inset-0 p-5 gap-1.5 flex flex-col justify-end rounded-2xl group-hover:rounded-none duration-500 bg-teal-700/10 blur-[0.4px]">
      <h3 className="text-white text-3xl  mb-2 ">{title}</h3>
      <p className="text-white/80 font-light">{description}</p>
    </div>
  );
};

const TopButton = ({days, nights, color}: {days:string, nights:string, color:string})=>{
  return (
    <div className='absolute z-10 top-0 left-0'>
      <div className={`flex-shrink-0 text-${color} text-sm border-${color}/80 border mt-5 ml-6 px-3 py-2 rounded-full  backdrop-blur-[0.7px] hover:bg-white/20 transition-colors cursor-pointer`}>
        <button className="focus:outline-none">{days} day, {nights} night</button>
      </div>
    </div>
  )
}

const FavouriteSection = () => {
  return (
    <div className='flex flex-col mx-4 lg:mx-20 my-30 items-center'>
      <div className='font-medium text-xl text-[#259ada] mb-5'>//OUR FAVOURITES</div>
      <div className='lg:text-5xl text-3xl text-left lg:text-center w-[90%] mx-auto  mb-15'>discover our exception collection of itineraries made by travel enthusiasts around the world</div>

      <div className='flex flex-col lg:flex-row h-[1000px] lg:h-[450px] gap-5'>
        <div className='w-full lg:w-1/2 h-full relative overflow-hidden group'>
          <img className='object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-110' src="landscapes/favourite4.jpg" alt="" />
          <TopButton days="5" nights="4" color="white"/>
          <div className="absolute z-10  p-5 pr-8 bottom-0 left-0 flex flex-row justify-between h-1/3 items-end rounded-2xl group-hover:rounded-none duration-500 bg-teal-700/10 blur-[0.4px] ">
            <div className='w-[60%] flex flex-col  gap-1.5'>
              <h3 className="text-white text-3xl  mb-2 ">All Inclusive</h3>
            <p className="text-white/80 font-light">These are for planning out a complete journey including stay and food to make your travels easy.</p>
            </div>
            <div className='flex-shrink-0 text-white text-xl border-white/80 border mb-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer'>
          <button className="focus:outline-none">Explore More</button>
        </div>
          </div>
          
        </div>
        <div className='w-full lg:w-1/4 h-full relative overflow-hidden group'>
          <img className='object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-110' src="landscapes/favourite1.jpg" alt="" />
          <TopButton days="5" nights="4"  color="gray-500"/>
          <ImageOverlay title="Peace" description="Travel to places where you can rest and let nature heal you with out nature selection." />

        </div>
        <div className='w-full lg:w-1/4 h-full relative overflow-hidden group'>
          <img className='object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-110' src="landscapes/favourite2.jpg" alt="" />
          <TopButton days="5" nights="4"  color="white"/>
          <ImageOverlay title="Adventure " description="These are for planning out a complete journey including stay and food" />
        </div>
      </div>
    </div>
  )
}

export default FavouriteSection
