
"use client"

import { Button } from "@/components/ui/button"
import { Loader2, Send } from "lucide-react"
import { useState } from "react"

function UploadRessource() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {

    }
    return (
        <div className="flex flex-col h-full">
            <div className="border-b px-6 py-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-base font-semibold mb-4">New Resource</h1>
                </div>
            </div>


            <div className="border-t px-6 py-3">
                <div className="max-w-3xl mx-auto flex items-center justify-between">
                    <Button size="sm" onClick={handleSubmit} disabled={loading} className="gap-1.5">
                        {loading ? <Loader2 className="size-3.5 animate-spin" /> : <Send className="size-3.5" />}
                        {loading ? "Publishing..." : "Publish Course"}
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default UploadRessource