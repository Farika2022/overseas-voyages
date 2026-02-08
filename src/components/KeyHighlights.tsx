import { Globe, Leaf, Ship } from 'lucide-react';

const highlights = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Destination Management Companies across every continent',
  },
  {
    icon: Leaf,
    title: 'Eco-Tourism Experts',
    description: 'MICE, Cruises & Unique Travel Experiences',
  },
  {
    icon: Ship,
    title: 'Sustainable Focus',
    description: 'Commitment to Sustainability & Responsible Tourism',
  },
];

const KeyHighlights = () => {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-background rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-accent group-hover:bg-primary transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
