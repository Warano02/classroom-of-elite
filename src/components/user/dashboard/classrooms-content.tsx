"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axiosInstance from "@/lib/axios"
import { Home, House, Loader2, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import ClassRoomCard, { IClassroomCard } from "./classroom-card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

function ClassroomsContent() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [classrooms, setCR] = useState<IClassroomCard[]>([])
    const [code, setCode] = useState("")
    const fetchClass = async () => {
        try {
            const { data } = await axiosInstance.get<{ classrooms: IClassroomCard[] }>("/cr")
            setCR(data.classrooms)
        } catch (e) {
            console.log(e)
            alert("Error occured while fectching classrooms ")
        } finally {
            setLoading(false)
        }
    }
    const handleSubmit = async () => {
        if (!code) return toast.error("Please provide the code ", { position: "top-center" })
        setLoading(true)
        try {
            const { data } = await axiosInstance.post("/cr/join?joinCode=" + code.toUpperCase())
            toast.success(data.message)
            setCode("")
            setDrawerOpen(false)
            fetchClass()
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchClass()
    }, [])
    if (loading) return <p>Loading...</p>
    if (classrooms.length == 0) return <NoClassRooms />

    return (
        <div className="flex-1 w-full overflow-auto">
            <div className="p-4 md:p-6 space-y-6">

                <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <div className="size-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                        <Home className="size-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Your Classrooms</h2>
                        <p className="text-sm text-muted-foreground">
                            Click on one of it to preview content, show assigment and more...
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {
                        classrooms.map(classroom => <ClassRoomCard room={classroom} key={classroom._id} />)
                    }
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card hover:bg-accent/30 hover:border-primary/40 transition-colors min-h-50 gap-2 text-muted-foreground hover:text-primary cursor-pointer"
                    >
                        <div className="size-12 rounded-xl border-2 border-dashed flex items-center justify-center">
                            <Plus className="size-5" />
                        </div>
                        <span className="text-xs font-medium">New classroom</span>
                    </button>
                </div>

            </div>
            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
                <SheetContent side="right" className="w-full sm:max-w-md flex flex-col gap-0 p-0">
                    <SheetHeader className="p-6 pb-4 border-b">
                        <SheetTitle>Request to join Classroom</SheetTitle>
                        <SheetDescription>Fill the join code of the classroom to request join it !</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col gap-5 p-6 flex-1 overflow-y-auto">
                        <div className="space-y-1.5">
                            <Label htmlFor="name">Classroom Code <span className="text-destructive">*</span></Label>
                            <Input value={code} placeholder="Enter the code " onChange={e => setCode(e.target.value)} required />
                        </div>

                    </div>
                    <div className="p-6 pt-4 border-t">
                        <Button className="w-full" onClick={handleSubmit} disabled={loading || !code}>
                            {loading ? <Loader2 className="size-4 mr-2 animate-spin" /> : <Plus className="size-4 mr-2" />}
                            Request to Join Classroom
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}




const NoClassRooms = () => {
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState("")

    const requestJoin = async () => {
        try {
            setLoading(true)
            const { data } = await axiosInstance.post("/cr/join?joinCode=" + code.toUpperCase())
            toast.success(data.message)
            setCode("")
        } catch (e: any) {

            alert(e?.response?.data?.message || "Error occurd while trying to request join")
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <House className="size-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-1">No Classroom Join yet </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
                You haven't join some virtual calssroom for now. Enter the code and join here
            </p>

            <form onSubmit={(e) => { e.preventDefault(); requestJoin() }} className="flex gap-4 mt-12">
                <Input value={code} placeholder="Enter the code " onChange={e => setCode(e.target.value)} required />
                <Button disabled={loading || !code || code.length !== 9} type="submit" variant={"secondary"} className="cursor-pointer disabled:cursor-not-allowed">
                    {loading ? <><span className="size-4 border-2 border-primary rounded-full animation-spin" /> Joining...  </> : "Request to join"}
                </Button>
            </form>
        </div>
    )
}


export default ClassroomsContent