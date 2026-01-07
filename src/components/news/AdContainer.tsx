interface AdContainerProps {
  size?: "300x250" | "728x90" | "300x600";
  className?: string;
}

const AdContainer = ({ size = "300x250", className = "" }: AdContainerProps) => {
  const dimensions = {
    "300x250": { width: 300, height: 250 },
    "728x90": { width: 728, height: 90 },
    "300x600": { width: 300, height: 600 },
  };

  const { width, height } = dimensions[size];

  return (
    <div
      className={`bg-muted border border-border rounded-lg flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: "100%", maxWidth: width, height }}
    >
      <div className="text-center p-4">
        <div className="w-12 h-12 rounded-full bg-muted-foreground/10 flex items-center justify-center mx-auto mb-2">
          <span className="text-muted-foreground text-xs font-bold">AD</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Advertisement {size}
        </p>
        {/* Skeleton shimmer effect */}
        <div className="mt-3 space-y-2">
          <div className="h-2 bg-gradient-to-r from-muted via-muted-foreground/5 to-muted rounded animate-shimmer bg-[length:200%_100%]" />
          <div className="h-2 w-3/4 mx-auto bg-gradient-to-r from-muted via-muted-foreground/5 to-muted rounded animate-shimmer bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
