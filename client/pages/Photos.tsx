import MainLayout from "@/components/MainLayout";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export default function Photos() {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Chicken Biryani",
      image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg",
      category: "Biryani",
    },
    {
      id: 2,
      title: "Seafood Curry",
      image: "https://images.pexels.com/photos/17320991/pexels-photo-17320991.jpeg",
      category: "Seafood",
    },
    {
      id: 3,
      title: "Dosa & Curries",
      image: "https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg",
      category: "South Indian",
    },
    {
      id: 4,
      title: "Grilled Kebabs",
      image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
      category: "Starters",
    },
    {
      id: 5,
      title: "Fresh Seafood Platter",
      image: "https://images.pexels.com/photos/35588679/pexels-photo-35588679.jpeg",
      category: "Seafood",
    },
    {
      id: 6,
      title: "Indian Thali",
      image: "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg",
      category: "Special",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Restaurant Gallery</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Experience the ambience and delicious dishes at Chilli Malli
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group cursor-pointer h-72"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
