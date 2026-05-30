import { Suspense } from "react"
import Skeleton from "./_components/Skeleton"
import StudentsList from "./_components/students-list"

export const metadata = {
  title: "My Students - Teacher IW"
}

function Students() {
  return (
    <Suspense fallback={<Skeleton />}>
      <StudentsList />
    </Suspense>
  )
}

export default Students