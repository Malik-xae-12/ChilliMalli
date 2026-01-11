import MainLayout from "@/components/MainLayout";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Reach out to us for reservations, inquiries, or feedback
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      3, Gandhi Irwin Road,
                      <br />
                      Egmore, Chennai
                    </p>
                    <a
                      href="https://maps.google.com/?q=3+Gandhi+Irwin+Road+Egmore+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold text-sm mt-2 inline-flex items-center gap-2 hover:underline"
                    >
                      Get Directions
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+916374700585"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 63747 00585
                    </a>
                    <p className="text-muted-foreground text-sm mt-2">
                      Available during business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-muted-foreground">
                      12:00 Noon – 12:00 Midnight
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Open all days of the week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden h-96 md:h-full">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0038254346673!2d80.24657!3d13.0070256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526e23c3c3c3c3%3A0x0!2s3%2C%20Gandhi%20Irwin%20Road%2C%20Egmore%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/916374700585?text=Hi%20Chilli%20Malli%2C%20I%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 text-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
