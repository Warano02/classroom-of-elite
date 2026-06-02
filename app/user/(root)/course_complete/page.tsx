import { BookmarksHeader } from "@/components/user/dashboard/header"
import { SystemCollection } from "@/components/user/dashboard/system-collection"

export const metada = {
    title: "Course Completed - IW"
}
function CourseComplet() {
    return (
        <>
            <BookmarksHeader title="Course Completed" />
            <SystemCollection sys="complete" />
        </>
    )
}

export default CourseComplet