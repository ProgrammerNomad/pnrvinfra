import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "40+", label: "Years Legacy" },
  { value: "3mn sq ft", label: "Projects under our responsibility" },
  { value: "10K+", label: "Happy Families" },
];

export default function Stats() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="text-5xl md:text-6xl font-bold text-brand-secondary mb-3">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-brand-foreground/70">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
