import NewsCard from "./NewsCard";
import Sidebar from "./Sidebar";
import AdContainer from "./AdContainer";
import { newsArticles, categories } from "@/data/newsData";

const NewsGrid = () => {
  const mainNews = newsArticles.slice(6, 14);
  const videoNews = newsArticles.filter((a) => a.category === "Entertainment").slice(0, 2);
  const moreNews = newsArticles.slice(14, 22);

  return (
    <section className="py-8">
      <div className="container-news">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
              <button className="flex-shrink-0 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-colors">
                For You
              </button>
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  className="flex-shrink-0 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-full text-sm font-medium transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children">
              {mainNews.map((article) => (
                <NewsCard key={article.id} article={article} variant="standard" />
              ))}
            </div>

            {/* Inline Ad */}
            <div className="flex justify-center">
              <AdContainer size="728x90" />
            </div>

            {/* Video Section */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                Video Stories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videoNews.map((article) => (
                  <NewsCard key={article.id} article={article} variant="video" />
                ))}
              </div>
            </div>

            {/* More News */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary rounded-full" />
                Latest Updates
              </h2>
              <div className="bg-card rounded-lg border border-border divide-y divide-border">
                {moreNews.slice(0, 5).map((article) => (
                  <NewsCard key={article.id} article={article} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
