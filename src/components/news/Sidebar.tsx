import { TrendingUp } from "lucide-react";
import { trendingTopics } from "@/data/newsData";
import AdContainer from "./AdContainer";

const Sidebar = () => {
  return (
    <aside className="space-y-6">
      {/* Trending Now */}
      <div className="bg-card rounded-lg border border-border overflow-hidden sticky top-28">
        <div className="p-4 border-b border-border bg-secondary">
          <h2 className="font-heading font-bold text-lg text-secondary-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Trending Now
          </h2>
        </div>
        <div className="divide-y divide-border">
          {trendingTopics.map((topic) => (
            <a
              key={topic.rank}
              href="#"
              className="flex items-start gap-3 p-4 hover:bg-muted/50 transition-colors group"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {topic.rank}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {topic.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {topic.category}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-primary font-medium">
                    {topic.count} posts
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ad Slot */}
      <AdContainer size="300x250" />
    </aside>
  );
};

export default Sidebar;
