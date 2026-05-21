import Link from "next/link";
import { Plus, BookOpen } from "lucide-react";

export default function ClassesHeader() {
    return (
        <header className="border-b border-border bg-card backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-background/70">
                <BookOpen className="w-7 h-7 text-accent-foreground" />
            </div>

            <div>
                <h1 className="text-3xl font-bold text-foreground">
                    My Classes
                </h1>

                <p className="text-muted-foreground">
                Create and manage your classes
                </p>
            </div>
        </div>

        <Link
            href="/teacher/classrooms/create"
            className="
                inline-flex
                items-center
                gap-2
                px-5
                py-3
                rounded-xl
                bg-accent/10
                text-accent-foreground
                hover:bg-accent/20
                transition-all
            "
            >
            <Plus className="w-5 h-5" />

            Create classe
            </Link> 
        </div>
        </header>
    );
}