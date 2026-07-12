import { Hero } from "@/sections/home/hero";
import { FeaturedResearch } from "@/sections/home/featured-research";
import { ContactCTA } from "@/sections/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedResearch />
      <ContactCTA />
    </>
  );
}
