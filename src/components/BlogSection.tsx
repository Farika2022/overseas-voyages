import { Calendar, ArrowRight } from 'lucide-react';
import ecoTourismImg from '@/assets/eco-tourism.jpg';
import miceEventImg from '@/assets/mice-event.jpg';
import cruiseImg from '@/assets/cruise.jpg';
const posts = [
  {
    category: 'Travel Trends',
    title: 'Emerging Destinations for 2024',
    excerpt: 'Discover the hidden gems that are set to become the next big travel destinations.',
    date: 'Jan 15, 2024',
    image: ecoTourismImg,
  },
  {
    category: 'Sustainability',
    title: 'How We\'re Making Travel Greener',
    excerpt: 'Our latest initiatives in carbon-neutral travel and community support programs.',
    date: 'Jan 10, 2024',
    image: miceEventImg,
  },
  {
    category: 'MICE',
    title: 'Corporate Travel Innovations',
    excerpt: 'New approaches to business travel that combine productivity with unforgettable experiences.',
    date: 'Jan 5, 2024',
    image: cruiseImg,
  },
];

const BlogSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Blog & Insights
          </span>
          <h2 className="section-title">
            Travel Stories & <span className="text-primary">Inspiration</span>
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-background rounded-3xl overflow-hidden card-hover cursor-pointer"
            >
               {/* Image  Background */}
              
              <div className="h-48 relative overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-brand-red-dark flex items-center justify-center">
                            </div>
                )}
               
              </div>
           
              {/* Image Placeholder */}
            

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
