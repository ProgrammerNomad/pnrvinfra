import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Metro Rail Extension Project",
    category: "Infrastructure",
    description: "15 km metro rail extension connecting major urban centers with state-of-the-art stations and facilities.",
    status: "Completed",
    year: "2024",
    image: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Green Valley Residential Complex",
    category: "Residential",
    description: "Eco-friendly residential complex with 500+ apartments, featuring sustainable design and modern amenities.",
    status: "Completed",
    year: "2023",
    image: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Tech Park Business Center",
    category: "Commercial",
    description: "Modern business park with Grade A office spaces, conference facilities, and smart building technology.",
    status: "Ongoing",
    year: "2025",
    image: "/images/project3.jpg"
  },
  {
    id: 4,
    title: "National Highway Expansion",
    category: "Infrastructure",
    description: "50 km highway expansion project including bridges, interchanges, and service roads.",
    status: "Completed",
    year: "2023",
    image: "/images/project4.jpg"
  },
  {
    id: 5,
    title: "Industrial Manufacturing Hub",
    category: "Industrial",
    description: "Large-scale industrial facility with automated systems and sustainable energy solutions.",
    status: "Ongoing",
    year: "2025",
    image: "/images/project5.jpg"
  },
  {
    id: 6,
    title: "City Convention Center",
    category: "Commercial",
    description: "Multi-purpose convention center with exhibition halls, auditoriums, and hospitality facilities.",
    status: "Completed",
    year: "2024",
    image: "/images/project6.jpg"
  },
];

const categories = ["All", "Infrastructure", "Residential", "Commercial", "Industrial"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing excellence in infrastructure development and construction across diverse sectors.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="mb-8 flex justify-center flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => category === "All" || project.category === category)
                    .map((project) => (
                      <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                              {project.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                          </div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription>
                            <Badge variant="outline" className="mt-2">{project.category}</Badge>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
