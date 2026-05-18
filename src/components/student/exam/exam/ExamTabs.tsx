// src/components/student/exam/ExamTabs.tsx
"use client";

import { useState } from "react";
import { CCTab } from "./CCTab";
import { scheduledCCs } from "@/mock-data/student-data";
import { cn } from "@/lib/utils";
import { FileText, PenLine } from "lucide-react";
import { SubjectsTab } from "./SubjectsTab";

type Tab = "sujets" | "cc";

export function ExamTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("cc");

  
  const activeCCCount = scheduledCCs.filter(
    (cc) => cc.deadline.getTime() > Date.now()
  ).length;

  return (
    <div className="space-y-5">

      {/* Barre d'onglets */}
      <div className="flex gap-1 border-b">
        <button
          onClick={() => setActiveTab("cc")}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all",
            activeTab === "cc"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <PenLine className="size-4" />
          CC Programmés
          {activeCCCount > 0 && (
            <span className="text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full font-mono">
              {activeCCCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("sujets")}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all",
            activeTab === "sujets"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <FileText className="size-4" />
          Sujets PDF
        </button>
      </div>

      {/* Contenu de l'onglet actif */}
      {activeTab === "cc" ? <CCTab /> : <SubjectsTab />}
    </div>
  );
}
