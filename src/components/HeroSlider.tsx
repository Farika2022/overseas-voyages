import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import heroLandscape from '@/assets/hero-landscape.jpg';
import passportStamps from '@/assets/passport-stamps-map.png';
import teamCollage from '@/assets/team-collage.jpg';
interface Slide {
  image: string;
  taglineEn: string;
  taglineDa: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    image: heroLandscape,
    taglineEn: 'We Travel Everywhere to Help You Travel Anywhere',
    taglineDa: 'Vi Rejser Overalt for at Hjælpe Dig med at Rejse Hvor Som Helst',
    subtext: 'Promoting new & emerging destinations while championing sustainable travel. We connect with and source trusted, time-tested suppliers and Destination Management Companies across the globe.',
  },
  {
    image: heroLandscape,
    taglineEn: 'Discover Breathtaking Destinations',
    taglineDa: 'Oplev Betagende Destinationer',
    subtext: 'From pristine beaches to majestic mountains, experience the world\'s most extraordinary landscapes through our curated travel experiences.',
  },
  {
    image: passportStamps,
    taglineEn: 'Your Passport to Adventure',
    taglineDa: 'Dit Pas til Eventyr',
    subtext: 'With connections spanning every continent, we open doors to destinations you\'ve only dreamed of. Your next adventure awaits.',
  },
  {
    image: teamCollage,
    taglineEn: 'Global Network, Personal Touch',
    taglineDa: 'Globalt Netværk, Personlig Service',
    subtext: 'Our team of dedicated travel experts and trusted partners work tirelessly to create unforgettable journeys tailored just for you.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
          
          {/* Content */}
          <div className="hero-content h-full flex flex-col justify-center items-center text-primary-foreground">
            <div className={`transition-all duration-700 delay-300 ${
              index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Main Tagline */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
                {slide.taglineEn}
              </h1>
              
              {/* Danish Version */}
              <p className="font-display text-xl md:text-2xl lg:text-3xl mb-8 opacity-80 italic">
                {slide.taglineDa}
              </p>
              
              {/* Subtext */}
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
                {slide.subtext}
              </p>
              
              {/* CTA Button */}
              <a
                href="#services"
                className="btn-hero"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
