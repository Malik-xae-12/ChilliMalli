import { Star, MapPin, Clock, DollarSign } from "lucide-react";

export default function InfoStrip() {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-y border-primary/30 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {/* Rating */}
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <Star size={18} className="sm:w-5 sm:h-5 fill-primary text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-primary">4.3</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">152 Dining Ratings</p>
          </div>

          {/* Price */}
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <DollarSign size={18} className="sm:w-5 sm:h-5 text-primary" />
              <span className="text-xl sm:text-2xl font-bold text-primary">₹1000</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">For Two</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <MapPin size={18} className="sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Egmore
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Chennai</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <Clock size={18} className="sm:w-5 sm:h-5 text-primary" />
              <span className="text-base sm:text-lg font-semibold text-foreground">
                12 PM
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">to 12 AM Daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}
