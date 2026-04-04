import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';
import heroLandscape from '@/assets/hero-landscape.jpg';
import passportStamps from '@/assets/passport-stamps-map.png';
import Photocollage1 from './Photocollage1';
import Photocollage2 from './Photocollage2';

interface Slide {
  image?: string;
  taglineEn?: string;
  taglineDa?: string;
  subtext?: string;
  customComponent?: React.ReactNode; 
}

const slides: Slide[] = [
 {
    image: passportStamps,
    taglineEn: "World's Leading Hub for Time Tested Partners",
    subtext: "Overseas Voyages connects you with the world's most trusted and proven partners, carefully sourced from leading international markets and global trade fairs.",
  },
  {
    image: heroLandscape,
    taglineEn: 'We Travel Everywhere to Help You Travel Anywhere',
  },
  
  {
    customComponent: <Photocollage1 />,
  },
  {
    customComponent: <Photocollage2 />,
  },
  {
    image: heroLandscape,
    taglineDa: 'Vi rejser overalt for at hjælpe dig med at rejse hvor som helst',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 5000; // 5 seconds per slide

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0); // Reset progress
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0); // Reset progress
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  // Manual navigation
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setProgress(0); // Reset progress
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating, currentSlide]);

  // Toggle pause
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Progress bar animation effect
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    // Reset progress when slide changes
    setProgress(0);
    
    // Update progress every 50ms for smooth animation
    const intervalTime = 50;
    const incrementValue = (intervalTime / slideDuration) * 100;
    
    progressIntervalRef.current = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + incrementValue;
        
        // When progress reaches or exceeds 100%, move to next slide
        if (newProgress >= 100) {
          nextSlide();
          return 0;
        }
        
        return newProgress;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentSlide, isPaused, nextSlide]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

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
            
            {/* Content Container */}
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

    
      {/* Slide Indicators with Apple-style Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {/* Slide Indicators with background */}
        <div className="flex gap-3 bg-primary/30 backdrop-blur-sm px-5 py-5 rounded-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative group"
              aria-label={`Go to slide ${index + 1}`}
            >
           {index === currentSlide ? (
  <div className="h-2 w-12 rounded-full bg-primary-foreground/30 overflow-hidden">
   
    {/* Progress bar fills up based on time */}
    <div 
      className="h-full bg-primary transition-all duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  </div>
) : (
  //Inactive slide indicator dot 
  <div className="h-2 w-2 rounded-full bg-primary-foreground/50 group-hover:bg-primary-foreground/70 transition-colors duration-300" />
)
}
            </button>
          ))}
        </div>
        
        {/* Pause/Play Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePause();
          }}
          className="w-12 h-12 rounded-full bg-primary/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-primary/70"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? (
            <Play size={16} className="text-white" />
          ) : (
            <Pause size={16} className="text-white" />
          )}
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;