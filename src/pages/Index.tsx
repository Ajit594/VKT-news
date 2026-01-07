import Header from "@/components/news/Header";
import HeroSection from "@/components/news/HeroSection";
import TrendingTopics from "@/components/news/TrendingTopics";
import WebStoriesCarousel from "@/components/news/WebStoriesCarousel";
import CricketScorecard from "@/components/news/CricketScorecard";
import VideoSection from "@/components/news/VideoSection";
import NewsGrid from "@/components/news/NewsGrid";
import LiveTVWidget from "@/components/news/LiveTVWidget";
import Footer from "@/components/news/Footer";
import ReadingProgress from "@/components/news/ReadingProgress";
import BackToTop from "@/components/news/BackToTop";
import Newsletter from "@/components/news/Newsletter";
import OpinionSection from "@/components/news/OpinionSection";
import PhotoGallery from "@/components/news/PhotoGallery";
import WhatsAppShare from "@/components/news/WhatsAppShare";
import QuickReads from "@/components/news/QuickReads";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />
      <main>
        <HeroSection />
        <TrendingTopics />
        <CricketScorecard />
        <WebStoriesCarousel />
        <VideoSection />
        <PhotoGallery />
        <NewsGrid />
        <QuickReads />
        <OpinionSection />
        <Newsletter />
      </main>
      <Footer />
      <LiveTVWidget />
      <WhatsAppShare />
      <BackToTop />
    </div>
  );
};

export default Index;
