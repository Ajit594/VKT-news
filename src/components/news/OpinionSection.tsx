import { Quote, ArrowRight } from "lucide-react";

interface Columnist {
  id: string;
  name: string;
  title: string;
  avatar: string;
  article: string;
  excerpt: string;
}

const columnists: Columnist[] = [
  {
    id: "1",
    name: "Shekhar Gupta",
    title: "Editor-in-Chief",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    article: "The Changing Landscape of Indian Politics",
    excerpt: "As India enters a crucial election year, the political dynamics are shifting in ways few predicted...",
  },
  {
    id: "2",
    name: "Barkha Dutt",
    title: "Consulting Editor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    article: "Women's Rights: Progress and Challenges Ahead",
    excerpt: "The landmark Supreme Court judgment opens new doors, but implementation remains the key challenge...",
  },
  {
    id: "3",
    name: "Rajdeep Sardesai",
    title: "Senior Columnist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    article: "Cricket and Politics: An Indian Love Story",
    excerpt: "From stadiums to election rallies, how cricket continues to shape our national narrative...",
  },
];

const OpinionSection = () => {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container-news">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Quote className="w-8 h-8 text-primary" />
            <div>
              <h2 className="font-heading font-bold text-2xl">Opinion & Editorial</h2>
              <p className="text-muted-foreground text-sm">Perspectives that matter</p>
            </div>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors group"
          >
            View All Opinions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Columnists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columnists.map((columnist) => (
            <article
              key={columnist.id}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={columnist.avatar}
                  alt={columnist.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
                />
                <div>
                  <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {columnist.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{columnist.title}</p>
                </div>
              </div>

              {/* Quote decoration */}
              <div className="relative pl-4 border-l-4 border-primary/30 group-hover:border-primary transition-colors">
                <Quote className="absolute -left-3 -top-1 w-6 h-6 text-primary/20 bg-card" />
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2">
                  {columnist.article}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {columnist.excerpt}
                </p>
              </div>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">5 min read</span>
                <span className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Column
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All */}
        <a
          href="#"
          className="sm:hidden mt-6 flex items-center justify-center gap-2 text-primary font-medium"
        >
          View All Opinions
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default OpinionSection;
