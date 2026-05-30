"use client"
import { ICourse } from '@/components/dashboard/course-card'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useAuthStore } from '@/store/auth.store'
import { EditorContent, useEditor } from '@tiptap/react'
import { BookCheck, Bookmark, Copy, ExternalLink, MoreHorizontal, Pencil, User } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from "next/navigation";
import StarterKit from '@tiptap/starter-kit'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import EditCourse from '@/components/dashboard/edit-course'
import { Skeleton } from '@/components/ui/skeleton'
import axiosInstance from '@/lib/axios'

function RoomContent() {
    const { user } = useAuthStore()
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState<ICourse[]>([])
    const router = useRouter()
    const { roomId } = useParams()
    const [openEditor, setOpenEditor] = useState(false)
    const handleCopyUrl = (id: string) => {
        navigator.clipboard.writeText(`${window.location.origin}/course/${id}`);
        toast.success("Link copied successfully !", { position: "top-right" })
    };

    const handleOpenUrl = (id: string) => router.push(user?.role == "teacher" ? `/admin/courses/${id}` : `/course/${id}`)
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
        immediatelyRender: false,
    })

    const getCourse = async () => {
        try {
            setLoading(true)
            const { data } = await axiosInstance.get(`/cr/${roomId}/courses/` )
            setCourses(data.courses)
            setLoading(false)
        } catch (e) {
            console.log("Error occured while trying to get classroom course ", e)
            toast.error("Error occured while trying to get classroom course ")
        }
    }
    useEffect(() => { getCourse() }, [])

    if (loading) return <section className='p-4 space-y-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                Array.from({ length: 4 }).map((_, id) => (
                    <Skeleton key={id} className='h-25' />
                ))
            }
        </div>
        <div className="flex-1 w-full overflow-auto">
            <div className=" space-y-6">
                <Skeleton className="w-full py-6" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <Skeleton key={index} className='h-52' />
                    ))}
                </div>
            </div>
        </div>
    </section>
    return (
        <section className='p-4 space-y-12'>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border bg-card">
                    <div className={`size-10 rounded-lg  flex items-center justify-center`}>
                        <Bookmark className="size-5" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-sm text-muted-foreground">Course</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border bg-card">
                    <div className={`size-10 rounded-lg  flex items-center justify-center`}>
                        <BookCheck className="size-5" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-sm text-muted-foreground">Pending Assigment</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border bg-card">
                    <div className={`size-10 rounded-lg  flex items-center justify-center`}>
                        <User className="size-5" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">24</p>
                        <p className="text-sm text-muted-foreground">Students</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border bg-card">
                    <div className={`size-10 rounded-lg  flex items-center justify-center`}>
                        <User className="size-5" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold">3</p>
                        <p className="text-sm text-muted-foreground">Incomming online course</p>
                    </div>
                </div>
            </div>

            {
                courses.length ?
                    (
                        courses.map((course, idx) => (
                            <div className="group relative flex flex-col rounded-xl border bg-card overflow-hidden hover:bg-accent/30 transition-colors">
                                <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="secondary" size="icon-xs" className="bg-background/80 backdrop-blur-sm">
                                                <MoreHorizontal className="size-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => handleCopyUrl(course._id)}>
                                                <Copy className="size-4 mr-2" />
                                                Copy URL
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => handleOpenUrl(course._id)}>
                                                <ExternalLink className="size-4 mr-2" />
                                                Open in new tab
                                            </DropdownMenuItem>
                                            {
                                                user?.role == "teacher" && <DropdownMenuItem onClick={() => setOpenEditor(p => !p)}>
                                                    <Pencil className="size-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                            }
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <button className="w-full text-left cursor-pointer" onClick={() => handleOpenUrl(course._id)}>
                                    <div className="h-32 bg-linear-to-br from-muted/50 to-muted flex items-center justify-center">
                                        <div className="size-12 rounded-xl bg-background shadow-sm flex items-center justify-center">
                                            <Image
                                                src={course.favicon}
                                                alt={course.title}
                                                width={32}
                                                height={32}
                                                className={cn("size-8",)}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-medium line-clamp-1">{course.title}</h3>
                                        </div>
                                        <div className="text-sm text-muted-foreground line-clamp-2">
                                            <EditorContent editor={editor} />
                                        </div>
                                        {course.interests.length > 0 && (
                                            <div className="flex flex-wrap gap-1 pt-1">
                                                {course.interests.slice(0, 3).map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={cn(
                                                            "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium",
                                                            "bg-foreground/10 text-foreground")}
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                                {course.interests.length > 3 && (
                                                    <span className="text-[10px] text-muted-foreground py-0.5">
                                                        +{course.interests.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </button>
                                <EditCourse course={course} setActual={() => console.log("editing course...")} openEditor={openEditor} setOpen={() => setOpenEditor(p => !p)} />
                            </div>
                        ))
                    )
                    : (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
                                <svg className="size-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium mb-1">{"No Course found"} </h3>
                            <p className="text-sm text-muted-foreground max-w-sm mb-4">
                                {` Teachers hasn't add course in this classroom for now. Keep waiting...`}
                            </p>

                        </div>
                    )
            }

        </section>
    )
}

export default RoomContent