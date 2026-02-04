import React, { useRef, useState,  useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../../Reveal.tsx";

/*Included images */
import test1 from "../../assets/test1.jpg"
import test2 from "../../assets/test2.jpeg"
import test from "../../assets/voyages-wallpaper.jpg"

const Work: React.FC = () => {
  return (
    <section
      id="work"
      className="relative bg-violet-blush py-2 overflow-hidden pt-10 md:pt-14"
    >
      <div className="section">
        <div className="mb-12 text-center">
          <Reveal direction="up">
            <motion.h2
              className="text-4xl md:text-5xl font-serif text-center mb-4 text-neutral-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
               WHO WE ARE
            </motion.h2>
          </Reveal>

          <motion.div
            className="h-2 w-24 bg-red-500 mx-auto rounded-full mb-1"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
           <Reveal direction="left" delay={0.2}>
            <motion.blockquote
              className="text-2xl md:text-2xl font-serif italic text-center text-neutral-900 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              “Our happiest moments as tourists always seem to come when we stumble upon one thing while in pursuit of something else”  -{" "}
              <strong>Lawrence Block</strong>
            </motion.blockquote>

           
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 mb-30">
        
          <Reveal direction="left" delay={0.4}>
            <PhilosophyCard
              title="Our Mission"
      description="Connecting travelers with responsible tourism experiences worldwide."
              delay={0.1}
              images={[{ original: test2, thumbnail: test2 }]}
              link=""
            />
          </Reveal>
          
          <Reveal direction="left" delay={0.4}>
            <PhilosophyCard
              title="Our Vision"
      description="To be the leading hub for curated travel experiences, connecting
      travelers with trusted suppliers and unforgettable journeys."
              delay={0.1}
              images={[{ original: test2, thumbnail: test2 }]}
              link=""
            />
          </Reveal>
          
          <Reveal direction="right" delay={0.4}>
            <PhilosophyCard
              title="Adventure & Unique Activities"
              description="Wild activities, theme parks, and unexplored destinations."
              delay={0.1}
              images={[{ original: test2, thumbnail: test2 }]}
              link=""
            />
          </Reveal>
        </div>
        
      <div className="relative w-1/2 h-[120px]"></div>
             <motion.div
               className="absolute bottom-0 left-0 right-0 h-5 pointer-events-none"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
             >
               <svg
                 className="absolute bottom-0 right-1 w-full h-auto scale-x-[-1]"
                 viewBox="4 10 750 174"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   fill="#f02727fd"
                   d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,128C672,149,768,203,864,202.7C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
                 />
               </svg>
             </motion.div>
           
      </div>
    </section>
  );
};

const PhilosophyCard: React.FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  delay: number;
  images?: { type?: "image" | "video"; original: string; thumbnail: string }[];
  link?: string;
}> = ({ title, description, delay, images = [], link }) => {
  const [showFull, setShowFull] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const checkOverflow = () => {
      const descElement = descriptionRef.current;
      if (descElement) {
        // Check if content overflows
        const isOverflowing = descElement.scrollHeight > descElement.clientHeight;
        setNeedsReadMore(isOverflowing);
      }
    };

    const timeoutId = setTimeout(checkOverflow, 100);
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkOverflow);
    };
  }, [description, showFull]);

  return (
    <motion.div
      className="relative flex flex-col w-[400px] h-[500px] text-center p-6 bg-gradient-to-br from-red-accent-600 to-red-accent-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"  
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Image Section */}
      <div className="h-44 mb-5 flex-shrink-0">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={images[0]?.thumbnail || ""}
              alt="Preview"
              className="rounded-md shadow-md w-full h-full object-cover hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            />
          </a>
        ) : (
          <img
            src={images[0]?.thumbnail || ""}
            alt="Preview"
             className="rounded-md shadow-md w-full h-full object-cover hover:opacity-90 transition-opacity duration-200 cursor-pointer hover:shadow-[inset_20px_0_20px_rgba(140,49,49,0.10)]"

            />
        )}
      </div>

      {/* Title Section */}
       <div className="h-[10%] min-h-[80px] mb-3 flex items-center justify-center"> {/* Added min-height and margin-bottom */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <h3
              className="text-white text-2xl font-bold transition-all text-neutral-900 duration-300 hover:scale-105 cursor-pointer"
              style={{ fontFamily: "Sofia, cursive" }}
            >
              {title}
            </h3>
          </a>
        ) : (
          <h3
            className="text-white text-4xl font-bold transition-all text-neutral-900 duration-300 hover:scale-105"
            style={{ fontFamily: "Sofia, cursive" }}
          >
            {title}
          </h3>
        )}
      </div>

      {/* Description Section */}
      <div className="flex-1 min-h-0 flex flex-col">
        <div
          ref={descriptionRef}
          className={`text-white font-bold transition-all duration-300 flex-grow ${
            showFull ? 'overflow-y-auto' : 'line-clamp-4'
          }`}
          style={{ 
            fontFamily: "Sofia, cursive",
            fontSize: 25,
            lineHeight: '1.6'
          }}
        >
          {description}
        </div>

        {/* Read More/Show Less Button */}
        {needsReadMore && (
          <div className="mt-4 pt-3 border-t border-white/20 flex-shrink-0">
            <button
              className="text-red-800 hover:text-red-900 font-medium text-sm transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setShowFull(!showFull);
              }}
            >
              {showFull ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
 
 

export default Work;