import React from "react";
import pic1 from "../assets/team/1.jpg"
import pic2 from "../assets/team/2.jpg"
import pic3 from "../assets/team/3.jpg"
import pic4 from "../assets/team/4.jpg"
import pic5 from "../assets/team/5.jpg"
import pic6 from "../assets/team/6.jpg"
import pic7 from "../assets/team/7.jpg"
import pic8 from "../assets/team/8.jpg"
import pic9 from "../assets/team/9.jpg"
import pic10 from "../assets/team/10.jpg"
import pic11 from "../assets/team/11.jpg"
import pic12 from "../assets/team/12.jpg"
import pic13 from "../assets/team/13.jpg"
import pic14 from "../assets/team/14.jpg"
import pic15 from "../assets/team/15.jpg"
import pic16 from "../assets/team/16.jpg"
import pic17 from "../assets/team/17.jpg"
import pic18 from "../assets/team/18.jpg"
import pic19 from "../assets/team/19.jpg"
import pic20 from "../assets/team/20.jpg"
import pic21 from "../assets/team/21.jpg"
import pic22 from "../assets/team/22.jpg"
import pic23 from "../assets/team/23.jpg"
import pic24 from "../assets/team/24.jpg"
import pic25 from "../assets/team/25.jpg"
import pic26 from "../assets/team/26.jpg"
import pic27 from "../assets/team/27.jpg"
import pic28 from "../assets/team/28.jpg"
import pic29 from "../assets/team/29.jpg"
import pic30 from "../assets/team/30.jpg"
import pic31 from "../assets/team/31.jpg"
import pic32 from "../assets/team/32.jpg"
import pic33 from "../assets/team/33.jpg"
import pic34 from "../assets/team/34.jpg"
import pic35 from "../assets/team/35.jpg"
import pic36 from "../assets/team/36.jpg"
import pic37 from "../assets/team/37.jpg"
// Import more images as needed

const Photocollage = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
   // pic9, // not working
  //pic10, // not working
   pic12,
  // pic13, // size different
  // pic14,
   pic15,
   // pic16, // not working
   // pic17, // not working
   // pic18, // not working
    pic19,
   // pic20, // not working
   // pic21, // not working
   pic22,
   pic23,
   //pic24,
    //pic25, // not working
    //pic26,
    //pic27,
    //pic28,
    //pic29,
    //pic30,
    //pic31, // not working
   // pic32,
    //pic33, // not working
   //pic34,
   //pic35,// not working
    //pic36, // not working
    // Add more imported images here
  ];

  return (
   
       <div className="h-full p-16 md:p-8 ">
<div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-2 md:gap-2 h-full overflow-y-auto">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg" style={{ paddingBottom: '100%' }}> 
            <img 
              src={src} 
              alt={`Travel photo ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover "
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