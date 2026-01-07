import { useState, useEffect } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import type { NewsArticle } from "@/data/newsData";

interface HeroCarouselProps {
    articles: NewsArticle[];
    autoPlayInterval?: number;
}

const HeroCarousel = ({ articles, autoPlayInterval = 5000 }: HeroCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % articles.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, articles.length, autoPlayInterval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const currentArticle = articles[currentIndex];

    const renderTags = () => (
        <div className="flex items-center gap-2 mb-2">
            {currentArticle.isBreaking && <span className="tag-breaking">Breaking</span>}
            {currentArticle.isExclusive && <span className="tag-exclusive">Exclusive</span>}
            {currentArticle.isLive && (
                <span className="tag-live">
                    <span className="live-dot" />
                    Live
                </span>
            )}
        </div>
    );

    return (
        <div className="relative group">
            <article className="card-news cursor-pointer overflow-hidden">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                    {/* Images */}
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 gradient-story" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        {renderTags()}
                        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded mb-2 sm:mb-3">
                            {currentArticle.category}
                        </span>
                        <h2 className="headline-xl text-white mb-2 sm:mb-3 text-balance">
                            {currentArticle.title}
                        </h2>
                        <p className="body-text text-white/90 line-clamp-2 mb-3 sm:mb-4 hidden sm:block">
                            {currentArticle.excerpt}
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4 caption-text text-white/70">
                            <span className="hidden sm:inline">{currentArticle.author}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{currentArticle.publishedAt}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {currentArticle.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute top-4 right-4 flex gap-2">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${index === currentIndex
                                    ? "w-8 h-2 bg-white"
                                    : "w-2 h-2 bg-white/50 hover:bg-white/70"
                                    } rounded-full`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default HeroCarousel;
