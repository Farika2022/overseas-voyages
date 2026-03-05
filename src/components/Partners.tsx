import { PartnerCarousel } from "./Partnerscontent";

// Sample partner data
const partners = [
  {
    id: 1,
    name: "Company A",
    logo: "/logos/company-a.svg",
    website: "https://company-a.com",
    description: "Technology Partner"
  },
  {
    id: 2,
    name: "Company B",
    logo: "/logos/company-b.svg",
    website: "https://company-b.com",
    description: "Strategic Partner"
  },
  {
    id: 1,
    name: "Company A",
    logo: "/logos/company-a.svg",
    website: "https://company-a.com",
    description: "Technology Partner"
  },
  {
    id: 2,
    name: "Company B",
    logo: "/logos/company-b.svg",
    website: "https://company-b.com",
    description: "Strategic Partner"
  },
  {
    id: 1,
    name: "Company A",
    logo: "/logos/company-a.svg",
    website: "https://company-a.com",
    description: "Technology Partner"
  },
  {
    id: 2,
    name: "Company B",
    logo: "/logos/company-b.svg",
    website: "https://company-b.com",
    description: "Strategic Partner"
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-16">
      <h2 className="section-title">
            Our Trusted <span className="text-primary"> Partners</span>
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