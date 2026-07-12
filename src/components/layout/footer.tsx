import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/data/site";

const footerLinks = [
  {
    label: "GitHub",
    href: siteConfig.author.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
  },
] as const;

/** Minimal site footer with social links */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-wide flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:px-8 lg:px-12">
        <p className="text-sm text-muted-foreground">
          © {year} {siteConfig.author.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
