import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
  pauseOnHover?: boolean;
  showControls?: boolean;
  className?: string;
  itemClassName?: string;
}

export function PartnerCarousel({
  partners,
  autoScroll = true,
  autoScrollInterval = 3000,
  pauseOnHover = true,
  showControls = true,
  className,
  itemClassName
}: PartnerCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPaused, setIsPaused] = React.useState(false);

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = React.useMemo(() => {
    return [...partners, ...partners, ...partners];
  }, [partners]);

  // Auto-scroll logic
  React.useEffect(() => {
    if (!autoScroll || !api || isPaused) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [api, autoScroll, autoScrollInterval, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  if (!partners.length) return null;

  return (
    <div 
      className={cn("w-full relative group", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {duplicatedPartners.map((partner, index) => (
            <CarouselItem 
              key={`${partner.id}-${index}`}
              className={cn(
                "pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5",
                itemClassName
              )}
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-32 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-auto h-12 max-w-full object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-sm text-gray-600 font-medium text-center">
                  {partner.name}
                </span>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showControls && (
          <>
            <CarouselPrevious className="hidden group-hover:flex -left-4 lg:-left-12 bg-white/80" />
            <CarouselNext className="hidden group-hover:flex -right-4 lg:-right-12 bg-white/80" />
          </>
        )}
      </Carousel>
    </div>
  );
}