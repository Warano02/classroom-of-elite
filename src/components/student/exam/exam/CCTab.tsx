// src/components/student/exam/CCTab.tsx
"use client";

import { useState, useEffect } from "react";
import { scheduledCCs, subjects } from "@/mock-data/student-data";
import type { ScheduledCC } from "@/mock-data/student-data";
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  Timer,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ── Calcule le temps restant ──
function useCountdown(deadline: Date) {
  const [timeLeft, setTimeLeft] = useState(() => deadline.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(deadline.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return timeLeft;
}


function formatTimeLeft(ms: number): string {
  if (ms <= 0) return "Délai dépassé";
  const days    = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  if (days > 0)    return `${days}j ${hours}h ${minutes}m`;
  if (hours > 0)   return `${hours}h ${minutes}m ${seconds}s`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}


function CCCard({ cc }: { cc: ScheduledCC }) {
  const timeLeft  = useCountdown(cc.deadline);
  const isExpired = timeLeft <= 0;
  const isUrgent  = !isExpired && timeLeft < 1000 * 60 * 60 * 3; // moins de 3h

  const subject = subjects.find((s) => s.code === cc.subjectCode);

  return (
    <div
      className={cn(
        "border rounded-lg p-4 bg-card transition-all duration-200 space-y-4",
        isExpired
          ? "opacity-60 border-dashed"
          : isUrgent
          ? "border-orange-400 shadow-sm shadow-orange-100"
          : "hover:border-primary/50 hover:shadow-sm"
      )}
    >
      {/* ── En-tête ── */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          {subject && (
            <div
              className={cn(
                "size-9 rounded-md flex items-center justify-center flex-shrink-0",
                subject.color
              )}
            >
              <subject.Icon className={cn("size-4", subject.iconColor)} />
            </div>
          )}
          <div className="min-w-0">
            <div className="font-semibold text-sm leading-tight">{cc.title}</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {cc.teacher} · {cc.subject}
            </div>
          </div>
        </div>

        {/* Badge statut */}
        {isExpired ? (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border flex-shrink-0">
            <CheckCircle className="size-3" />
            Évaluation achevée
          </span>
        ) : isUrgent ? (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 border border-orange-200 flex-shrink-0">
            <AlertTriangle className="size-3" />
            Urgent
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-200 flex-shrink-0">
            <Clock className="size-3" />
            Ouvert
          </span>
        )}
      </div>

      {/* ── Infos du CC ── */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/50 rounded-md p-2 text-center">
          <Timer className="size-3 text-muted-foreground mx-auto mb-1" />
          <div className="text-xs font-medium">{cc.duration} min</div>
          <div className="text-xs text-muted-foreground">Durée</div>
        </div>
        <div className="bg-muted/50 rounded-md p-2 text-center">
          <HelpCircle className="size-3 text-muted-foreground mx-auto mb-1" />
          <div className="text-xs font-medium">{cc.totalQuestions}</div>
          <div className="text-xs text-muted-foreground">Questions</div>
        </div>
        <div className="bg-muted/50 rounded-md p-2 text-center">
          <Clock className="size-3 text-muted-foreground mx-auto mb-1" />
          <div className="text-xs font-medium font-mono">
            {cc.deadline.toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "short",
            })}
          </div>
          <div className="text-xs text-muted-foreground">Limite</div>
        </div>
      </div>

      {/* ── Compte à rebours + action ── */}
      <div className="flex items-center justify-between pt-1 border-t gap-3">
        <div
          className={cn(
            "flex items-center gap-1.5 text-xs font-mono font-medium",
            isExpired
              ? "text-muted-foreground"
              : isUrgent
              ? "text-orange-600"
              : "text-emerald-600"
          )}
        >
          <Clock className="size-3" />
          {formatTimeLeft(timeLeft)}
        </div>

        {isExpired ? (
          <div className="flex items-center gap-1 text-xs text-muted-foreground italic">
            <CheckCircle className="size-3" />
            Session terminée
          </div>
        ) : (
          <Link
            href={`/student/exam/${cc.id}`}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
              isUrgent
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Aller composer
            <ChevronRight className="size-3" />
          </Link>
        )}
      </div>
    </div>
  );
}

// ── Composant principal exporté ──
export function CCTab() {
  const active  = scheduledCCs.filter((cc) => cc.deadline.getTime() > Date.now());
  const expired = scheduledCCs.filter((cc) => cc.deadline.getTime() <= Date.now());

  return (
    <div className="space-y-6">

      {/* CC actifs */}
      {active.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold">CC en cours</h3>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-mono">
              {active.length}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {active.map((cc) => (
              <CCCard key={cc.id} cc={cc} />
            ))}
          </div>
        </div>
      )}

      {/* CC expirés */}
      {expired.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Évaluations achevées
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {expired.map((cc) => (
              <CCCard key={cc.id} cc={cc} />
            ))}
          </div>
        </div>
      )}

      {scheduledCCs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center border rounded-lg bg-card">
          <Clock className="size-10 text-muted-foreground mb-3" />
          <h3 className="font-medium mb-1">Aucun CC programmé</h3>
          <p className="text-sm text-muted-foreground">
            Les enseignants n'ont pas encore programmé de contrôle.
          </p>
        </div>
      )}
    </div>
  );
}
