import { ChefHat, Flame } from "lucide-react";

const specialties = [
  {
    id: 1,
    title: "South Indian Meals",
    description: "Authentic Dosa, Idli, and traditional South Indian delights",
    icon: "🍛",
  },
  {
    id: 2,
    title: "Biryani Varieties",
    description: "Aromatic and flavorful biryanis with premium basmati rice",
    icon: "🍚",
  },
  {
    id: 3,
    title: "Kebabs & Starters",
    description: "Succulent grilled kebabs and appetizers",
    icon: "🔥",
  },
  {
    id: 4,
    title: "Seafood Specials",
    description: "Fresh catch prepared with aromatic spices",
    icon: "🦐",
  },
  {
    id: 5,
    title: "Chinese Dishes",
    description: "Indo-Chinese fusion with crispy textures",
    icon: "🍜",
  },
  {
    id: 6,
    title: "Desserts & Beverages",
    description: "Sweet endings and refreshing drinks",
    icon: "🍰",
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2>Our Specialties</h2>
          <p className="text-muted-foreground text-lg mt-4">
            Discover our signature dishes crafted with passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {specialty.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground">{specialty.description}</p>

              <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <Flame size={16} />
                <span className="text-sm font-semibold">Popular Choice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
