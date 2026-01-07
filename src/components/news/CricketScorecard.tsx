import { ExternalLink } from "lucide-react";
import { cricketMatch } from "@/data/newsData";

const CricketScorecard = () => {
  const match = cricketMatch;

  return (
    <section className="py-2">
      <div className="container-news">
        <div className="bg-gradient-to-r from-cricket-green to-emerald-600 rounded-xl overflow-hidden shadow-lg">
          <div className="px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Live indicator + Match info */}
            <div className="flex items-center gap-3">
              {match.isLive && (
                <span className="tag-live bg-white text-cricket-green">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  LIVE
                </span>
              )}
              <span className="text-white/80 text-sm font-medium">
                {match.status}
              </span>
            </div>

            {/* Scores */}
            <div className="flex items-center gap-6 flex-1 justify-center">
              {/* Team 1 */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{match.team1.flag}</span>
                <div className="text-white">
                  <span className="font-bold text-lg">{match.team1.shortName}</span>
                  <span className="font-heading font-bold text-xl ml-2">
                    {match.team1.score}
                  </span>
                  {match.team1.overs !== "-" && (
                    <span className="text-white/70 text-sm ml-1">
                      ({match.team1.overs} ov)
                    </span>
                  )}
                </div>
              </div>

              <span className="text-white/50 font-medium">vs</span>

              {/* Team 2 */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{match.team2.flag}</span>
                <div className="text-white">
                  <span className="font-bold text-lg">{match.team2.shortName}</span>
                  <span className="font-heading text-lg text-white/70 ml-2">
                    {match.team2.score}
                  </span>
                </div>
              </div>
            </div>

            {/* Full scorecard link */}
            <a
              href="#"
              className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors group"
            >
              Full Scorecard
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Venue */}
          <div className="px-4 py-2 bg-black/10 border-t border-white/10">
            <span className="text-white/70 text-xs">{match.venue}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketScorecard;
