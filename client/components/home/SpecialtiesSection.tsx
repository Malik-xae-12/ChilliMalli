import { Flame } from "lucide-react";

const specialties = [
  {
    id: 1,
    title: "South Indian Meals",
    description: "Authentic Dosa, Idli, and traditional South Indian delights",
    image: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg",
  },
  {
    id: 2,
    title: "Biryani Varieties",
    description: "Aromatic and flavorful biryanis with premium basmati rice",
    image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg",
  },
  {
    id: 3,
    title: "Kebabs & Starters",
    description: "Succulent grilled kebabs and appetizers",
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
  },
  {
    id: 4,
    title: "Seafood Specials",
    description: "Fresh catch prepared with aromatic spices",
    image:
      "https://images.pexels.com/photos/17320991/pexels-photo-17320991.jpeg",
  },
  {
    id: 5,
    title: "Chinese Dishes",
    description: "Indo-Chinese fusion with crispy textures",
    image:
      "https://images.pexels.com/photos/35588679/pexels-photo-35588679.jpeg",
  },
  {
    id: 6,
    title: "Desserts & Beverages",
    description: "Sweet endings and refreshing drinks",
    image: "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg",
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
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {specialty.description}
                </p>

                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Flame size={16} />
                  <span className="text-sm font-semibold">Popular Choice</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
