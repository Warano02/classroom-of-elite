// src/components/student/exam/SubjectsTab.tsx
"use client";

import { useState } from "react";
import { examFiles, subjects } from "@/mock-data/student-data";
import type { ExamType } from "@/mock-data/student-data";
import {
  ClipboardList,
  PenLine,
  MonitorPlay,
  FileText,
  Download,
  CheckCircle,
  Clock,
  Filter,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TYPES: ExamType[] = ["Examen", "CC", "TP"];

interface TypeConfig {
  color: string;
  activeColor: string;
  Icon: LucideIcon;
  description: string;
}

const TYPE_CONFIG: Record<ExamType, TypeConfig> = {
  Examen: {
    color: "bg-rose-500/10 text-rose-600 border-rose-200",
    activeColor: "bg-rose-500 text-white border-rose-500",
    Icon: ClipboardList,
    description: "Examens finaux de session",
  },
  CC: {
    color: "bg-blue-500/10 text-blue-600 border-blue-200",
    activeColor: "bg-blue-500 text-white border-blue-500",
    Icon: PenLine,
    description: "Contrôles continus",
  },
  TP: {
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    activeColor: "bg-emerald-500 text-white border-emerald-500",
    Icon: MonitorPlay,
    description: "Travaux pratiques",
  },
};

export function SubjectsTab() {
  const [activeType, setActiveType]       = useState<ExamType>("Examen");
  const [activeSubject, setActiveSubject] = useState<string>("all");

  const filtered = examFiles.filter((f) => {
    const matchType    = f.type === activeType;
    const matchSubject = activeSubject === "all" || f.subjectCode === activeSubject;
    return matchType && matchSubject;
  });

  const availableSubjects = [
    ...new Set(
      examFiles.filter((f) => f.type === activeType).map((f) => f.subjectCode)
    ),
  ];

  return (
    <div className="space-y-5">

      {/* Sélecteur de type */}
      <div className="grid grid-cols-3 gap-3">
        {TYPES.map((type) => {
          const config  = TYPE_CONFIG[type];
          const count   = examFiles.filter((f) => f.type === type).length;
          const isActive = activeType === type;
          return (
            <button
              key={type}
              onClick={() => { setActiveType(type); setActiveSubject("all"); }}
              className={cn(
                "border rounded-lg p-4 text-left transition-all duration-200 space-y-1",
                isActive ? config.activeColor : "bg-card hover:border-primary/50"
              )}
            >
              <div className="flex items-center justify-between">
                <config.Icon className={cn("size-5", isActive ? "text-white" : "")} />
                <span className={cn(
                  "text-xs font-mono px-2 py-0.5 rounded-full",
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                )}>
                  {count}
                </span>
              </div>
              <div className="font-semibold text-sm">{type}</div>
              <div className={cn("text-xs", isActive ? "text-white/80" : "text-muted-foreground")}>
                {config.description}
              </div>
            </button>
          );
        })}
      </div>

      {/* Filtre par matière */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="size-4 text-muted-foreground flex-shrink-0" />
        <button
          onClick={() => setActiveSubject("all")}
          className={cn(
            "px-3 py-1 rounded-full text-xs font-medium border transition-all",
            activeSubject === "all"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-muted-foreground hover:border-primary/50"
          )}
        >
          Toutes les matières
        </button>
        {availableSubjects.map((code) => {
          const subject = subjects.find((s) => s.code === code);
          if (!subject) return null;
          return (
            <button
              key={code}
              onClick={() => setActiveSubject(code)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all",
                activeSubject === code
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground hover:border-primary/50"
              )}
            >
              <subject.Icon className="size-3" />
              {code}
            </button>
          );
        })}
      </div>

      {/* Résultats */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          {filtered.length} sujet{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
        </h3>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg bg-card">
            <FileText className="size-10 text-muted-foreground mb-3" />
            <h3 className="font-medium mb-1">Aucun sujet disponible</h3>
            <p className="text-sm text-muted-foreground">
              Aucun {activeType} trouvé pour cette matière.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map((file) => {
              const config  = TYPE_CONFIG[file.type];
              const subject = subjects.find((s) => s.code === file.subjectCode);
              return (
                <div
                  key={file.id}
                  className="border rounded-lg p-4 bg-card hover:border-primary/50 hover:shadow-sm transition-all duration-200 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2 flex-1 min-w-0">
                      {subject && (
                        <div className={cn("size-8 rounded-md flex items-center justify-center flex-shrink-0", subject.color)}>
                          <subject.Icon className={cn("size-4", subject.iconColor)} />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-medium text-sm leading-tight">{file.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 font-mono">{file.subjectCode}</div>
                      </div>
                    </div>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full border flex-shrink-0 font-medium inline-flex items-center gap-1", config.color)}>
                      <config.Icon className="size-3" />
                      {file.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {file.year} · {file.semester}
                    </span>
                    <span>{file.pages} page{file.pages > 1 ? "s" : ""}</span>
                    {file.hasCorrection && (
                      <span className="flex items-center gap-1 text-emerald-600">
                        <CheckCircle className="size-3" />
                        Corrigé
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-1 border-t">
                    <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      <Download className="size-3" />
                      Télécharger
                    </button>
                    {file.hasCorrection && (
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-medium rounded-md border hover:bg-muted transition-colors">
                        <CheckCircle className="size-3" />
                        Corrigé
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
