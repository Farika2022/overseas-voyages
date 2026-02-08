import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Who We Are
          </span>
          <h2 className="section-title">
            Passionate About Travel, <br />
            <span className="text-primary">Committed to Excellence</span>
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-muted-foreground leading-relaxed">
            <span className="font-display text-2xl text-foreground font-semibold">Overseas Voyages</span> is an innovative company dedicated to promoting new and emerging destinations while championing sustainable travel. We believe in connecting travelers with authentic experiences that respect local cultures and preserve natural wonders for future generations.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Story */}
          <div className="group p-8 bg-secondary rounded-3xl hover:bg-primary transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-accent group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors">
              <Heart className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              Our Story
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
              Born from a passion for discovery, we've built a global network of trusted partners who share our vision of meaningful, responsible travel experiences.
            </p>
          </div>

          {/* Our Mission */}
          <div className="group p-8 bg-secondary rounded-3xl hover:bg-primary transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-accent group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors">
              <Target className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              Our Mission
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
              Connecting travelers with responsible tourism experiences worldwide, ensuring every journey creates positive impact for communities and environments.
            </p>
          </div>

          {/* Our Vision */}
          <div className="group p-8 bg-secondary rounded-3xl hover:bg-primary transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-accent group-hover:bg-primary-foreground/20 flex items-center justify-center mb-6 transition-colors">
              <Eye className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              Our Vision
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
              To be the leading hub for curated travel experiences, connecting travelers with trusted suppliers and unforgettable journeys across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
