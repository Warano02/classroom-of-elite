"use client"

import { useParams } from "next/navigation"

function Ongoing() {
    const { id } = useParams()
    return (
        <main className="w-full min-h-screen bg-background text-foreground flex items-center justify-center p-6">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex-1 rounded-3xl bg-card p-6 shadow-sm">
                    {id ? `Ongoing Call with ID: ${id}` : "No ID provided"}
                </div>
                <div className="flex-1 rounded-3xl bg-card p-6 shadow-sm">
                    chat du call
                </div>
            </div>
        </main>
    )
}

export default Ongoing