import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Phone, Hammer, Paintbrush, Home, Wrench, Zap, DoorOpen } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Handy Co. Remodeling Greenville, SC" },
      { name: "description", content: "Full-spectrum remodeling services in Greenville, SC: kitchen & bath renovations, flooring, tile, painting, drywall, electrical, plumbing, smart home, and exterior repairs. Call (864) 775-9787." },
      { property: "og:title", content: "Services | Handy Co. Remodeling Greenville, SC" },
      { property: "og:description", content: "Professional remodeling services in Greenville, SC. Free quotes available." },
      { property: "og:url", content: "/services" },
    ],
    links: [
      { rel: "canonical", href: "/services" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const serviceGroups = [
    {
      icon: Paintbrush,
      title: "Painting & Drywall",
      description: "Immaculate interior and exterior finishes with expert surface preparation. We match colors, repair cracks, and deliver smooth, lasting results.",
      items: ["Interior painting", "Exterior painting", "Drywall installation", "Drywall repair", "Texture matching", "Ceiling repair"],
    },
    {
      icon: Home,
      title: "Full Renovations",
      description: "Complete home transformations from concept to completion. We manage every phase so you don't have to coordinate multiple contractors.",
      items: ["Full home renovations", "Kitchen remodels", "Bathroom updates", "Home addition construction", "Basement finishing", "Room conversions"],
    },
    {
      icon: Hammer,
      title: "Flooring & Tile",
      description: "Precision installation of hardwood, laminate, luxury vinyl plank, and custom tile work for kitchens, baths, and living spaces.",
      items: ["Hardwood installation", "LVP & laminate", "Custom tile work", "Tile replacement", "Floor repair", "Grout restoration"],
    },
    {
      icon: Wrench,
      title: "Plumbing Fixtures",
      description: "Installation and repair of sinks, faucets, toilets, showers, and water fixtures. We ensure code compliance and leak-free results.",
      items: ["Faucet installation", "Toilet replacement", "Shower fixtures", "Water heater connections", "Sink installation", "Leak repair"],
    },
    {
      icon: Zap,
      title: "Electrical & Smart Home",
      description: "Modernize your home with smart lighting, climate controls, outlets, switches, and integrated home automation systems.",
      items: ["Smart lighting", "Thermostat installation", "Outlet & switch upgrades", "Security system wiring", "Home automation", "EV charger prep"],
    },
    {
      icon: DoorOpen,
      title: "Doors, Windows & Exterior",
      description: "Structural repairs, door and window replacement, siding work, and exterior improvements that protect and enhance your home.",
      items: ["Door installation", "Window replacement", "Exterior structural repairs", "Siding repair", "Trim work", "Weatherproofing"],
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-6 bg-secondary border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">What We Do</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-balance mb-6 max-w-2xl">
            Full-spectrum renovation services for your home.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[56ch] leading-relaxed">
            From a single fixture replacement to a whole-home transformation, Handy Co. delivers professional-grade results across every trade. One team. Zero subcontractors. Total accountability.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceGroups.map((group) => (
            <div key={group.title} className="border border-foreground/5 p-8 rounded-sm hover:border-foreground/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="w-5 h-5 text-brand-accent" />
                <h2 className="text-xl font-bold tracking-tight">{group.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{group.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Tell us about your project and we&rsquo;ll provide a detailed, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background text-foreground text-base font-medium py-3 px-8 rounded-sm hover:bg-background/90 transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:8647759787"
              className="inline-flex items-center justify-center text-background text-base font-medium py-3 px-8 border border-background/20 rounded-sm hover:bg-background/10 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (864) 775-9787
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-brand-accent text-brand-accent" />
            <span>4.8 stars &middot; 25 Google reviews &middot; Greenville, SC</span>
          </div>
        </div>
      </section>
    </main>
  );
}
