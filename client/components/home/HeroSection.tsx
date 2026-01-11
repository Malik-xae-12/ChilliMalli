import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background with image and gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/35532821/pexels-photo-35532821.jpeg')`,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-amber-800/50 to-black/75"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(165, 42, 42, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-lg">
            Chilli Malli
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-100 drop-shadow-md">
            Egmore's Favourite Multi Cuisine Restaurant
          </h2>
          <p className="text-lg md:text-xl text-gray-100 drop-shadow-md max-w-2xl mx-auto">
            Authentic South Indian, Chinese, Biryani & Seafood Delights
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/book-table"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
            >
              Book a Table
            </Link>
            <a
              href="tel:+916374700585"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/916374700585?text=Hi%20Chilli%20Malli%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
