import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
    { label: "Photos", path: "/photos" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F6376a2fe1a9940668d50fc229eee8324%2F8739f1b4d74e4e998ff00dbca59e5539?format=webp&width=800"
              alt="Chilli Malli"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book Table Button - Desktop */}
          <Link to="/book-table" className="hidden md:inline-block btn-primary">
            Book a Table
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book-table"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Table
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
