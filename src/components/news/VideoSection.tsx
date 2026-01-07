import { Play, Clock } from "lucide-react";
import { newsArticles } from "@/data/newsData";

const VideoSection = () => {
    const videoArticles = newsArticles.filter(a => a.category === "Entertainment" || a.category === "Cricket" || a.category === "Technology").slice(0, 6);

    return (
        <section className="py-8">
            <div className="container-news">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Play className="w-5 h-5 text-primary fill-current" />
                        </div>
                        <h2 className="font-heading font-bold text-2xl">Video News</h2>
                    </div>
                    <a href="#" className="text-primary font-medium hover:underline">
                        View All Videos →
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoArticles.map((article) => (
                        <article key={article.id} className="card-news group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg">
                                        <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 gradient-story">
                                    <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-semibold rounded mb-2">
                                        {article.category}
                                    </span>
                                    <h3 className="headline-md text-white line-clamp-2">
                                        {article.title}
                                    </h3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
