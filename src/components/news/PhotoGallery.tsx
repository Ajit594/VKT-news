import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  credit: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80",
    caption: "PM Modi addresses gathering at Northeast infrastructure launch",
    credit: "PTI",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    caption: "Virat Kohli celebrates his 30th Test century at MCG",
    credit: "BCCI",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    caption: "ISRO's Chandrayaan-4 lifts off from Sriharikota",
    credit: "ISRO",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    caption: "Monsoon magic in Kerala's backwaters",
    credit: "Reuters",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
    caption: "Aerial view of Mumbai's Coastal Road project",
    credit: "AFP",
  },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10s
  };

  return (
    <section className="py-8">
      <div className="container-news">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6 text-primary" />
            <h2 className="font-heading font-bold text-xl">Photo Gallery</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main Image */}
          <div className="lg:col-span-2 relative group">
            <div className="aspect-[16/10] rounded-xl overflow-hidden">
              <img
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].caption}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 gradient-story" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-medium text-lg mb-1">
                  {galleryImages[currentIndex].caption}
                </p>
                <span className="text-sm text-white/70">
                  Photo: {galleryImages[currentIndex].credit}
                </span>
              </div>
            </div>

            {/* Progress dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {galleryImages.slice(0, 3).map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-[16/10] lg:aspect-[16/7] rounded-lg overflow-hidden group/thumb ${currentIndex === index ? "ring-2 ring-primary" : ""
                  }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/20 transition-colors" />
                <p className="absolute bottom-2 left-2 right-2 text-white text-xs line-clamp-2">
                  {image.caption}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
