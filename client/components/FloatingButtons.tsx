import { MessageCircle, Phone, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916374700585?text=Hi%20Chilli%20Malli%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all animate-bounce z-40"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Floating Call Button */}
      <a
        href="tel:+916374700585"
        className="fixed bottom-40 right-6 bg-primary hover:opacity-90 text-primary-foreground rounded-full p-4 shadow-lg transition-all animate-bounce z-40"
        title="Call us"
      >
        <Phone size={24} />
      </a>

      {/* Floating Book Table Button */}
      <Link
        to="/book-table"
        className="fixed bottom-56 right-6 bg-accent hover:opacity-90 text-accent-foreground rounded-full p-4 shadow-lg transition-all z-40 flex items-center justify-center"
        title="Book a table"
      >
        <BookOpen size={24} />
      </Link>
    </>
  );
}
