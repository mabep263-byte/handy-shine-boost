import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import tileWork from "@/assets/tile-work.jpg";
import flooring from "@/assets/flooring.jpg";
import smartHome from "@/assets/smart-home.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBath from "@/assets/portfolio-bath.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Handy Co. Remodeling Greenville, SC" },
      { name: "description", content: "View Handy Co.'s portfolio of completed remodeling projects in Greenville, SC. Kitchen renovations, bathroom remodels, flooring, tile, and smart home installations." },
      { property: "og:title", content: "Portfolio | Handy Co. Remodeling Greenville, SC" },
      { property: "og:description", content: "See our completed remodeling projects in Greenville, SC. Kitchens, baths, flooring, and more." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [
      { rel: "canonical", href: "/portfolio" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const projects = [
    {
      image: portfolioKitchen,
      title: "Greenville Kitchen Revival",
      tags: ["Cabinet Sanding", "Custom Painting", "Tile Backsplash"],
      description: "A complete kitchen transformation featuring sage green cabinet refinishing, a custom white oak island, and premium marble-look tile backsplash.",
      location: "Greenville, SC",
    },
    {
      image: portfolioBath,
      title: "Modern Spa Conversion",
      tags: ["Full Bathroom Remodel", "Plumbing", "Custom Tile"],
      description: "Converted an outdated master bath into a modern spa retreat with a walk-in glass shower, slate floor tile, and rain shower head installation.",
      location: "Simpsonville, SC",
    },
    {
      image: heroKitchen,
      title: "North Main Renovation",
      tags: ["Full Kitchen Remodel", "Hardwood Floors", "Smart Lighting"],
      description: "Whole-home kitchen renovation with natural wood cabinets, marble countertops, and integrated smart home lighting system.",
      location: "Greenville, SC",
    },
    {
      image: tileWork,
      title: "Custom Shower Enclosure",
      tags: ["Tile Installation", "Glass Doors", "Fixtures"],
      description: "Precision hexagonal mosaic tile installation in a modern shower enclosure with bronze fixtures and frameless glass doors.",
      location: "Travelers Rest, SC",
    },
    {
      image: flooring,
      title: "Oak Floor Refinishing",
      tags: ["Hardwood Refinishing", "Staining", "Protective Seal"],
      description: "Restored century-old oak flooring with professional sanding, custom dark stain, and protective sealant throughout a historic downtown home.",
      location: "Downtown Greenville, SC",
    },
    {
      image: smartHome,
      title: "Smart Home Integration",
      tags: ["Smart Thermostat", "Lighting Control", "Security"],
      description: "Full smart home upgrade including Nest thermostat, automated lighting, smart outlets, and integrated security camera system.",
      location: "Greer, SC",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-6 bg-secondary border-b border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-brand-accent uppercase tracking-wider">Our Work</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-tight text-balance mb-6 max-w-2xl">
            Projects built with precision and pride.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[56ch] leading-relaxed">
            Every project tells a story. Browse our completed renovations across Greenville and the Upstate — each one a testament to our commitment to quality craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`space-y-4 ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider bg-secondary px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Ready to see your project here?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let&rsquo;s talk about your vision. We&rsquo;ll provide a free consultation and detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-background text-foreground text-base font-medium py-3 px-8 rounded-sm hover:bg-background/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:8647759787"
              className="inline-flex items-center justify-center text-background text-base font-medium py-3 px-8 border border-background/20 rounded-sm hover:bg-background/10 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (864) 775-9787
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
