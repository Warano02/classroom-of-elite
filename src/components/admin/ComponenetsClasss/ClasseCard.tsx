"use client";

import { Share2, Users } from "lucide-react";
import { Classe } from "../../../types/classe";
import ClasseCardMenu from "./ClassCardMenu";

interface Props {
    classe: Classe;
    viewMode: "grid" | "list";
    onDelete: (id: string) => void;
    onToggleSuspend: (id: string) => void;
    onShare: (classe: Classe) => void;
}

export default function ClasseCard({
    classe,
    viewMode,
    onDelete,
    onToggleSuspend,
    onShare,
}: Props) {
    if (!classe) return null;

    //  MODE LISTE
    if (viewMode === "list") {
        return (
            <div
                className={`flex items-center gap-4 rounded-2xl bg-card border border-border shadow-sm px-4 py-3 transition-opacity ${
                    classe.suspendue ? "opacity-60" : ""
                }`}
            >
                <div className="shrink-0 w-1.5 h-12 rounded-full bg-accent" />

                <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-bold text-foreground truncate">
                        {classe.name}
                    </h2>
                    {classe.slogan && (
                        <p className="text-xs text-accent-foreground italic truncate">
                            {classe.slogan}
                        </p>
                    )}
                </div>

                {/* Compteur étudiants */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Users className="w-3.5 h-3.5" />
                    <span>{classe.students ?? 0} Students</span>
                </div>

                {classe.suspendue && (
                    <span className="shrink-0 text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                        Suspended
                    </span>
                )}

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                    <button
                        onClick={() => onShare(classe)}
                        className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                    <ClasseCardMenu
                        suspendue={classe.suspendue}
                        onDelete={() => onDelete(classe.id)}
                        onToggleSuspend={() => onToggleSuspend(classe.id)}
                    />
                </div>
            </div>
        );
    }

    //  MODE GRILLE (defaut)
    return (
        <div
            className={`rounded-2xl overflow-hidden bg-card border border-border shadow-sm transition-opacity ${
                classe.suspendue ? "opacity-60" : ""
            }`}
        >
            {/* En-tête coloré */}
            <div className="relative h-36 bg-linear-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center">
                {/* Badge suspendu */}
                {classe.suspendue && (
                    <span className="absolute top-3 left-3 text-xs font-medium text-foreground bg-background/60 backdrop-blur-sm rounded-full px-2.5 py-0.5 border border-border">
                        Suspended
                    </span>
                )}

                {/* Actions */}
                <div className="absolute top-3 right-3 flex gap-2">
                    <button
                        onClick={() => onShare(classe)}
                        className="p-2 rounded-xl bg-background/70 text-foreground hover:bg-background transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <ClasseCardMenu
                        suspendue={classe.suspendue}
                        onDelete={() => onDelete(classe.id)}
                        onToggleSuspend={() => onToggleSuspend(classe.id)}
                    />
                </div>
            </div>

            {/* Corps de la carte */}
            <div className="p-4 bg-background border-t border-border">
                <h2 className="text-base font-bold text-foreground">{classe.name}</h2>
                {classe.slogan && (
                    <p className="text-sm italic mb-1 text-muted-foreground">{classe.slogan}</p>
                )}
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{classe.students ?? 0} Students</span>
                </div>
            </div>
        </div>
    );
}