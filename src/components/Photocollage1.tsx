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

const Photocollage1 = () => {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
   // pic6,
    pic7,
   //pic9, 
   //pic10, 
   //pic12,
  // pic13, // size different
  pic14,
   //pic15,
   // pic16, // not working
    pic19,
    pic22,
  // pic23,
   pic24,
   
    // Add more imported images here
  ];

  return (
 <div className="h-full overflow-y-auto p-2">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
      {images.map((src, index) => (
        <div key={index} className="w-full overflow-hidden">
          <img
            src={src}
            alt={`Photo ${index + 1}`}
            loading="lazy"
            className="w-full h-auto block"
          />
        </div>
        ))}
      </div>
    </div>
   
  );
};

export default Photocollage1;