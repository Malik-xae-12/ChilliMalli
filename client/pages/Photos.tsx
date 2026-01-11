import MainLayout from "@/components/MainLayout";
import { ImageOff } from "lucide-react";

export default function Photos() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Restaurant Gallery</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Experience the ambience and delicious dishes at Chilli Malli
          </p>

          {/* Gallery Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-xl overflow-hidden h-64 flex items-center justify-center hover:border-primary transition-all"
              >
                <div className="text-center">
                  <ImageOff
                    size={40}
                    className="mx-auto mb-2 text-muted-foreground"
                  />
                  <p className="text-muted-foreground text-sm">
                    Gallery Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder Message */}
          <div className="mt-20 text-center">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Our beautiful restaurant gallery with food photography and
                ambience photos is being prepared. Check back soon to see our
                best moments!
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
