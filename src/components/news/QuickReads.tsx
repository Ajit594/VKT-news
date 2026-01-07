import { Zap, ArrowRight } from "lucide-react";
import { newsArticles } from "@/data/newsData";

const QuickReads = () => {
    const quickReads = newsArticles.slice(10, 18);

    return (
        <section className="py-8 bg-muted/20">
            <div className="container-news">
                <div className="flex items-center gap-3 mb-6">
                    <Zap className="w-6 h-6 text-gold-accent fill-current" />
                    <h2 className="font-heading font-bold text-2xl">Quick Reads</h2>
                    <span className="text-sm text-muted-foreground">• Under 3 minutes</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickReads.map((article, index) => (
                        <article
                            key={article.id}
                            className="group bg-card border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded bg-gold-accent/10 text-gold-accent font-bold text-xs flex items-center justify-center">
                                    {index + 1}
                                </span>
                                <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                                    {article.category}
                                </span>
                            </div>

                            <h3 className="headline-sm text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-3">
                                {article.title}
                            </h3>

                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{article.publishedAt}</span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickReads;
