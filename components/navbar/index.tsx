"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-3 w-3" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-3 w-3" />
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/70">
                SREDA Certified Energy Audit & Sustainability Consultant
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
            : "bg-background"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold text-primary tracking-tight">
                  HEXA
                </span>
                <span className="text-[10px] lg:text-xs text-muted-foreground -mt-1 tracking-wider">
                  ENGINEERING LIMITED
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = "children" in link;
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() =>
                      hasChildren && setActiveDropdown(link.href)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {link.label}
                      {hasChildren && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === link.href && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {hasChildren && activeDropdown === link.href && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-background rounded-xl shadow-xl border p-2 min-w-[240px] animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.children.map(
                            (child: { label: string; href: string }) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-2.5 text-sm rounded-lg transition-colors",
                                  pathname === child.href
                                    ? "text-primary bg-primary/5 font-medium"
                                    : "text-foreground hover:text-primary hover:bg-primary/5"
                                )}
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button asChild className="hidden sm:inline-flex">
                <Link href="/contact">Get Consultation</Link>
              </Button>
              <ThemeToggle className="hidden lg:inline-flex" />
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = "children" in link;
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => !hasChildren && setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {hasChildren && (
                      <div className="ml-4 space-y-1">
                        {link.children.map(
                          (child: { label: string; href: string }) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2 rounded-lg text-sm transition-colors",
                                pathname === child.href
                                  ? "text-primary bg-primary/5"
                                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 flex items-center gap-2">
                <ThemeToggle />
                <Button asChild className="flex-1">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
