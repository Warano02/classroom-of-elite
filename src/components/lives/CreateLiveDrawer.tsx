"use client"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import axiosInstance from "@/lib/axios"

type Props = {
    open: boolean
    onClose: () => void
    roomId: string
    onCreated: () => void
}

export const CreateLiveDrawer = ({ open, onClose, roomId, onCreated }: Props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [day, setDay] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async () => {
        if (!title || !description || !day) return setError("All fields are required")
        try {
            setLoading(true)
            setError("")
            const now = new Date()
            const selectedDate = new Date(day)
            if (selectedDate < now) return setError("Please select a future date")
            await axiosInstance.post("/lives", { classroom: roomId, title, description, day })
            setTitle("")
            setDescription("")
            setDay("")
            onCreated()
            onClose()
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Drawer open={open} onOpenChange={onClose} direction="right">
            <DrawerContent className="flex flex-col gap-6 p-6">
                <DrawerHeader className="p-0">
                    <DrawerTitle>Schedule a live</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <Label>Title</Label>
                        <Input placeholder="Live session title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Description</Label>
                        <Textarea placeholder="What will be covered in this live?" value={description} onChange={e => setDescription(e.target.value)} rows={4} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Date & Time</Label>
                        <Input type="datetime-local" value={day} onChange={e => setDay(e.target.value)} />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                </div>
                <DrawerFooter className="p-0 mt-auto flex flex-row gap-2">
                    <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
                    <Button className="flex-1" onClick={handleSubmit} disabled={loading}>
                        {loading ? "Scheduling..." : "Schedule"}
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}