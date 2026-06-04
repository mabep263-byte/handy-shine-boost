import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Handy Co. | Professional Remodeling in Greenville, SC" },
      { name: "description", content: "Handy Co. is a trusted remodeling contractor in Greenville, SC. Kitchen & bath renovations, flooring, tile, painting, smart home installs, and full home renovations. Call (864) 775-9787 for a free quote." },
      { name: "author", content: "Handy Co." },
      { property: "og:title", content: "Handy Co. | Professional Remodeling in Greenville, SC" },
      { property: "og:description", content: "Trusted remodeling contractor in Greenville, SC. Kitchen & bath renovations, flooring, tile, painting, smart home installs. Call (864) 775-9787." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Handy Co." },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@HandyCoGreenville" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,400..600;1,14..32,400..600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Handy Co.",
          description: "Professional remodeling and home renovation contractor in Greenville, SC.",
          url: "https://handy-co.com",
          telephone: "+1-864-775-9787",
          address: {
            "@type": "PostalAddress",
            streetAddress: "115 Graystone Ct",
            addressLocality: "Greenville",
            addressRegion: "SC",
            postalCode: "29611",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 34.8526,
            longitude: -82.394,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "19:00",
            },
          ],
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "25",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-1 group">
          <span className="font-semibold tracking-tight text-lg group-hover:text-brand-accent transition-colors">Handy Co.</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Greenville, SC</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/services"
            className="text-sm font-medium hover:text-brand-accent transition-colors"
            activeProps={{ className: "text-brand-accent" }}
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="text-sm font-medium hover:text-brand-accent transition-colors"
            activeProps={{ className: "text-brand-accent" }}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-brand-accent transition-colors"
            activeProps={{ className: "text-brand-accent" }}
          >
            Contact
          </Link>
          <a href="tel:8647759787" className="text-sm font-semibold text-brand-accent hover:brightness-110 transition-all">
            (864) 775-9787
          </a>
          <Link
            to="/contact"
            className="bg-foreground text-background text-sm font-medium py-2 px-4 ring-1 ring-foreground flex items-center gap-2 rounded-sm hover:bg-foreground/90 transition-colors"
          >
            Request Quote
          </Link>
        </div>
        <a
          href="tel:8647759787"
          className="md:hidden bg-brand-accent text-white text-xs font-medium py-2 px-3 rounded-sm flex items-center gap-1.5"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-semibold tracking-tight text-lg">Handy Co.</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Greenville, SC</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Professional remodeling and renovation services for homeowners in Greenville and the Upstate. Licensed, insured, and committed to quality craftsmanship.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Kitchen Remodeling</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Bathroom Renovation</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Flooring & Tile</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Painting & Drywall</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Smart Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:8647759787" className="hover:text-brand-accent transition-colors">(864) 775-9787</a></li>
              <li>115 Graystone Ct</li>
              <li>Greenville, SC 29611</li>
              <li className="text-xs pt-1">Mon–Fri: 8am – 7pm</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-foreground/5">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-brand-accent rounded-full"></span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Licensed & Insured SC Contractor</span>
          </div>
          <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Handy Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
