"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-pink-500/20">
        <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <span className="text-white text-xl">Classroom <span className="text-pink-500">of the Elite</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-pink-500 transition-colors">Fonctionnalités</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-pink-500 transition-colors">Comment ça marche</a>
            <a href="#testimonials" className="text-gray-300 hover:text-pink-500 transition-colors">Témoignages</a>
            <a href="#contact" className="text-gray-300 hover:text-pink-500 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-white" />
            </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-pink-500/20">
            <nav className="flex flex-col gap-4 mt-8">
            <a href="#features" className="text-gray-300 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Fonctionnalités</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Comment ça marche</a>
            <a href="#testimonials" className="text-gray-300 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Témoignages</a>
            <a href="#contact" className="text-gray-300 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            <div className="flex flex-col gap-2 mt-4">
            <button className="text-gray-300 hover:text-white transition-colors text-left" onClick={() => setIsOpen(false)}>Se connecter</button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>S'inscrire</button>
            </div>
            <div className="mt-4">
            <ThemeToggle />
            </div>
            </nav>
            </SheetContent>
            </Sheet>
            </div>
            <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition-colors">Se connecter</button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition-colors">
                S'inscrire
            </button>
            </div>
            </div>
        </nav>
        </header>
    );
}
