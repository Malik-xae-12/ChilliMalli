import MainLayout from "@/components/MainLayout";

export default function Menu() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Our Menu</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Explore our carefully curated selection of authentic South Indian,
            Chinese, Biryani, and Seafood dishes.
          </p>

          {/* Menu Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img
              src="https://cdn.builder.io/o/assets%2F6376a2fe1a9940668d50fc229eee8324%2Fb7f07f04ce1c408f9a3d4d6669890c9b?alt=media&token=432f46b2-c4a6-4139-9090-5faeb61e92ef&apiKey=6376a2fe1a9940668d50fc229eee8324"
              alt="Chilli Malli Restaurant Menu"
              className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>

          {/* Contact Message */}
          <div className="text-center">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                For detailed information about our dishes and special offers,
                please contact us at{" "}
                <a
                  href="tel:+916374700585"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 63747 00585
                </a>{" "}
                or use WhatsApp to view our complete menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
