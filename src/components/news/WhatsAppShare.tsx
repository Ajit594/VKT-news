import { useState } from "react";
import { MessageCircle, X, Share2 } from "lucide-react";

const WhatsAppShare = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shareUrl, setShareUrl] = useState("");

    const handleShare = () => {
        const currentUrl = window.location.href;
        const message = `Check out VKT News: ${currentUrl}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleCustomShare = () => {
        if (shareUrl.trim()) {
            const message = `Check out this news: ${shareUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            setShareUrl("");
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Main WhatsApp Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-20 left-4 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl transition-all hover:scale-110 group"
                aria-label="Share on WhatsApp"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Share on WhatsApp
                </span>
            </button>

            {/* Share Menu */}
            {isOpen && (
                <div className="fixed bottom-36 left-4 z-40 w-80 bg-card border border-border rounded-2xl shadow-2xl p-4 animate-fade-in">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                            <Share2 className="w-5 h-5 text-[#25D366]" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-lg">Share News</h3>
                            <p className="text-xs text-muted-foreground">Share via WhatsApp</p>
                        </div>
                    </div>

                    {/* Quick Share Current Page */}
                    <button
                        onClick={handleShare}
                        className="w-full mb-3 p-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Share This Page
                    </button>

                    {/* Divider */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="bg-card px-2 text-muted-foreground">or share custom link</span>
                        </div>
                    </div>

                    {/* Custom URL Share */}
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={shareUrl}
                            onChange={(e) => setShareUrl(e.target.value)}
                            placeholder="Paste news link here..."
                            className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] bg-background"
                        />
                        <button
                            onClick={handleCustomShare}
                            disabled={!shareUrl.trim()}
                            className={`w-full p-2 rounded-lg font-medium transition-colors ${shareUrl.trim()
                                    ? "bg-[#25D366] hover:bg-[#20BA5A] text-white"
                                    : "bg-muted text-muted-foreground cursor-not-allowed"
                                }`}
                        >
                            Share Custom Link
                        </button>
                    </div>

                    {/* Popular News to Share */}
                    <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">QUICK SHARE</p>
                        <div className="space-y-2">
                            {[
                                "PM Modi's Infrastructure Plan",
                                "Virat Kohli's Record Century",
                                "Sensex Hits All-Time High",
                            ].map((title, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        const message = `Check out: ${title} - ${window.location.origin}`;
                                        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappUrl, "_blank");
                                    }}
                                    className="w-full text-left p-2 hover:bg-muted rounded-lg transition-colors text-sm flex items-center gap-2"
                                >
                                    <MessageCircle className="w-3 h-3 text-[#25D366] flex-shrink-0" />
                                    <span className="line-clamp-1">{title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppShare;
