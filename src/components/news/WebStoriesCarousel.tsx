import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { webStories } from "@/data/newsData";

const WebStoriesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-6 bg-muted/50">
      <div className="container-news">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-bold text-xl flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            Web Stories
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4"
        >
          {webStories.map((story) => (
            <article
              key={story.id}
              className="flex-shrink-0 w-32 sm:w-36 cursor-pointer group"
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${story.gradient} opacity-60`} />
                <div className="absolute inset-0 gradient-story" />
                
                {/* Ring effect */}
                <div className="absolute inset-0 rounded-xl ring-2 ring-inset ring-white/20" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded">
                    {story.category}
                  </span>
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white text-sm font-semibold line-clamp-3 leading-tight">
                    {story.title}
                  </h3>
                </div>
                
                {/* Progress dots */}
                <div className="absolute top-1.5 left-1.5 right-1.5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <div
                      key={dot}
                      className="flex-1 h-0.5 rounded-full bg-white/30"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebStoriesCarousel;
