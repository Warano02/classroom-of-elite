import { Metadata } from "next"
import { ResourceList } from "./ressources"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Classroom Ressources for course - IW"
}

function Ressources() {
  return (
    <div className="p-4">
      <Suspense>
        <ResourceList />
      </Suspense>
    </div>
  )
}

export default Ressources