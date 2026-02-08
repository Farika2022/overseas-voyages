import { Leaf, Globe2, Users, Award } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: 'Carbon-Neutral Programs',
    description: 'We offset carbon emissions for all our travel packages through verified environmental projects.',
  },
  {
    icon: Globe2,
    title: 'Eco-Certifications',
    description: 'We partner exclusively with eco-certified hotels and tour operators.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'A portion of every booking supports local communities and conservation efforts.',
  },
  {
    icon: Award,
    title: 'Responsible Guidelines',
    description: 'Comprehensive guidelines ensuring minimal environmental footprint for all travelers.',
  },
];

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sustainability & Responsible Tourism
            </span>
            <h2 className="section-title text-left">
              Our Commitment to a <span className="text-primary">Greener Future</span>
            </h2>
            <div className="accent-line mt-6 mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe travel should enrich both the traveler and the destinations visited. Our sustainability initiatives ensure that every journey creates positive impact while preserving the world's natural and cultural treasures.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Eco Partners</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Carbon Offset</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-hero"
            >
              Join Us in Sustainable Travel
            </a>
          </div>

          {/* Right - Initiative Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-secondary rounded-2xl hover:bg-primary transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
