// app/student/(root)/page.tsx
"use client";

import { useState } from "react";
import { BookmarksHeader } from "@/components/user/dashboard/header";
import { subjects, studentStats } from "@/mock-data/student-data";
import { BookOpen, Clock, Award, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StudentDashboard() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      <BookmarksHeader title="Mon Tableau de Bord" />

      <div className="flex-1 w-full overflow-auto">
        <div className="p-4 md:p-6 space-y-6">

          {/* ── Bienvenue ── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Bonjour, {studentStats.name} 👋
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {studentStats.level} · Semestre en cours
              </p>
            </div>
            <Link
              href="/student/exam"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="size-4" />
              Sujets d'examens
              <ChevronRight className="size-4" />
            </Link>
          </div>

          {/* ── KPI Cards ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                label: "Matières",
                value: studentStats.totalSubjects,
                icon: BookOpen,
                sub: "ce semestre",
                color: "text-violet-500",
              },
              {
                label: "Progression moy.",
                value: `${studentStats.averageProgress}%`,
                icon: TrendingUp,
                sub: "sur toutes les matières",
                color: "text-emerald-500",
              },
              {
                label: "Sessions à venir",
                value: studentStats.upcomingSessions,
                icon: Clock,
                sub: "cette semaine",
                color: "text-orange-500",
              },
              {
                label: "Crédits validés",
                value: `${studentStats.earnedCredits}/${studentStats.totalCredits}`,
                icon: Award,
                sub: "crédits ECTS",
                color: "text-blue-500",
              },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="border rounded-lg p-4 bg-card space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {kpi.label}
                  </span>
                  <kpi.icon className={cn("size-4", kpi.color)} />
                </div>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="text-xs text-muted-foreground">{kpi.sub}</div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Mes matières</h3>
              <span className="text-xs text-muted-foreground">
                {subjects.length} matières · L3 Informatique
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className={cn(
                    "border rounded-lg p-4 bg-card cursor-pointer transition-all duration-200 space-y-3",
                    hoveredId === subject.id && "border-primary shadow-sm"
                  )}
                  onMouseEnter={() => setHoveredId(subject.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                 
                  <div className="flex items-start gap-3">
                    <div
                     className={cn(
                      "size-10 rounded-md flex items-center justify-center flex-shrink-0",
                      subject.color
                    )}
                     >
                    <subject.Icon className={cn("size-5", subject.iconColor)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm leading-tight truncate">
                        {subject.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-2">
                        <span className="font-mono">{subject.code}</span>
                        <span>·</span>
                        <span>{subject.credits} crédits</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-medium font-mono">
                        {subject.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                     <div
                      className={cn("h-full rounded-full transition-all", subject.iconColor.replace("text-", "bg-"))}
                      style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>

                 
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                    <span>{subject.teacher}</span>
                    {subject.nextSession && (
                      <span className="flex items-center gap-1 text-primary">
                        <Clock className="size-3" />
                        {subject.nextSession}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

