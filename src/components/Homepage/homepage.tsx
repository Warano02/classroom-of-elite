"use client"

import Header from './header';
import { ImageWithFallback } from './ImageWithFallback';
import Features from './features';
import Stats from './stats';
import HowItWorks from './Howitworks';
import Testimonials from './testimoniales';
import Footer from './footer';
import { ArrowBigRight } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="size-full overflow-y-auto bg-background text-foreground">
      <Header />

      <section className="min-h-screen flex items-center bg-background px-8 md:px-16 perspective-3d relative overflow-hidden pt-20">
        <div className="bubbles-container">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="bubble" />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32 w-full max-w-9xl mx-auto relative z-10">
          <div className="w-full lg:w-1/2 lg:pr-6">
            <h1 className="text-5xl md:text-7xl mb-6 text-foreground animate-fade-in-up tracking-tight transform-3d-title">
              Classroom{' '}
              <span className="text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                of Elite
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-6 animate-fade-in-up [animation-delay:150ms] leading-tight max-w-3xl">
              Create immersive courses, track student progress, and deliver academic excellence with a powerful, all-in-one teaching platform.
            </p>

            <p className="text-lg text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms] leading-relaxed max-w-2xl lg:-ml-4">
              Designed for university instructors, Classroom of Elite helps you build engaging lessons, manage assignments, and keep students motivated with intelligent analytics and seamless collaboration.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-10">
              <div className="rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground">
                <strong className="text-card-foreground">Live teaching</strong>
                <p className="mt-3">Run HD sessions, group labs, and live discussions with ease.</p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground">
                <strong className="text-card-foreground">Smart assessment</strong>
                <p className="mt-3">Create quizzes and assignments with automated grading and feedback.</p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-5 text-sm text-muted-foreground">
                <strong className="text-card-foreground">Insightful analytics</strong>
                <p className="mt-3">Monitor student progress and identify who needs support.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/auth/login"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-violet-500 px-5 py-2 text-2xl font-semibold text-white shadow-lg shadow-pink-500/20 transition duration-200 hover:brightness-110" >
                Get Started <ArrowBigRight className="ml-2" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-2xl lg:w-1/2 animate-fade-in-up [animation-delay:300ms]">
            <div className="aspect-square bg-card backdrop-blur-sm rounded-2xl shadow-2xl border border-pink-500/30 animate-float animate-hero-image relative overflow-hidden notebook-lines card-3d">
              <ImageWithFallback src="/HomepageImage.jpg" alt="Student working on a laptop" width={1024} height={1024} className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}