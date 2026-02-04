"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/about.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Innovating Today, <span className="text-brand-secondary">Building</span> for Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              At Agrawals, we turn principles ideas into enduring realities. Our vision, mission,
              and legacy are driven by a passion for excellence in every space we create.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Crafting Timeless Spaces */}
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Crafting Timeless Spaces That Inspire Generations
            </h2>
          </div>

          {/* Tabs for Legacy, Mission, Vision */}
          <Tabs defaultValue="legacy" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="legacy" className="uppercase">Legacy</TabsTrigger>
              <TabsTrigger value="mission" className="uppercase">Mission</TabsTrigger>
              <TabsTrigger value="vision" className="uppercase">Vision</TabsTrigger>
            </TabsList>
            
            <TabsContent value="legacy" className="mt-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1982, the Agrawal Group has become a prominent name in Mumbai and Navi Mumbai's real estate market. Led by Shri
                Rakesh Agrawal and Shri Atul Agrawal, we continue to build on our legacy. Shri Pankaj Kalani joined the group as Director/ Partner.
                With over 3 decades of C&O-level experience in leading industrial houses, he now partners with the Agrawal family to drive the
                Agrawal Group forward.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 40 years, we've completed numerous real estate development projects across the Metropolitan Region of Greater Mumbai &
                Navi Mumbai, projects, constructing around 5 million square feet of property, and earning a reputation for integrity and reliability.
              </p>
            </TabsContent>
            
            <TabsContent value="mission" className="mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to create exceptional living spaces that enhance the quality of life for our residents. We are committed to
                delivering projects that combine innovative design, superior quality, and sustainable practices. Through our dedication to
                excellence, we aim to set new standards in the real estate industry.
              </p>
            </TabsContent>
            
            <TabsContent value="vision" className="mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be the most trusted and respected real estate developer in the region. We aspire to create landmark projects
                that not only meet the needs of today but also anticipate the requirements of tomorrow. By focusing on innovation, sustainability,
                and customer satisfaction, we aim to build a legacy that will inspire future generations.
              </p>
            </TabsContent>
          </Tabs>

          {/* Core Values */}
          <div className="pt-12 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Badge className="bg-brand-secondary">Integrity</Badge>
                  <p className="text-muted-foreground">
                    We uphold the highest standards of integrity in all our actions and decisions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Badge className="bg-brand-secondary">Excellence</Badge>
                  <p className="text-muted-foreground">
                    We pursue excellence in everything we do, from design to execution.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <Badge className="bg-brand-secondary">Innovation</Badge>
                  <p className="text-muted-foreground">
                    We embrace innovation to create spaces that meet evolving needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

