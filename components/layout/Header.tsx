"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="PNRV Infra Logo"
            width={180}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">About Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about PNRV Infra
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex bg-brand-secondary hover:bg-brand-primary" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation links</SheetDescription>
              </VisuallyHidden>
              <nav className="flex flex-col gap-6 mt-12">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-brand-secondary transition-colors py-2 pl-4 border-b border-gray-200"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-brand-secondary transition-colors py-2 pl-4 border-b border-gray-200"
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-brand-secondary transition-colors py-2 pl-4 border-b border-gray-200"
                >
                  Services
                </Link>
                <Link 
                  href="/projects" 
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-brand-secondary transition-colors py-2 pl-4 border-b border-gray-200"
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  onClick={closeMenu}
                  className="text-lg font-semibold hover:text-brand-secondary transition-colors py-2 pl-4 border-b border-gray-200"
                >
                  Contact
                </Link>
                <Button className="mt-6 w-full bg-brand-secondary hover:bg-brand-primary" asChild onClick={closeMenu}>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
