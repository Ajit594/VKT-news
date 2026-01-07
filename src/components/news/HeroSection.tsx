import HeroCarousel from "./HeroCarousel";
import { newsArticles } from "@/data/newsData";

const HeroSection = () => {
  const heroStories = newsArticles.slice(0, 4); // First 4 articles for carousel
  const topUpdates = newsArticles.slice(4, 9); // Next 5 for top updates

  return (
    <section className="py-6">
      <div className="container-news">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Lead Story Carousel - 60% */}
          <div className="lg:col-span-3">
            <HeroCarousel articles={heroStories} />
          </div>

          {/* Top 5 Updates - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg border border-border h-full">
              <div className="p-4 border-b border-border">
                <h2 className="font-heading font-bold text-lg flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Top Updates
                </h2>
              </div>
              <div className="divide-y divide-border">
                {topUpdates.map((article, index) => (
                  <article
                    key={article.id}
                    className="group cursor-pointer flex gap-4 p-4 hover:bg-muted/50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-heading font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {article.category}
                      </span>
                      <h3 className="headline-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {article.title}
                      </h3>
                      <span className="caption-text mt-1 block">
                        {article.publishedAt}
                      </span>
                    </div>
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
