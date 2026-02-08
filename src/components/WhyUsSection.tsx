import { Award, Leaf, Handshake, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Expertise & Experience',
    description: 'Years of industry knowledge and strong global partnerships built on trust and reliability.',
  },
  {
    icon: Leaf,
    title: 'Sustainability Commitment',
    description: 'We prioritize responsible tourism and eco-friendly initiatives in everything we do.',
  },
  {
    icon: Handshake,
    title: 'Exclusive Connections',
    description: 'Access to top-tier Destination Management Companies, suppliers, and emerging travel experiences.',
  },
  {
    icon: Sparkles,
    title: 'Tailored Solutions',
    description: 'Customized travel options to fit your needs, whether for leisure, business, or adventure.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="section-title text-left">
              Your Trusted Partner in <span className="text-primary">Global Travel</span>
            </h2>
            <div className="accent-line mt-6 mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With decades of combined experience in the travel industry, we've built an unparalleled network of connections that enables us to deliver extraordinary experiences across every continent.
            </p>
            <a
              href="#contact"
              className="btn-hero"
            >
              Partner With Us
            </a>
          </div>

          {/* Right - Reason Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 bg-secondary rounded-2xl hover:bg-primary transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
