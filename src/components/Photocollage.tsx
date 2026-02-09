import React from "react";
import cruiseImage from '../assets/team/cruise.jpg';
import destinationImage from '../assets/team/destination.jpg';
import hotelImage from '../assets/team/hotel.jpg';
import eco from '../assets/team/eco-tourism.jpg';
import mice from '../assets/team/mice-event.jpg';
// Import more images as needed

const Photocollage = () => {
  const images = [
    cruiseImage,
    destinationImage,
    hotelImage,
    eco,
    mice,
    cruiseImage,
    destinationImage,
     hotelImage,
    eco,
    mice,
    cruiseImage,
   
    // Add more imported images here
  ];

  return (
   
       <div className="h-full p-6 md:p-8 border-4 border-white rounded-2xl m-4">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 h-full overflow-y-auto">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg md:rounded-xl shadow-xl group">
            <img 
              src={src} 
              alt={`Travel photo ${index + 1}`}
              className="w-full h-full object-cover min-h-[150px] md:min-h-[180px] transform group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                console.error(`Failed to load image: ${src}`);
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `
                  <div class="w-full h-full min-h-[150px] md:min-h-[180px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold rounded-lg">
                    Image ${index + 1}
                  </div>
                `;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Photocollage;