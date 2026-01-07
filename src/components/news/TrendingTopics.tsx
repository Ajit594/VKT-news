import { TrendingUp } from "lucide-react";
import { trendingTopics } from "@/data/newsData";

const TrendingTopics = () => {
    return (
        <section className="py-6 bg-muted/30">
            <div className="container-news">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h2 className="font-heading font-bold text-xl">Trending Now</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {trendingTopics.slice(0, 10).map((topic) => (
                        <a
                            key={topic.rank}
                            href="#"
                            className="group bg-card hover:bg-accent border border-border rounded-lg p-4 transition-all hover:shadow-md"
                        >
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-heading font-bold text-sm flex items-center justify-center">
                                    {topic.rank}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                                        {topic.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">
                                            {topic.category}
                                        </span>
                                        <span>{topic.count} posts</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingTopics;
