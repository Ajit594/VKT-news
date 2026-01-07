import { useState } from "react";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-secondary via-secondary to-trust-blue">
      <div className="container-news">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-secondary-foreground mb-3">
            Stay Ahead of the News
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-md mx-auto">
            Get breaking stories, exclusive insights, and morning briefings delivered directly to your inbox.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div className="animate-fade-in flex flex-col items-center gap-3 py-4">
              <div className="w-16 h-16 rounded-full bg-cricket-green/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-cricket-green" />
              </div>
              <p className="text-secondary-foreground font-medium text-lg">You're subscribed!</p>
              <p className="text-secondary-foreground/70 text-sm">Check your inbox for confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="pl-10 h-12 bg-card border-0 text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-secondary-foreground/60">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Free forever
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              No spam
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Unsubscribe anytime
            </span>
          </div>

          {/* Subscriber count */}
          <p className="mt-4 text-secondary-foreground/50 text-sm">
            Join <span className="font-semibold text-gold-accent">2.5M+</span> readers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
