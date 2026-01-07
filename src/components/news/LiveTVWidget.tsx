import { useState } from "react";
import { X, Maximize2, Minimize2, Volume2, VolumeX, Play, Pause, Tv } from "lucide-react";

const LiveTVWidget = () => {
  const [isMinimized, setIsMinimized] = useState(true); // Start minimized
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Show reopen button when widget is closed
  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-40 p-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl transition-all hover:scale-110 group"
        aria-label="Open Live TV"
      >
        <Tv className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground"></span>
        </span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Watch Live TV
        </span>
      </button>
    );
  }

  return (
    <div
      className={`fixed z-40 transition-all duration-300 ${isMinimized
        ? "bottom-4 right-4 w-72 shadow-2xl rounded-lg"
        : "bottom-0 right-0 left-0 md:left-auto md:w-[500px] md:bottom-4 md:right-4 md:rounded-lg shadow-2xl"
        }`}
    >
      <div className="relative bg-black rounded-lg overflow-hidden">
        {/* Video placeholder */}
        <div className={`relative ${isMinimized ? "aspect-video" : "aspect-video"}`}>
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80"
            alt="Live TV"
            className="w-full h-full object-cover"
          />

          {/* Live overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Play/Pause overlay */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors">
                <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
              </div>
            </button>
          )}

          {/* Live badge */}
          <div className="absolute top-3 left-3">
            <span className="tag-live">
              <span className="live-dot" />
              LIVE
            </span>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-white text-sm font-medium ml-2">VKT News Live</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTVWidget;
