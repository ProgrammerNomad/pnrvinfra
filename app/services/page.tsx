import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, LineChart, Users, Target, Shield } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Comprehensive infrastructure solutions including roads, bridges, highways, and urban development projects with cutting-edge technology.",
    features: ["Road Construction", "Bridge Building", "Urban Planning", "Smart Infrastructure"]
  },
  {
    icon: Hammer,
    title: "Construction Services",
    description: "End-to-end construction services for residential, commercial, and industrial projects with uncompromising quality standards.",
    features: ["Residential Buildings", "Commercial Complexes", "Industrial Facilities", "Renovation & Remodeling"]
  },
  {
    icon: LineChart,
    title: "Project Management",
    description: "Expert project management ensuring on-time delivery, cost optimization, and adherence to quality standards throughout the project lifecycle.",
    features: ["Planning & Scheduling", "Cost Management", "Quality Assurance", "Risk Management"]
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Professional consulting services for planning, design, feasibility studies, and execution of complex infrastructure projects.",
    features: ["Feasibility Studies", "Design Consulting", "Technical Advisory", "Compliance & Permits"]
  },
  {
    icon: Target,
    title: "Project Development",
    description: "Complete project development from concept to completion, including land acquisition, planning, and execution.",
    features: ["Site Selection", "Master Planning", "Development Strategy", "Stakeholder Management"]
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Comprehensive safety management and regulatory compliance ensuring secure work environments and adherence to standards.",
    features: ["Safety Audits", "Compliance Management", "Training Programs", "Emergency Response"]
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive infrastructure and construction solutions tailored to meet your project needs with excellence and innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
