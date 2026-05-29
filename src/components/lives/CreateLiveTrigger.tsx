import { Plus } from "lucide-react"

export const CreateLiveTrigger = ({ onClick }: { onClick: () => void }) => (
    <button
        onClick={onClick}
        className=" cursor-pointer flex flex-col rounded-xl border border-dashed bg-card overflow-hidden hover:bg-accent/30 transition-colors items-center justify-center h-full min-h-50 gap-2 text-muted-foreground hover:text-foreground"
    >
        <div className="size-12 rounded-xl border-2 border-dashed flex items-center justify-center">
            <Plus className="size-6" />
        </div>
        <span className="text-sm font-medium">Schedule a live</span>
    </button>
)