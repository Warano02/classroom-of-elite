"use client";

import { useState } from "react";
import { FileText, Link2, Video, Image, Music, ExternalLink, Trash2, MoreHorizontal, Copy, UploadCloud, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/auth.store";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import Link from "next/link";

export type ResourceType = "pdf" | "link" | "video_file" | "video_link" | "image" | "audio";

export interface Resource {
    id: string;
    title: string;
    type: ResourceType;
    url: string;
    size?: string;
    createdAt: string;
}

export const MOCK_RESOURCES: Resource[] = [
    {
        id: "1",
        title: "Introduction au cours – Slides",
        type: "pdf",
        url: "/files/intro-slides.pdf",
        size: "2.4 MB",
        createdAt: "2024-05-10",
    },
    {
        id: "2",
        title: "Documentation officielle React",
        type: "link",
        url: "https://react.dev",
        createdAt: "2024-05-11",
    },
    {
        id: "3",
        title: "Démonstration – Setup projet Next.js",
        type: "video_link",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        createdAt: "2024-05-12",
    },
    {
        id: "4",
        title: "Schéma architecture MVC",
        type: "image",
        url: "/files/mvc-diagram.png",
        size: "540 KB",
        createdAt: "2024-05-13",
    },
    {
        id: "5",
        title: "Podcast – Introduction au TypeScript",
        type: "audio",
        url: "/files/typescript-intro.mp3",
        size: "18.2 MB",
        createdAt: "2024-05-14",
    },
];

const TYPE_META: Record<
    ResourceType,
    { label: string; icon: React.ElementType; bg: string; iconColor: string }
> = {
    pdf: { label: "PDF", icon: FileText, bg: "from-red-50/80 to-red-100/60 dark:from-red-950/40 dark:to-red-900/30", iconColor: "text-red-600 dark:text-red-400" },
    link: { label: "Lien", icon: Link2, bg: "from-blue-50/80 to-blue-100/60 dark:from-blue-950/40 dark:to-blue-900/30", iconColor: "text-blue-600 dark:text-blue-400" },
    video_file: { label: "Vidéo", icon: Video, bg: "from-purple-50/80 to-purple-100/60 dark:from-purple-950/40 dark:to-purple-900/30", iconColor: "text-purple-600 dark:text-purple-400" },
    video_link: { label: "Vidéo", icon: Video, bg: "from-purple-50/80 to-purple-100/60 dark:from-purple-950/40 dark:to-purple-900/30", iconColor: "text-purple-600 dark:text-purple-400" },
    image: { label: "Image", icon: Image, bg: "from-emerald-50/80 to-emerald-100/60 dark:from-emerald-950/40 dark:to-emerald-900/30", iconColor: "text-emerald-600 dark:text-emerald-400" },
    audio: { label: "Audio", icon: Music, bg: "from-amber-50/80 to-amber-100/60 dark:from-amber-950/40 dark:to-amber-900/30", iconColor: "text-amber-600 dark:text-amber-400" },
};

function ResourceCard({
    resource,
    onDelete,
    canManage,
}: {
    resource: Resource;
    onDelete: (id: string) => void;
    canManage: boolean;
}) {
    const meta = TYPE_META[resource.type];
    const Icon = meta.icon;

    function handleOpen() {
        window.open(resource.url, "_blank", "noopener,noreferrer");
    }

    function handleCopy() {
        navigator.clipboard.writeText(resource.url);
        toast.success("Link copied to clipboard!")
    }

    return (
        <div className="group relative flex flex-col rounded-xl border bg-card overflow-hidden hover:bg-accent/30 transition-colors">
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="size-7 bg-background/80 backdrop-blur-sm"
                        >
                            <MoreHorizontal className="size-3.5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={handleCopy}>
                            <Copy className="size-3.5 mr-2" />
                            Copy link
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleOpen}>
                            <ExternalLink className="size-3.5 mr-2" />
                            Open
                        </DropdownMenuItem>
                        {canManage && (
                            <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => onDelete(resource.id)}
                            >
                                <Trash2 className="size-3.5 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <button className="w-full text-left cursor-pointer" onClick={handleOpen}>
                <div className={cn("h-28 bg-gradient-to-br flex items-center justify-center", meta.bg)}>
                    <div className="size-12 rounded-xl bg-background shadow-sm flex items-center justify-center">
                        <Icon className={cn("size-5", meta.iconColor)} />
                    </div>
                </div>

                <div className="p-4 space-y-1.5">
                    <h3 className="font-medium text-sm line-clamp-1">{resource.title}</h3>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">{resource.createdAt}</span>
                        <div className="flex items-center gap-1.5">
                            {resource.size && (
                                <span className="text-[10px] text-muted-foreground">{resource.size}</span>
                            )}
                            <Badge variant="outline" className="text-[10px] py-0 px-1.5 h-4">
                                {meta.label}
                            </Badge>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}



export function ResourceList() {
    const { roomId } = useParams()
    const { user } = useAuthStore()
    const [resources, setResources] = useState<Resource[]>(MOCK_RESOURCES);
    const [filter, setFilter] = useState<ResourceType | "all">("all");
    const [loading, setLoading] = useState(true);
    const uniqueFilters = [
        { value: "all" as const, label: "All" },
        { value: "pdf" as const, label: "PDF" },
        { value: "link" as const, label: "Links" },
        { value: "video_file" as const, label: "Videos" },
        { value: "image" as const, label: "Images" },
        { value: "audio" as const, label: "Audio" },
    ];

    const displayed = resources.filter((r) => {
        if (filter === "all") return true;
        if (filter === "video_file") return r.type === "video_file" || r.type === "video_link";
        return r.type === filter;
    });

    function handleDelete(id: string) {
        setResources((prev) => prev.filter((r) => r.id !== id));
    }

    if (!loading) return <section className="space-y-6">
        <Skeleton className="w-full h-24" />
        <div className="grid grid-cols-4 gap-4">
            {
                Array.from({ length: 16 }).map((_, i) => <Skeleton key={i} className="w-full h-60" />)
            }
        </div>
    </section>
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-base font-semibold">Ressources</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                        {resources.length} ressource{resources.length > 1 ? "s" : ""} Avaible{resources.length > 1 ? "s" : ""}
                    </p>
                </div>

            </div>

            <div className="flex items-center gap-2 flex-wrap">
                {uniqueFilters.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                            filter === f.value
                                ? "bg-foreground text-background border-foreground"
                                : "bg-transparent text-muted-foreground border-border hover:border-foreground/40"
                        )}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {displayed.length === 0 ? (
                <div className="flex-1 w-full overflow-auto">
                    <div className="p-4 md:p-6 space-y-6">
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
                                <UploadCloud className="size-6 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-medium mb-1">No Assets  yet</h3>
                            <p className="text-sm text-muted-foreground max-w-sm">
                                Teacher of this course has not uploaded any assets yet. Please check back later for course materials and resources.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {displayed.map((resource) => (
                        <ResourceCard
                            key={resource.id}
                            resource={resource}
                            onDelete={handleDelete}
                            canManage={user?.role === "teacher"}
                        />
                    ))}

                    {
                        user?.role == "teacher" && <Link href={`/rooms/${roomId}/resources/new`} className="relative flex justify-center items-center  rounded-xl border border-dashed bg-card  hover:bg-accent/30 transition-colors">
                            <Plus className="size-3.5 mr-2" />

                        </Link>
                    }

                </div>
            )}
        </div>
    );
}