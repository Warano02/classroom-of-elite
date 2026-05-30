"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import axiosInstance from "@/lib/axios"
import { LiveCard } from "@/components/lives/LiveCard"
import { CreateLiveTrigger } from "@/components/lives/CreateLiveTrigger"
import { CreateLiveDrawer } from "@/components/lives/CreateLiveDrawer"
import { Skeleton } from "@/components/ui/skeleton"
import { useAuthStore } from "@/store/auth.store"
import { Clock } from "lucide-react"

const LiveCardSkeleton = () => (
    <div className="flex flex-col rounded-xl border bg-card overflow-hidden">
        <Skeleton className="h-32 w-full" />
        <div className="p-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
            <div className="flex items-center gap-3 pt-1">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
            </div>
        </div>
    </div>
)

export default function LivesPage() {
    const { roomId } = useParams<{ roomId: string }>()
    const [lives, setLives] = useState([])
    const [loading, setLoading] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const { user } = useAuthStore()

    const fetchLives = async () => {
        try {
            const { data } = await axiosInstance.get(`/lives/classroom/${roomId}`)
            setLives(data)
        } catch { } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchLives() }, [roomId])

    return (
        <div className="p-6">
            {
                !loading && lives.length === 0 && (
                    <div className="flex-1 w-full overflow-auto">
                        <div className="p-4 md:p-6 space-y-6">
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
                                    <Clock className="size-6 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-medium mb-1">No Schedule live</h3>
                                <p className="text-sm text-muted-foreground max-w-sm">
                                  No Lives has been made or schedule in this classroom.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {loading
                    ? Array.from({ length: 3 }).map((_, i) => <LiveCardSkeleton key={i} />)
                    : lives.map((live: any) => <LiveCard key={live._id} live={live} />)
                }
                {user?.role == "teacher" && <CreateLiveTrigger onClick={() => setDrawerOpen(true)} />}
            </div>
            {user?.role == "teacher" && (
                <CreateLiveDrawer
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    roomId={roomId}
                    onCreated={fetchLives}
                />
            )}
        </div>
    )
}