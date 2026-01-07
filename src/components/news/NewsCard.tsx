import { Clock, Play } from "lucide-react";
import type { NewsArticle } from "@/data/newsData";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "lead" | "standard" | "compact" | "video";
}

const NewsCard = ({ article, variant = "standard" }: NewsCardProps) => {
  const renderTags = () => (
    <div className="flex items-center gap-2 mb-2">
      {article.isBreaking && <span className="tag-breaking">Breaking</span>}
      {article.isExclusive && <span className="tag-exclusive">Exclusive</span>}
      {article.isLive && (
        <span className="tag-live">
          <span className="live-dot" />
          Live
        </span>
      )}
    </div>
  );

  if (variant === "lead") {
    return (
      <article className="card-news group cursor-pointer">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 gradient-story" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {renderTags()}
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded mb-3">
              {article.category}
            </span>
            <h2 className="headline-xl text-white mb-3 text-balance">
              {article.title}
            </h2>
            <p className="body-text text-white/90 line-clamp-2 mb-4">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 caption-text text-white/70">
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "video") {
    return (
      <article className="card-news group cursor-pointer">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform transition-transform group-hover:scale-110">
              <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 gradient-story">
            {renderTags()}
            <h3 className="headline-md text-white line-clamp-2">{article.title}</h3>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group cursor-pointer flex gap-4 py-4 border-b border-border last:border-0">
        <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          {renderTags()}
          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
            {article.category}
          </span>
          <h3 className="headline-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 mt-2 caption-text">
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </article>
    );
  }

  // Standard variant
  return (
    <article className="card-news group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {(article.isBreaking || article.isExclusive || article.isLive) && (
          <div className="absolute top-3 left-3">
            {renderTags()}
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">
          {article.category}
        </span>
        <h3 className="headline-md text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-3">
          {article.title}
        </h3>
        <p className="body-text text-muted-foreground line-clamp-2 mb-4 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 caption-text mt-auto">
          <span className="font-medium">{article.author}</span>
          <span>•</span>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
