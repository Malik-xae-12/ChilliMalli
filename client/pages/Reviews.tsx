import MainLayout from "@/components/MainLayout";
import { Star } from "lucide-react";

const sampleReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent biryani and outstanding service! The food quality is consistent.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text: "Best seafood in Egmore! The ambience is perfect for families.",
  },
  {
    id: 3,
    name: "Arjun Patel",
    rating: 4,
    text: "Great South Indian food and quick service. Highly recommended!",
  },
  {
    id: 4,
    name: "Deepika Singh",
    rating: 5,
    text: "The kebabs are absolutely delicious. Worth every penny!",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    rating: 4,
    text: "Good variety of dishes, friendly staff, and reasonable prices.",
  },
  {
    id: 6,
    name: "Sneha Desai",
    rating: 5,
    text: "Perfect place for celebrations. The food and service were excellent!",
  },
];

export default function Reviews() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Customer Reviews</h1>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">4.3</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={
                      i < 4
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground mt-2">
              Based on 152 Zomato ratings
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="text-primary font-semibold text-sm">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>

          {/* Zomato Attribution */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              These are sample reviews. Check our full reviews on{" "}
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Zomato
              </a>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
