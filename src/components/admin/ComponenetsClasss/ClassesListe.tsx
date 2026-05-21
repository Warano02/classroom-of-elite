"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Grid3x3, List, BookOpen } from "lucide-react";
import { Classe } from "@/types/classe";
import ClassesHeader from "./ClasseHeader";
import ClasseCard from "./ClasseCard";

// Palette de couleurs pour les couvertures
const COVER_COLORS = [
    "from-blue-500 to-indigo-600",
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-amber-500 to-orange-600",
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-sky-600",
    "from-red-500 to-sky-600",
    "from-lime-500 to-green-600",
];

// Détermine une couleur stable basée sur l'id de la classe
function getCoverColor(id: string): string {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    return COVER_COLORS[Math.abs(hash) % COVER_COLORS.length];
}

export default function ClassesList() {
    const [classes, setClasses] = useState<Classe[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    useEffect(() => {
        const saved = localStorage.getItem("classes");
        if (saved) setClasses(JSON.parse(saved));
    }, []);

    const handleToggleSuspend = (id: string) => {
        const updated = classes.map((c) =>
            c.id === id ? { ...c, suspendue: !c.suspendue } : c
        );
        setClasses(updated);
        localStorage.setItem("classes", JSON.stringify(updated));
    };

    const handleDelete = (id: string) => {
        if (!window.confirm("Delete this class?")) return;
        const updated = classes.filter((c) => c.id !== id);
        setClasses(updated);
        localStorage.setItem("classes", JSON.stringify(updated));
    };

    const handleShare = (classe: Classe) => {
        const url = `${window.location.origin}/classe/${classe.id}`;
        if (navigator.share) {
            navigator.share({ title: classe.name, url }).catch(() => {
                navigator.clipboard.writeText(url);
            });
        } else {
            navigator.clipboard.writeText(url);
            alert("Link copied!");
        }
    };

    return (
        <div className="min-h-screen">
            <header>
                <ClassesHeader />
            </header>

            <main className="max-w-7xl mx-auto px-6 py-6">
                {classes.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 rounded-3xl bg-card border border-border">
                        <BookOpen className="w-16 h-16 text-muted-foreground" />
                        <p className="text-xl font-semibold text-muted-foreground">
                            No classes
                        </p>
                        <Link
                            href="/teacher/classrooms/create"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-all"
                        >
                            <Plus className="w-4 h-4" />
                            Create class
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Barre de contrôle */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-muted-foreground">
                                {classes.length}{" "}
                                {classes.length === 1 ? "classe" : "classes"}
                            </p>
                            <div className="flex gap-1 bg-card border border-border rounded-xl p-1 shadow-sm">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === "grid"
                                            ? "bg-accent/10 text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <Grid3x3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-lg transition-colors ${
                                        viewMode === "list"
                                            ? "bg-accent/10 text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Grille */}
                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {classes.map((classe) => (
                                    <ClasseCard
                                        key={classe.id}
                                        classe={classe}
                                        viewMode={viewMode}
                                        onDelete={handleDelete}
                                        onToggleSuspend={handleToggleSuspend}
                                        onShare={handleShare}
                                    />
                                ))}
                            </div>
                        ) : (
                            /* Liste */
                            <div className="flex flex-col gap-3">
                                {classes.map((classe) => (
                                    <ClasseCard
                                        key={classe.id}
                                        classe={classe}
                                        viewMode={viewMode}
                                        onDelete={handleDelete}
                                        onToggleSuspend={handleToggleSuspend}
                                        onShare={handleShare}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}