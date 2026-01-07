import { BarChart3 } from "lucide-react";
import { useState } from "react";

interface PollOption {
    id: string;
    text: string;
    votes: number;
}

const InteractivePoll = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasVoted, setHasVoted] = useState(false);

    const pollQuestion = "What's the most important issue for India in 2026?";
    const [options, setOptions] = useState<PollOption[]>([
        { id: "1", text: "Economic Growth & Employment", votes: 1247 },
        { id: "2", text: "Climate Change & Environment", votes: 892 },
        { id: "3", text: "Education & Healthcare", votes: 1534 },
        { id: "4", text: "Technology & Innovation", votes: 678 },
    ]);

    const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

    const handleVote = () => {
        if (!selectedOption) return;

        setOptions(prev =>
            prev.map(opt =>
                opt.id === selectedOption ? { ...opt, votes: opt.votes + 1 } : opt
            )
        );
        setHasVoted(true);
    };

    return (
        <section className="py-8">
            <div className="container-news">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-gold-accent/10 rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h2 className="font-heading font-bold text-xl">Voice Your Opinion</h2>
                                <p className="text-sm text-muted-foreground">Join {totalVotes.toLocaleString()} voters</p>
                            </div>
                        </div>

                        <h3 className="font-heading font-semibold text-lg mb-6">{pollQuestion}</h3>

                        <div className="space-y-3 mb-6">
                            {options.map((option) => {
                                const percentage = ((option.votes / totalVotes) * 100).toFixed(1);
                                const isSelected = selectedOption === option.id;

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => !hasVoted && setSelectedOption(option.id)}
                                        disabled={hasVoted}
                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${hasVoted
                                                ? "cursor-default"
                                                : isSelected
                                                    ? "border-primary bg-primary/5"
                                                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium">{option.text}</span>
                                            {hasVoted && (
                                                <span className="text-sm font-bold text-primary">{percentage}%</span>
                                            )}
                                        </div>
                                        {hasVoted && (
                                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {!hasVoted ? (
                            <button
                                onClick={handleVote}
                                disabled={!selectedOption}
                                className={`w-full py-3 rounded-lg font-semibold transition-all ${selectedOption
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-muted text-muted-foreground cursor-not-allowed"
                                    }`}
                            >
                                Cast Your Vote
                            </button>
                        ) : (
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">
                                    Thank you for voting! Results are updated in real-time.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractivePoll;
