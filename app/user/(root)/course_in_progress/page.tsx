import { BookmarksHeader } from "@/components/user/dashboard/header"
import { SystemCollection } from "@/components/user/dashboard/system-collection"

export const metadata = {
    title: "Course In Progress - IW"
}
function CourseInProgress() {
    return (
        <>
            <BookmarksHeader title="Favorites" />
            <SystemCollection sys="ip" />
        </>
    )
}

export default CourseInProgress