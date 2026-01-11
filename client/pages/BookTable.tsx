import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import { Calendar, Users, Clock } from "lucide-react";

export default function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: "",
    time: "",
    guests: "2",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to the server
    console.log("Booking data:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", mobile: "", date: "", time: "", guests: "2" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Book a Table</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Reserve your table at Chilli Malli and enjoy an unforgettable dining
            experience
          </p>

          {!submitted ? (
            <div className="max-w-xl mx-auto bg-card border border-border rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-foreground font-semibold mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Calendar size={18} />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Clock size={18} />
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-foreground font-semibold mb-2 flex items-center gap-2">
                    <Users size={18} />
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary w-full text-lg mt-8"
                >
                  Reserve Table
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-xl mx-auto bg-primary/10 border border-primary rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Booking Request Received!
              </h2>
              <p className="text-foreground mb-4">
                Our team will contact you shortly to confirm your reservation.
              </p>
              <p className="text-muted-foreground text-sm">
                We're excited to welcome you to Chilli Malli!
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 max-w-xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <p className="text-muted-foreground text-sm">
                Can't find your preferred slot? Call us directly at{" "}
                <a
                  href="tel:+916374700585"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 63747 00585
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
