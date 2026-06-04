import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Star, Shield, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Handy Co. Remodeling Greenville, SC" },
      { name: "description", content: "Contact Handy Co. for a free remodeling quote in Greenville, SC. Call (864) 775-9787 or fill out our project request form. Licensed & insured contractor." },
      { property: "og:title", content: "Contact | Handy Co. Remodeling Greenville, SC" },
      { property: "og:description", content: "Get a free quote from Handy Co. Call (864) 775-9787 or request a consultation online." },
      { property: "og:url", content: "/contact" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-6 bg-secondary border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-balance mb-6 max-w-2xl">
            Start your project today.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[56ch] leading-relaxed">
            Whether you have a clear vision or just an idea, we&rsquo;re here to help. Reach out for a free consultation and detailed quote.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-3xl mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                  <a href="tel:8647759787" className="text-lg font-medium hover:text-brand-accent transition-colors">
                    (864) 775-9787
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <a href="mailto:info@handy-co.com" className="text-lg font-medium hover:text-brand-accent transition-colors">
                    info@handy-co.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Office</p>
                  <p className="text-lg font-medium">115 Graystone Ct</p>
                  <p className="text-lg font-medium">Greenville, SC 29611</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Business Hours</p>
                  <p className="text-lg font-medium">Mon&ndash;Fri: 8:00 AM &ndash; 7:00 PM</p>
                  <p className="text-sm text-muted-foreground mt-1">Saturday: By appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-brand-accent text-brand-accent" />
                <span className="text-2xl font-display">4.8</span>
              </div>
              <p className="text-muted-foreground mb-4">25 verified Google reviews from happy homeowners in Greenville and the Upstate.</p>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJp2k33zCjWIgR0DAQ0qOuGgM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-brand-accent hover:underline"
              >
                Rate and Review on Google &rarr;
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl mb-8">Request a Quote</h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch within 24 hours with your free quote.");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full border-b-2 border-foreground/10 bg-transparent py-3 outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(864) 555-0123"
                    className="w-full border-b-2 border-foreground/10 bg-transparent py-3 outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border-b-2 border-foreground/10 bg-transparent py-3 outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                  Project Type
                </label>
                <select
                  required
                  className="w-full border-b-2 border-foreground/10 bg-transparent py-3 outline-none focus:border-brand-accent transition-colors cursor-pointer"
                >
                  <option value="">Select a project type</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="painting">Interior/Exterior Painting</option>
                  <option value="tile">Tile Work</option>
                  <option value="smart-home">Smart Home Installation</option>
                  <option value="full-renovation">Full Home Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project, timeline, and budget..."
                  className="w-full border-b-2 border-foreground/10 bg-transparent py-3 outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-background font-bold py-4 text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors rounded-sm"
              >
                Send Quote Request
              </button>
            </form>

            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Why homeowners trust us:</p>
              {[
                "Free, detailed quotes within 24 hours",
                "Licensed and insured in South Carolina",
                "One team for all trades — no subcontractors",
                "4.8 stars with 25+ verified Google reviews",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Shield className="w-8 h-8 text-brand-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Fully licensed contractor in South Carolina with comprehensive insurance coverage.</p>
            </div>
            <div>
              <Star className="w-8 h-8 text-brand-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">4.8 Star Rating</h3>
              <p className="text-sm text-muted-foreground">25+ verified Google reviews from homeowners across the Upstate.</p>
            </div>
            <div>
              <Check className="w-8 h-8 text-brand-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p className="text-sm text-muted-foreground">We stand behind every project. Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
