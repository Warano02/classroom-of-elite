import { Metadata } from "next"
import { Suspense } from "react"
import NotificationsPage from "./client"

export const metadata: Metadata = {
    title: "Notifications",
    description: "View your notifications"
}

function Notifications() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            <NotificationsPage/>
        </Suspense>
    )
}

export default Notifications