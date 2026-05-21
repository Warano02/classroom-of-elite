    "use client";

    import { Share2 } from "lucide-react";
    import { Classe } from "@/types/classe";
    import ClasseCardMenu from "./ClassCardMenu";

    interface Props {
    classe: Classe;
    onDelete: (id: string) => void;
    onToggleSuspend: (id: string) => void;
    onShare: (classe: Classe) => void;
    }

    export default function ClasseCardList({
    classe,
    onDelete,
    onToggleSuspend,
    onShare
    }: Props) {
    return (
        <div className="flex items-center gap-6 p-6 rounded-3xl border border-border bg-card">

            <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">{classe.name}</h2>
                <p className="text-muted-foreground">{classe.description}</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                onClick={() => onShare(classe)}
                className="p-2 rounded-xl bg-background/70 text-foreground hover:bg-background transition-colors"
                >
                <Share2 className="w-5 h-5" />
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