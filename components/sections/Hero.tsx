import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[736px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-white">
            Making <span className="text-brand-secondary">Ideas</span> Concrete
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Innovative concepts transformed into reality. Our vision, mission, and legacy are built to create spaces where people come first and communities thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-brand-secondary hover:bg-brand-primary text-white" asChild>
              <Link href="/contact">Know More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
