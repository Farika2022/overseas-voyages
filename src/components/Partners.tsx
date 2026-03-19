import { PartnerCarousel } from "./Partnerscontent";
import itb_asia from "../assets/partners/itb-asia.jpg"
import imex from "../assets/partners/IMEX.jpg"
import ibtm from "../assets/partners/ibtmworld.png"
import itcm from "../assets/partners/itcma.png"
import meetex from "../assets/partners/MEETEX.png"
import itb_berlin from "../assets/partners/itb.jpg"
import tnm from "../assets/partners/TNM.png"
const partners = [
  {
    id: 1,
    name: "ITB Asia",
    logo: itb_asia,
    website: "https://www.itb-asia.com",
    //description: "Technology Partner"
  },
  {
    id: 2,
    name: "IMEX",
    logo: imex,
    website: "https://imexevents.com",
    //description: "Strategic Partner"
  },
  {
    id: 3,
    name: "ibtm World",
    logo: ibtm,
    website: "https://www.ibtmworld.com/",
    //description: "Technology Partner"
  },
  {
    id: 4,
    name: "IT&CM ASIA",
    logo: itcm,
    website: "https://itcma.com",
   // description: "Strategic Partner"
  },
  {
    id: 5,
    name: "MEETEX",
    logo: meetex,
    website: "https://meetex.eu",
    //description: "Technology Partner"
  },
  {
    id: 6,
    name: "ITB BERLIN",
    logo: itb_berlin,
    website: "https://www.itb.com/en",
   // description: "Strategic Partner"
  },
  {
    id: 7,
    name: "TRAVEL NEWS MARKET",
    logo: tnm,
    website: "https://travelnewsmarket.dk",
   // description: "Strategic Partner"
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
      <h2 className="section-title">
           We<span className="text-primary"> Attend</span>
          </h2>
     </div>
      <PartnerCarousel 
        partners={partners}
        autoScroll={true}
        autoScrollInterval={3000}
        pauseOnHover={true}
        showControls={true}
      />
    </div>
  );
}