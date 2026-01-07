import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Sun,
  Cloud,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { breakingNews, categories } from "@/data/newsData";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-news">
          <div className="flex items-center justify-between h-9 text-sm">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">{today}</span>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-gold-accent" />
                <span className="font-medium">Delhi: 32°C</span>
                <Cloud className="w-4 h-4 ml-1" />
                <span className="text-secondary-foreground/70">Partly Cloudy</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <a href="#" className="hover:text-gold-accent transition-colors" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gold-accent transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gold-accent transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-gold-accent transition-colors" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <div className="h-4 w-px bg-secondary-foreground/30 hidden md:block" />
              <ThemeToggle />
              <div className="h-4 w-px bg-secondary-foreground/30 hidden sm:block" />
              <button className="font-medium hover:text-gold-accent transition-colors">
                हिंदी
              </button>
              <span className="text-secondary-foreground/50">/</span>
              <button className="font-medium text-gold-accent">
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-news">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -ml-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">V</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-xl text-foreground leading-none">
                  VKT News
                </h1>
                <p className="text-xs text-muted-foreground">Truth First</p>
              </div>
            </a>
          </div>

          {/* Center: Mega Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.slice(0, 7).map((category) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 font-body font-medium text-foreground hover:text-primary transition-colors">
                  {category}
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                {activeCategory === category && (
                  <div className="absolute top-full left-0 w-48 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in">
                    <a href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Latest in {category}
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Top Stories
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Opinion
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Videos
                    </a>
                  </div>
                )}
              </div>
            ))}
            <button className="px-4 py-2 font-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              More
            </button>
          </nav>

          {/* Right: Search + Live TV */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
              <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </button>
            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 animate-pulse-live gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              <Play className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Watch Live</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg animate-fade-in z-40">
          <nav className="container-news py-4">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="px-4 py-3 font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Breaking News Ticker */}
      <div className="gradient-breaking overflow-hidden">
        <div className="container-news">
          <div className="flex items-center h-10">
            <span className="flex-shrink-0 px-4 py-1 bg-secondary text-secondary-foreground font-bold text-sm uppercase tracking-wide mr-4">
              Breaking
            </span>
            <div className="overflow-hidden flex-1">
              <div className="ticker-text text-primary-foreground font-medium">
                {breakingNews.map((news, index) => (
                  <span key={index} className="mx-8">
                    {news}
                    {index < breakingNews.length - 1 && (
                      <span className="mx-4 text-primary-foreground/50">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
