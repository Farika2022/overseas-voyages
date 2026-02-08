import { useState } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const regions = [
  { id: 'europe', name: 'Europe', destinations: ['Scandinavia', 'Mediterranean', 'Eastern Europe', 'British Isles'] },
  { id: 'asia', name: 'Asia', destinations: ['Southeast Asia', 'East Asia', 'South Asia', 'Middle East'] },
  { id: 'africa', name: 'Africa', destinations: ['East Africa', 'Southern Africa', 'North Africa', 'West Africa'] },
  { id: 'americas', name: 'Americas', destinations: ['North America', 'Central America', 'South America', 'Caribbean'] },
  { id: 'oceania', name: 'Oceania', destinations: ['Australia', 'New Zealand', 'Pacific Islands', 'Polynesia'] },
];

const mapMarkers = [
  { region: 'europe', top: '25%', left: '52%' },
  { region: 'asia', top: '35%', left: '72%' },
  { region: 'africa', top: '55%', left: '52%' },
  { region: 'americas', top: '45%', left: '22%' },
  { region: 'oceania', top: '70%', left: '85%' },
];

const DestinationsSection = () => {
  const [activeRegion, setActiveRegion] = useState('europe');

  const activeRegionData = regions.find((r) => r.id === activeRegion);

  return (
    <section id="destinations" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Destinations
          </span>
          <h2 className="section-title">
            Explore the <span className="text-primary">World</span> With Us
          </h2>
          <p className="section-subtitle mt-4">
            Interactive world map highlighting our key destinations and partnerships.
          </p>
          <div className="accent-line mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-muted to-secondary rounded-3xl overflow-hidden shadow-xl">
            {/* Simple world map representation */}
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-full"
              fill="none"
            >
              {/* Simplified continents */}
              {/* North America */}
              <path
                d="M50 100 L200 80 L280 150 L250 280 L150 350 L80 300 L30 200 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'americas' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('americas')}
              />
              {/* South America */}
              <path
                d="M180 350 L250 340 L300 400 L280 550 L200 580 L150 500 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'americas' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('americas')}
              />
              {/* Europe */}
              <path
                d="M450 80 L550 60 L600 100 L580 200 L500 220 L420 180 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'europe' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('europe')}
              />
              {/* Africa */}
              <path
                d="M450 230 L550 220 L600 300 L580 450 L500 500 L420 450 L400 350 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'africa' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('africa')}
              />
              {/* Asia */}
              <path
                d="M600 60 L900 40 L950 200 L850 350 L700 320 L620 200 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'asia' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('asia')}
              />
              {/* Oceania */}
              <path
                d="M800 400 L920 380 L950 450 L900 520 L820 530 L780 480 Z"
                className={`transition-all duration-300 cursor-pointer ${
                  activeRegion === 'oceania' ? 'fill-primary' : 'fill-muted-foreground/20 hover:fill-primary/40'
                }`}
                onClick={() => setActiveRegion('oceania')}
              />
            </svg>

            {/* Markers */}
            {mapMarkers.map((marker) => (
              <button
                key={marker.region}
                onClick={() => setActiveRegion(marker.region)}
                className={`absolute map-marker ${
                  activeRegion === marker.region ? 'w-6 h-6 bg-primary' : ''
                }`}
                style={{ top: marker.top, left: marker.left }}
                aria-label={`Select ${marker.region}`}
              />
            ))}
          </div>

          {/* Region Details */}
          <div>
            {/* Region Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeRegion === region.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>

            {/* Active Region Content */}
            {activeRegionData && (
              <div className="bg-background rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                  <h3 className="font-display text-3xl font-bold text-foreground">
                    {activeRegionData.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {activeRegionData.destinations.map((dest, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium flex-1">{dest}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
