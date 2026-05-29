import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Clock, MoreHorizontal, Pencil, Trash, Video } from "lucide-react"
import { format } from "date-fns"

type Live = {
    _id: string
    title: string
    description: string
    day: string
    status: "scheduled" | "live" | "ended"
}

const statusConfig = {
    scheduled: { label: "Scheduled", className: "bg-yellow-500/10 text-yellow-500" },
    live: { label: "Live", className: "bg-green-500/10 text-green-500" },
    ended: { label: "Ended", className: "bg-muted text-muted-foreground" },
}

export const LiveCard = ({ live }: { live: Live }) => {
    const { label, className } = statusConfig[live.status]
    return (
        <div className="group relative flex flex-col rounded-xl border bg-card overflow-hidden hover:bg-accent/30 transition-colors">
            <div className="absolute top-3 right-3 z-10">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon-xs" className="bg-background/80 backdrop-blur-sm">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Pencil className="size-4 mr-2" />
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                            <Trash className="size-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="h-32 bg-linear-to-br from-muted/50 to-muted flex items-center justify-center">
                <div className="size-12 rounded-xl bg-background shadow-sm flex items-center justify-center">
                    <Video className="size-6 text-muted-foreground" />
                </div>
            </div>
            <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium line-clamp-1">{live.title}</h3>
                    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0 ${className}`}>
                        {label}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{live.description}</p>
                <div className="flex items-center gap-3 pt-1">
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Calendar className="size-3" />
                        {format(new Date(live.day), "MMM dd, yyyy")}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                        <Clock className="size-3" />
                        {format(new Date(live.day), "hh:mm a")}
                    </span>
                </div>
            </div>
        </div>
    )
}