export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8 sm:mb-12">About Chilli Malli</h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Chilli Malli is a popular Egmore dining destination offering a
              wide variety of South Indian, Chinese, Biryani, Kebab, Seafood and
              Street Food dishes.
            </p>

            <p>
              Known for quality, taste, and ambience, Chilli Malli is the
              perfect destination for families, friends and celebrations. Our
              expert chefs prepare each dish with precision, using the finest
              ingredients sourced locally.
            </p>

            <p>
              With a warm ambience and attentive service, we ensure every visit
              is memorable. Whether you're looking for a casual meal or planning
              a special occasion, Chilli Malli offers the perfect dining
              experience.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Years of Culinary Excellence
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Signature Dishes
                </p>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  1000+
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Happy Customers Monthly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
