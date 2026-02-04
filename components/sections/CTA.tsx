import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 15, 51, 0.85), rgba(0, 15, 51, 0.85)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your journey to inspired living starts here
          </h2>
          <p className="text-lg text-gray-200">
            Transform your vision into concrete reality with PNRV Infra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-brand-secondary hover:bg-brand-primary text-white" asChild>
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
