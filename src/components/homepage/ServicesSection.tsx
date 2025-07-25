import React from 'react'

const ImageOverlay = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="absolute inset-0 p-5 gap-1.5 flex flex-col justify-end rounded-3xl group-hover:rounded-none duration-500  bg-slate-900/20 blur-[0.4px]">
      <h3 className="text-white text-3xl  mb-2 ">{title}</h3>
      <p className="text-white/80 font-light">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    // Added responsive margins and padding
    <div className='mx-4 md:mx-20 my-20 flex flex-col'>
      <div className='font-medium text-xl text-[#259ada] mb-5'>// OUR SERVICES</div>

      <div className='text-4xl md:text-6xl mb-6 font-light'>Explore endless options with our services</div>
      <div className='text-gray-500 w-full md:w-[60%] text-lg mb-12'>Discover a myriad of choices available through our services, offering limitless possibilities for your exploration and enjoyment.</div>

      {/* Image Grid Container */}
      <div className='flex flex-col md:flex-row gap-5 h-auto md:h-[640px]'>
        
        {/* Left Column (1 image) */}
        {/* The parent div now handles rounding and clipping */}
        <div className='w-full md:w-1/2 h-[400px] rounded-3xl md:h-full relative overflow-hidden  group'>
          <img 
            src="landscapes/landscape1.jpg" 
            alt="Scenic mountain landscape" 
            className='w-full h-full object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-110 blur-[1px]'
          />
          <ImageOverlay title="Comprehensive Travel Support" description="24/7 customer service to assist you before, during, and after your trip." />
        </div>

        {/* Right Column (2 images) */}
        <div className='w-full md:w-1/2 flex flex-col gap-5'>
          {/* The parent div now handles rounding and clipping */}
          <div className='h-[300px] md:h-1/2 relative rounded-3xl overflow-hidden group'>
            <img 
              src="landscapes/landscape5.jpg" 
              alt="Coastal view with cliffs" 
              className='w-full h-full object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-110 blur-[1px]'
            />
            <ImageOverlay title="Expert Travel Advice" description="Tips and guides to enhance your travel experience." />
          </div>
          {/* The parent div now handles rounding and clipping */}
          <div className='h-[300px] md:h-1/2 relative rounded-3xl overflow-hidden  group'>
            <img 
              src="landscapes/landscape6.jpg" 
              alt="Winding road through a forest" 
              className='w-full h-full object-cover rounded-3xl transform transition-transform duration-500 group-hover:scale-110 blur-[1px]'
            />
            <ImageOverlay title="Diverse Destinations" description="Access to a wide range of domestic and international locations." />
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default ServicesSection
