import { BookmarksHeader } from "@/components/user/dashboard/header"
import { SystemCollection } from "@/components/user/dashboard/system-collection"

export const metadata = {
    title: 'Watch Later - IW'
}
function WatchLater() {
    return (
        <>
            <BookmarksHeader title="Watch Later" />
            <SystemCollection sys="wl" />
        </>
    )
}

export default WatchLater