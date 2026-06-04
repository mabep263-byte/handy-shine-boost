import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Phone, Clock, Shield, Award } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import tileWork from "@/assets/tile-work.jpg";
import flooring from "@/assets/flooring.jpg";
import smartHome from "@/assets/smart-home.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBath from "@/assets/portfolio-bath.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Handy Co. | Professional Remodeling in Greenville, SC" },
      { name: "description", content: "Handy Co. is a trusted remodeling contractor in Greenville, SC. Kitchen & bath renovations, flooring, tile, painting, smart home installs, and full home renovations. Call (864) 775-9787." },
      { property: "og:title", content: "Handy Co. | Professional Remodeling in Greenville, SC" },
      { property: "og:description", content: "Trusted remodeling contractor in Greenville, SC. Call (864) 775-9787 for a free quote." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[48ch]">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex text-brand-accent">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">4.8 Rating &middot; 25 Google Reviews</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-balance mb-8">
            Master craftsmanship for Upstate homes.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-[56ch] mb-10 leading-relaxed">
            A dedicated remodeling and repair studio specializing in kitchen transformations, whole-home updates, and structural precision in Greenville and the surrounding Upstate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-foreground text-background text-base font-medium py-3 px-6 ring-1 ring-foreground rounded-sm hover:bg-foreground/90 transition-colors"
            >
              Start Your Project
            </Link>
            <a
              href="tel:8647759787"
              className="inline-flex items-center justify-center text-foreground text-base font-medium py-3 px-6 border border-foreground/10 rounded-sm hover:bg-accent transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (864) 775-9787
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Open until 7 PM
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              25+ Reviews
            </span>
          </div>
        </div>

        <div className="mt-16">
          <img
            src={heroKitchen}
            alt="Stunning modern kitchen renovation with natural wood cabinets and marble countertops"
            width={1920}
            height={1080}
            className="w-full aspect-[21/9] object-cover rounded-[min(1vw,12px)]"
          />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Structure & Surfaces",
      items: ["Drywall installation & repair", "Hardwood & tile flooring", "Interior & exterior painting", "Doors & windows"],
    },
    {
      title: "Remodeling",
      items: ["Full home renovations", "Kitchen & bath updates", "Home addition construction", "Smart home integration"],
    },
    {
      title: "Critical Systems",
      items: ["Electrical & plumbing repair", "Water fixture installation", "Exterior structural repairs", "Preventative maintenance"],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl leading-tight text-balance mb-4">Full-Spectrum Services</h2>
          <p className="text-muted-foreground text-pretty max-w-[48ch]">
            Professional grade execution across every trade, from plumbing to precision cabinetry. One team, zero subcontractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-accent">{group.title}</h3>
              <ul className="space-y-3 text-base text-muted-foreground divide-y divide-foreground/5">
                {group.items.map((item) => (
                  <li key={item} className="pt-3">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="group">
            <img
              src={tileWork}
              alt="Professional tile installation"
              width={800}
              height={800}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <h4 className="font-semibold text-foreground">Custom Tile Work</h4>
            <p className="text-sm text-muted-foreground mt-1">Backsplashes, showers, floors</p>
          </div>
          <div className="group">
            <img
              src={flooring}
              alt="Beautiful hardwood flooring installation"
              width={800}
              height={800}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <h4 className="font-semibold text-foreground">Flooring Installation</h4>
            <p className="text-sm text-muted-foreground mt-1">Hardwood, LVP, laminate</p>
          </div>
          <div className="group">
            <img
              src={smartHome}
              alt="Smart home installation"
              width={800}
              height={800}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <h4 className="font-semibold text-foreground">Smart Home</h4>
            <p className="text-sm text-muted-foreground mt-1">Automation & integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      text: "Handy Co repainted the kitchen cabinets at our Airbnb. They look phenomenal and we can't wait for our next project!",
      author: "Sarah Thompson",
      location: "Travelers Rest",
    },
    {
      text: "After another contractor fell through, we reached out in a panic. Michael and his team saved our project and the results are incredible.",
      author: "James R.",
      location: "Augusta Road",
    },
    {
      text: "Michael is professional, knowledgeable, and provides great service. We call him for all our home improvement needs. Job well done!",
      author: "Rebecca M.",
      location: "Downtown Greenville",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3">
          <div className="md:sticky md:top-32">
            <div className="text-5xl font-display mb-2">4.8</div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i <= 4 ? "fill-brand-accent text-brand-accent" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">25 Verified Google Reviews</p>
            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 bg-secondary rounded-sm text-xs font-semibold">LICENSED</div>
              <div className="px-4 py-2 bg-secondary rounded-sm text-xs font-semibold">INSURED</div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-12">
          {reviews.map((review, i) => (
            <blockquote key={i} className="border-l border-muted pl-8">
              <p className="text-xl text-pretty leading-relaxed mb-6 italic text-foreground">&ldquo;{review.text}&rdquo;</p>
              <cite className="text-sm font-semibold uppercase tracking-widest not-italic text-muted-foreground">
                {review.author} &mdash; {review.location}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="font-display text-4xl leading-tight">Featured Projects</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">2024 Portfolio</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src={portfolioKitchen}
              alt="Greenville kitchen renovation with sage green cabinets and white oak island"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover rounded-sm"
            />
            <div>
              <h4 className="text-xl font-bold tracking-tight">Greenville Kitchen Revival</h4>
              <p className="text-sm text-muted-foreground mt-1">Cabinet Sanding &middot; Custom Painting &middot; Tile</p>
            </div>
          </div>
          <div className="space-y-4 md:mt-16">
            <img
              src={portfolioBath}
              alt="Modern master bathroom with walk-in glass shower and slate tile"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full aspect-[3/2] object-cover rounded-sm"
            />
            <div>
              <h4 className="text-xl font-bold tracking-tight">Modern Spa Conversion</h4>
              <p className="text-sm text-muted-foreground mt-1">Full Bathroom Remodel &middot; Plumbing &middot; Tile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-display text-4xl mb-6">Start your renovation.</h2>
          <p className="text-muted-foreground mb-8 max-w-[40ch] leading-relaxed">
            Serving Greenville, Greer, Travelers Rest, and Simpsonville. Open Monday&ndash;Friday, 8am&ndash;7pm.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-accent" />
              <a href="tel:8647759787" className="text-xl font-medium hover:text-brand-accent transition-colors">
                (864) 775-9787
              </a>
            </div>
            <p className="text-sm text-muted-foreground pl-7">115 Graystone Ct, Greenville, SC 29611</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-foreground text-background text-base font-medium py-3 px-6 ring-1 ring-foreground rounded-sm hover:bg-foreground/90 transition-colors mt-8"
          >
            Request a Free Quote
          </Link>
        </div>
        <div className="bg-secondary p-8 rounded-sm">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Why choose Handy Co?</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">4.8 Google rating with 25+ verified reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">Fully licensed and insured in South Carolina</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">One team for all trades &mdash; no subcontractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">On-time delivery with transparent pricing</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-foreground/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Service Areas</p>
              <p className="text-sm text-foreground">Greenville, Greer, Travelers Rest, Simpsonville, Mauldin, Taylors, and surrounding Upstate communities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
