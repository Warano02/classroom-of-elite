"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Check, Clock, X } from 'lucide-react'
import { toast } from 'sonner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import axiosInstance from '@/lib/axios'
import Skeleton from './Skeleton'

interface IStudent {
    id: string,
    name: string,
    date: string,
    classroom: string,
    avatar: string | null
}
function StudentsList() {
    const [loading, setLoading] = useState(true)
    const [students, setStudents] = useState<IStudent[]>([])
    const [isAction, setAction] = useState(false)
    const approve = async (id: string) => {
        setAction(true)
        try {
            await axiosInstance.patch("/t/dec_enrollment", { enroll: id, decision: "active" })
            setStudents(p => p.filter(e => e.id != id))
            return toast.success("User join the classroom successfully !", { position: "top-center" })
        } catch (e) {
            toast.error("Error occured while trying to approve this user in the classroom...")
        } finally {
            setAction(false)
        }
    }

    const reject = async (id: string) => {
        setAction(true)
        try {
            await axiosInstance.patch("/t/dec_enrollment", { enroll: id, decision: "banned" })
            setStudents(p => p.filter(e => e.id != id))
            return toast.success("User join the classroom successfully !", { position: "top-center" })
        } catch (e) {
            toast.error("Error occured while trying to reject this user request ")
        } finally {
            setAction(false)
        }
    }

    useEffect(() => {
        const f = async () => {
            const { data } = await axiosInstance.get("/cr/pending_enrolls")
            setLoading(false)
            return setStudents(data.enrollments)
        }
        f()
    }, [])
    if (loading) return <Skeleton />
    if (!students.length) return <div className="flex-1 w-full overflow-auto">
        <div className="p-4 md:p-6 space-y-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Clock className="size-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1">No Pending request yet</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                    No pending request to join your classroom for now prof.!
                </p>
            </div>
        </div>
    </div>
    return (
        <section className="p-4">
            <div className="rounded-lg border bg-card flex flex-col ">
                <Table>
                    <TableHeader>
                        <TableHead className="text-xs font-medium text-muted-foreground h-10 whitespace-nowrap">
                            Date
                        </TableHead>
                        <TableHead className="text-xs font-medium text-muted-foreground h-10 whitespace-nowrap">
                            Name
                        </TableHead>
                        <TableHead className="text-xs font-medium text-muted-foreground h-10 whitespace-nowrap">
                            Classroom
                        </TableHead>
                        <TableHead className="text-xs font-medium text-muted-foreground h-10 whitespace-nowrap">
                            Decision
                        </TableHead>
                    </TableHeader>

                    <TableBody>
                        {
                            students.map((student, key) => (
                                <TableRow key={key} className="border-b last:border-0 hover:bg-muted/30">
                                    <TableCell className="py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2 min-w-40">
                                            <Avatar className="size-6 shrink-0">
                                                <AvatarImage src={student.avatar || ""} />
                                                <AvatarFallback className="text-xs">{student.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span className="text-sm font-medium truncate">{student.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-3 whitespace-nowrap">
                                        {student.date}
                                    </TableCell>
                                    <TableCell className="py-3 whitespace-nowrap">
                                        {student.classroom}
                                    </TableCell>
                                    <TableCell className="py-3 whitespace-nowrap flex gap-2">
                                        <Button disabled={isAction} onClick={() => reject(student.id)} variant={"destructive"}><X /> </Button>
                                        <Button disabled={isAction} onClick={() => approve(student.id)} variant={"secondary"}><Check /> </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )

}

export default StudentsList