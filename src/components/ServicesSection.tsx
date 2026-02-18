/*import { Leaf, Users, MapPin, Building2, Ship, Mountain } from 'lucide-react';*/
import miceEventImg from '@/assets/mice-event.jpg'
import eco from '@/assets/eco.jpg';
import adventure from '@/assets/sky.jpg';
import heroLandscape from '@/assets/hero-landscape.jpg';
import hotel from '@/assets/hotel.jpg';
import destination from '@/assets/destination.jpg';
import cruise from '@/assets/cruise.jpg'
const services = [
  {
    /*icon: Leaf,*/
    title: 'Eco-Tourism',
    description: 'Sustainable travel experiences that support local communities and the environment.',
    image: eco,
  },
  {
    /*icon: Users,*/
    title: 'MICE',
    description: 'Tailored solutions for Meetings, Incentives, Conferences, and Exhibitions worldwide.',
    image: miceEventImg,
  },
  {
    /*icon: MapPin,*/
    title: 'Destination Marketing',
    description: 'Helping destinations build global visibility and attract conscious travelers.',
    image: destination,
  },
  {
    /*icon: Building2,*/
    title: 'Hotels & Unique Stays',
    description: 'Exclusive accommodations tailored to every traveler\'s needs and preferences.',
    image: hotel,
  },
  {
    /*icon: Ship,*/
    title: 'Cruises',
    description: 'We sell all the world\'s leading ocean cruises and river cruises.',
    image: cruise,
  },
  {
    /*icon: Mountain,*/
    title: 'Adventure & Activities',
    description: 'Wild activities, theme parks, and unexplored destinations for the adventurous.',
    image:adventure,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="section-title">
            Curating Exceptional <span className="text-primary">Travel Experiences</span>
          </h2>
          <p className="section-subtitle mt-4">
            We specialize in sourcing the finest travel suppliers and curating exceptional experiences worldwide.
          </p>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-3xl overflow-hidden card-hover"
            >
              {/* Image or Icon Background */}
              <div className="h-48 relative overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-brand-red-dark flex items-center justify-center">
                   
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                
               
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
