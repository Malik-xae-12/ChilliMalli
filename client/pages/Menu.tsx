import MainLayout from "@/components/MainLayout";
import { Download } from "lucide-react";

export default function Menu() {
  const menuCategories = [
    "Starters",
    "Main Course",
    "Biryani & Rice",
    "Seafood",
    "Chinese",
    "Desserts",
    "Beverages",
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Our Menu</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Explore our carefully curated selection of authentic South Indian,
            Chinese, Biryani, and Seafood dishes.
          </p>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {menuCategories.map((category) => (
              <div
                key={category}
                className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary transition-all"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {category}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Premium selection of {category.toLowerCase()}
                </p>
              </div>
            ))}
          </div>

          {/* Download Menu Button */}
          <div className="text-center">
            <button className="btn-primary inline-flex items-center gap-2">
              <Download size={20} />
              Download Menu (PDF)
            </button>
          </div>

          {/* Placeholder Message */}
          <div className="mt-20 text-center">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                The full digital menu with detailed descriptions and images is
                coming soon. For now, please contact us at{" "}
                <a
                  href="tel:+916374700585"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 63747 00585
                </a>{" "}
                or use WhatsApp to view our menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
