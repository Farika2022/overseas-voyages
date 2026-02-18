import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight,Pause, Play  } from 'lucide-react';
import heroLandscape from '@/assets/hero-landscape.jpg';
import passportStamps from '@/assets/passport-stamps-map.png';
import Photocollage from './Photocollage';

interface Slide {
  image?: string;
  taglineEn?: string;
  taglineDa?: string;
  subtext?: string;
  customComponent?: React.ReactNode; 
}

const slides: Slide[] = [
  {
    image: heroLandscape,
    taglineEn: 'We Travel Everywhere to Help You Travel Anywhere',
    //subtext: 'Promoting new & emerging destinations while championing sustainable travel. We connect with and source trusted, time-tested suppliers and Destination Management Companies across the globe.',
  },
  {
    image: passportStamps,
    taglineEn: "World's Leading Hub for Time Tested Suppliers",
    subtext: 'Promoting new & emerging destinations while championing sustainable travel. We source and connect with trusted tour operators across the globe .',
  },
  {
    customComponent: <Photocollage />,
  },
  {
    image: heroLandscape,
    taglineDa: 'Vi rejser overalt for at hjælpe dig med at rejse hvor som helst',
    //subtext: 'Vi promoverer nye og fremadstormende destinationer, samtidig med at vi kæmper for bæredygtig rejseaktivitet. Vi samarbejder med og finder pålidelige, velafprøvede leverandører og destinationsstyringsvirksomheder over hele verden.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating|| isPaused) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating ,isPaused])

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  // Manual navigation with pause handling
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating, currentSlide]);

  // Toggle pause
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isCurrent = index === currentSlide;
        const hasCustomComponent = !!slide.customComponent;
        
        // Only render the full content for current slide
        if (!isCurrent) {
          return (
            <div
              key={index}
              className="absolute inset-0 opacity-0 pointer-events-none"
            >
              {/* Only render background for non-current slides */}
              {!hasCustomComponent && slide.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
            </div>
          );
        }
        
        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-1000 ease-out"
          >
            {/* Background Image */}
            {!hasCustomComponent && slide.image && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )}
            
            {/* Custom Component - Render if exists */}
            {hasCustomComponent && slide.customComponent}
            
            {/* Content Container - DO NOT add pointer-events-none here */}
            <div className="hero-content relative h-full flex flex-col justify-center items-center text-primary-foreground p-4 md:p-8">
              <div className="w-full mx-auto">
                <div className="transition-all duration-700 delay-300 relative p-1 md:p-1">
                  {/* Overlay - Only show for non-custom component slides */}
                  {!hasCustomComponent && (
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-foreground/20 to-foreground/10 backdrop-blur-sm rounded-xl -z-10" />
                  )}

                  {/* Content Area */}
                  <div className="min-h-[200px] md:min-h-[250px] flex flex-col justify-center bg-gradient-transparent">
                    {/* Main Tagline */}
                    {(slide.taglineEn || slide.taglineDa) && (
                      <h1 className="font-display text-4xl md:text-3xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto text-center">
                        {slide.taglineEn || slide.taglineDa}
                      </h1>
                    )}
                    
                    {/* Subtext */}
                    {slide.subtext && (
                      <p className="text-lg md:text-2xl mx-auto mb-8 md:mb-2 opacity-90 leading-relaxed text-center">
                        {slide.subtext}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* CTA Button - Only show if NOT custom component slide */}
                {!hasCustomComponent && (
                  <div className="flex justify-center mt-8 md:mt-12">
                    <a
                      href="#services"
                      className="btn-hero inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold"
                    >
                      {slide.taglineDa ? 'Udforsk Vores Service' : 'Explore Our Services'}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-all duration-300 z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/30 transition-all duration-300 z-30"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
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
          ? 'w-12 bg-primary group relative' // Added group for hover state
          : 'w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70'
      }`}
      aria-label={`Go to slide ${index + 1}`}
    >
      {/* Pause/Play Icon - Only on active slide, hidden by default, shows on hover */}
      {index === currentSlide && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePause();
            }}
            className="w-6 h-6 rounded-full bg-primary-foreground/30 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/50 transition-all duration-200 scale-90 group-hover:scale-100"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      )}
    </button>
  ))}
</div>
    </section>
  );
};

export default HeroSlider;