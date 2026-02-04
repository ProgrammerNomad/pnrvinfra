import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Comprehensive infrastructure solutions including roads, bridges, and urban development projects.",
  },
  {
    icon: Hammer,
    title: "Construction Services",
    description: "End-to-end construction services for residential, commercial, and industrial projects.",
  },
  {
    icon: LineChart,
    title: "Project Management",
    description: "Expert project management ensuring on-time delivery and quality standards.",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Professional consulting services for planning, design, and execution of complex projects.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence across all aspects of infrastructure and construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
