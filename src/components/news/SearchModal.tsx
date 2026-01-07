import { useState, useEffect, useRef } from "react";
import { Search, X, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { trendingTopics, categories } from "@/data/newsData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const recentSearches = [
  "Virat Kohli century",
  "Budget 2025",
  "Shah Rukh Khan new movie",
  "ISRO Chandrayaan",
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // This would need to be handled by parent
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <DialogTitle className="sr-only">Search VKT News</DialogTitle>
        
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search news, topics, and more..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(query)}
            className="border-0 bg-transparent focus-visible:ring-0 text-lg placeholder:text-muted-foreground/60 px-0"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-muted rounded-md transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
            ESC
          </kbd>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {query ? (
            /* Search Results */
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Press <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground">Enter</kbd> to search for "{query}"
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleSearch(`${query} in ${category}`)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
                  >
                    {query} in {category}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Default State */
            <div className="space-y-6">
              {/* Recent Searches */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  Recent Searches
                </h3>
                <div className="space-y-1">
                  {recentSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => {
                        setQuery(search);
                        handleSearch(search);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-lg text-left transition-colors group"
                    >
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="flex-1">{search}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Topics */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Trending Now
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {trendingTopics.slice(0, 6).map((topic) => (
                    <button
                      key={topic.rank}
                      onClick={() => handleSearch(topic.title)}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded-lg text-left transition-colors group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                        {topic.rank}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{topic.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Pills */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  Browse by Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSearch(category)}
                      className="px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
