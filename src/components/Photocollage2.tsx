import React from "react";
import pic1 from "../assets/team/1.webp"
import pic2 from "../assets/team/2.webp"
import pic3 from "../assets/team/3.webp"
import pic4 from "../assets/team/4.webp"
import pic5 from "../assets/team/5.webp"
import pic6 from "../assets/team/6.webp"
import pic7 from "../assets/team/7.webp"
import pic8 from "../assets/team/8.webp"
import pic9 from "../assets/team/9.webp"
import pic10 from "../assets/team/10.webp"
import pic11 from "../assets/team/11.webp"
import pic12 from "../assets/team/12.webp"
import pic13 from "../assets/team/13.webp"
import pic14 from "../assets/team/14.webp"
import pic15 from "../assets/team/15.webp"
import pic16 from "../assets/team/16.webp"
import pic17 from "../assets/team/17.webp"
import pic18 from "../assets/team/18.webp"
import pic19 from "../assets/team/19.webp"
import pic20 from "../assets/team/20.webp"
import pic21 from "../assets/team/21.webp"
import pic22 from "../assets/team/22.webp"
import pic23 from "../assets/team/23.webp"
import pic24 from "../assets/team/24.webp"
import pic25 from "../assets/team/25.webp"
import pic26 from "../assets/team/26.webp"
import pic27 from "../assets/team/27.webp"
import pic28 from "../assets/team/28.webp"
import pic29 from "../assets/team/29.webp"
import pic30 from "../assets/team/30.webp"
import pic31 from "../assets/team/31.webp"
import pic32 from "../assets/team/32.webp"
import pic33 from "../assets/team/33.webp"
import pic34 from "../assets/team/34.webp"
import pic35 from "../assets/team/35.webp"
import pic36 from "../assets/team/36.webp"
import pic37 from "../assets/team/37.webp"
import pic38 from "../assets/team/38.webp"
import pic39 from "../assets/team/39.webp"
import pic40 from "../assets/team/40.webp"
import pic41 from "../assets/team/41.webp"
// Import more images as needed

const Photocollage2 = () => {
  const images = [
  
  pic25, 
   pic26,
    pic27,
    pic28,
    pic29,
    //pic30,
    pic31, 
    //pic32,
    //pic33, // not working
   pic34,
    pic35,
    //pic36, // not working
    pic38,
    pic39,
    pic40,
    pic41,
    // Add more imported images here
  ];

  return (
   
       <div className="h-full p-16 md:p-8 ">
<div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-2 md:gap-1 h-full overflow-y-auto">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden " style={{ paddingBottom: '100%' }}> 
            <img 
              src={src} 
              alt={`Travel photo ${index + 1}`}
              className="absolute inset-0 w-full h-full  "
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
            <div className="absolute inset-0 bg-gradient-to-t from-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Photocollage2;