export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  isBreaking?: boolean;
  isExclusive?: boolean;
  isLive?: boolean;
  videoUrl?: string;
}

export interface CricketMatch {
  id: string;
  team1: { name: string; shortName: string; score: string; overs: string; flag: string };
  team2: { name: string; shortName: string; score: string; overs: string; flag: string };
  status: string;
  venue: string;
  isLive: boolean;
}

export interface WebStory {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  gradient: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "PM Modi Unveils ₹2 Lakh Crore Infrastructure Plan for Northeast India",
    excerpt: "The ambitious project aims to transform connectivity and boost economic growth across all eight northeastern states with new highways, railways, and airports.",
    category: "Politics",
    author: "Priya Sharma",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80",
    isBreaking: true,
    isExclusive: true,
  },
  {
    id: "2",
    title: "Virat Kohli Scores Record-Breaking Century in Border-Gavaskar Trophy",
    excerpt: "The batting maestro reaches his 30th Test century, breaking several records in the process as India dominates Day 2 at the MCG.",
    category: "Cricket",
    author: "Rahul Verma",
    publishedAt: "30 min ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    isLive: true,
  },
  {
    id: "3",
    title: "Shah Rukh Khan Announces New Film with Rajkumar Hirani",
    excerpt: "Bollywood's King Khan teams up with the acclaimed director for a social drama set to release in 2025.",
    category: "Entertainment",
    author: "Meera Kapoor",
    publishedAt: "1 hour ago",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
  },
  {
    id: "4",
    title: "Sensex Hits All-Time High, Crosses 80,000 Mark for First Time",
    excerpt: "Indian markets rally on strong FII inflows and positive global cues, with banking and IT stocks leading the surge.",
    category: "Business",
    author: "Aditya Mehta",
    publishedAt: "45 min ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: "5",
    title: "ISRO Successfully Launches Chandrayaan-4 Mission",
    excerpt: "India's space agency takes another giant leap with the launch of its most ambitious lunar mission yet, aiming for sample return.",
    category: "Science",
    author: "Dr. Kavitha Nair",
    publishedAt: "3 hours ago",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    isExclusive: true,
  },
  {
    id: "6",
    title: "Monsoon Forecast: IMD Predicts Above-Normal Rainfall This Year",
    excerpt: "The meteorological department announces good news for farmers as La Niña conditions are expected to bring abundant rains.",
    category: "Weather",
    author: "Suresh Patil",
    publishedAt: "4 hours ago",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&q=80",
  },
  {
    id: "7",
    title: "Delhi Metro Phase 5: New Routes to Connect Airport Directly to City Centre",
    excerpt: "DMRC announces ambitious expansion plans that will reduce airport-to-Connaught Place travel time to just 20 minutes.",
    category: "Delhi",
    author: "Ananya Singh",
    publishedAt: "5 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
  },
  {
    id: "8",
    title: "Tata Group Acquires Major Stake in AI Startup for ₹5,000 Crore",
    excerpt: "India's largest conglomerate bets big on artificial intelligence with strategic investment in Bengaluru-based tech company.",
    category: "Technology",
    author: "Vikram Joshi",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "9",
    title: "Supreme Court Delivers Landmark Judgment on Environmental Protection",
    excerpt: "The apex court sets new precedent for industrial pollution control, ordering stricter compliance measures across the nation.",
    category: "Legal",
    author: "Advocate Ritu Gupta",
    publishedAt: "6 hours ago",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
  {
    id: "10",
    title: "Indian Startups Raise Record $15 Billion in Q3 2024",
    excerpt: "Venture capital flows into India surge as global investors bet on the country's growing digital economy and young talent.",
    category: "Startups",
    author: "Neha Agarwal",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
  {
    id: "11",
    title: "Alia Bhatt's Hollywood Debut Gets Standing Ovation at Toronto Film Festival",
    excerpt: "The Bollywood star receives international acclaim for her powerful performance in the Indo-American production.",
    category: "Entertainment",
    author: "Zoya Khan",
    publishedAt: "8 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  },
  {
    id: "12",
    title: "UPI Transactions Cross 20 Billion Mark in Single Month",
    excerpt: "India's digital payment revolution reaches new milestone as UPI becomes the world's most used real-time payment system.",
    category: "Fintech",
    author: "Arjun Reddy",
    publishedAt: "12 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    id: "13",
    title: "India Wins Thomas Cup for Second Consecutive Time",
    excerpt: "Lakshya Sen leads the charge as Indian badminton team defeats Indonesia in thrilling final in Bangkok.",
    category: "Sports",
    author: "Deepak Kumar",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80",
  },
  {
    id: "14",
    title: "Government Launches New Health Insurance Scheme for Gig Workers",
    excerpt: "Over 7 million delivery partners, drivers, and freelancers to benefit from comprehensive healthcare coverage.",
    category: "Policy",
    author: "Shruti Mishra",
    publishedAt: "10 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
  {
    id: "15",
    title: "Mumbai's Coastal Road Project 80% Complete, Opens in March",
    excerpt: "The ambitious infrastructure project promises to reduce travel time between Nariman Point and Bandra to just 12 minutes.",
    category: "Mumbai",
    author: "Rakesh Shetty",
    publishedAt: "14 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80",
  },
  {
    id: "16",
    title: "IIT Madras Develops Breakthrough Battery Technology for EVs",
    excerpt: "New solid-state battery promises 500km range with 10-minute charging, set to revolutionize electric mobility in India.",
    category: "Technology",
    author: "Prof. Ramesh Iyer",
    publishedAt: "1 day ago",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    id: "17",
    title: "Rajasthan Tops Solar Energy Production, Generates 25 GW",
    excerpt: "The desert state becomes India's renewable energy powerhouse, attracting billions in green investments.",
    category: "Energy",
    author: "Pankaj Sharma",
    publishedAt: "18 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    id: "18",
    title: "Pune Becomes India's First City with 100% Electric Public Transport",
    excerpt: "Over 2,000 electric buses now operate across the city, making it a model for sustainable urban mobility.",
    category: "Environment",
    author: "Sneha Deshmukh",
    publishedAt: "2 days ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
  },
  {
    id: "19",
    title: "Indian Cuisine Gets 3 New Michelin Stars in Global Awards",
    excerpt: "Restaurants in Mumbai and Delhi make history as Indian food gains unprecedented international recognition.",
    category: "Lifestyle",
    author: "Chef Manish Mehrotra",
    publishedAt: "1 day ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  },
  {
    id: "20",
    title: "G20 Summit in New Delhi: World Leaders Agree on Climate Action Plan",
    excerpt: "Historic consensus reached on global carbon reduction targets, with India playing pivotal mediator role.",
    category: "World",
    author: "Karan Malhotra",
    publishedAt: "3 days ago",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  },
  {
    id: "21",
    title: "Rohit Sharma Announces Retirement from T20 Internationals",
    excerpt: "India's captain bows out of shortest format after World Cup triumph, focuses on Tests and ODIs.",
    category: "Cricket",
    author: "Harsha Bhogle",
    publishedAt: "4 hours ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80",
  },
  {
    id: "22",
    title: "Bengaluru Startup Develops AI Tool That Detects Fake News",
    excerpt: "The machine learning platform claims 95% accuracy in identifying misinformation across social media platforms.",
    category: "Technology",
    author: "Akash Gupta",
    publishedAt: "20 hours ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    id: "23",
    title: "Historic Ramlila in Varanasi Draws 5 Million Visitors",
    excerpt: "PM Modi inaugurates grand celebration as ancient tradition meets modern technology with AR experiences.",
    category: "Culture",
    author: "Anjali Tripathi",
    publishedAt: "2 days ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    id: "24",
    title: "Air India Orders 500 New Aircraft in Largest Aviation Deal",
    excerpt: "Tata-owned airline places massive order with Boeing and Airbus to modernize fleet and expand international routes.",
    category: "Business",
    author: "Sanjay Nair",
    publishedAt: "1 day ago",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    id: "25",
    title: "Kerala Tourism Wins Top Global Award for Sustainable Practices",
    excerpt: "God's Own Country recognized for eco-friendly initiatives and responsible tourism development.",
    category: "Travel",
    author: "Thomas Kurian",
    publishedAt: "3 days ago",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
  },
];

export const cricketMatch: CricketMatch = {
  id: "1",
  team1: {
    name: "India",
    shortName: "IND",
    score: "387/4",
    overs: "82.3",
    flag: "🇮🇳",
  },
  team2: {
    name: "Australia",
    shortName: "AUS",
    score: "Yet to bat",
    overs: "-",
    flag: "🇦🇺",
  },
  status: "Day 2 - India batting",
  venue: "Melbourne Cricket Ground",
  isLive: true,
};

export const webStories: WebStory[] = [
  {
    id: "1",
    title: "PM Modi's Northeast Tour in Pictures",
    thumbnail: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&q=80",
    category: "Politics",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    id: "2",
    title: "Kohli's Greatest Test Centuries",
    thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80",
    category: "Cricket",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "3",
    title: "Best Street Food in Delhi",
    thumbnail: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    category: "Food",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "4",
    title: "Top 10 Bollywood Films of 2024",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    category: "Entertainment",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "5",
    title: "Inside ISRO's Mission Control",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
    category: "Science",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "6",
    title: "Monsoon Magic: Kerala Backwaters",
    thumbnail: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80",
    category: "Travel",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: "7",
    title: "EV Revolution in India",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80",
    category: "Auto",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    id: "8",
    title: "Mumbai Coastal Road Update",
    thumbnail: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80",
    category: "Mumbai",
    gradient: "from-sky-500 to-blue-600",
  },
];

export const breakingNews = [
  "BREAKING: PM Modi announces ₹2 lakh crore infrastructure package for Northeast",
  "LIVE: Virat Kohli hits century at MCG, India in commanding position",
  "Sensex crosses 80,000 mark for the first time in history",
  "ISRO's Chandrayaan-4 successfully enters lunar orbit",
  "Supreme Court delivers landmark environment protection verdict",
];

export const trendingTopics = [
  { rank: 1, title: "Border-Gavaskar Trophy", category: "Cricket", count: "125K" },
  { rank: 2, title: "Budget 2025", category: "Politics", count: "98K" },
  { rank: 3, title: "Shah Rukh Khan", category: "Entertainment", count: "87K" },
  { rank: 4, title: "Sensex 80000", category: "Business", count: "76K" },
  { rank: 5, title: "Chandrayaan-4", category: "Science", count: "65K" },
  { rank: 6, title: "Delhi Fog", category: "Weather", count: "54K" },
  { rank: 7, title: "UPI Records", category: "Technology", count: "48K" },
  { rank: 8, title: "Alia Bhatt Hollywood", category: "Entertainment", count: "42K" },
  { rank: 9, title: "Air India Boeing", category: "Business", count: "38K" },
  { rank: 10, title: "IIT Madras Battery", category: "Tech", count: "35K" },
];

export const categories = [
  "India",
  "World",
  "Politics",
  "Cricket",
  "Sports",
  "Entertainment",
  "Technology",
  "Business",
  "Science",
  "Lifestyle",
];
