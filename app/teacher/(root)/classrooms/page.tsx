import ClassesList from "@/components/admin/ComponenetsClasss/ClassesListe";
import { BookmarksHeader } from "@/components/user/dashboard/header";

export const metadata={
    title:"List of classrooms - IW"
}
function ClassRoom() {
  return (
    <>
        <BookmarksHeader title="Classrooms" />
        <ClassesList />
    </>
  )
}

export default ClassRoom


