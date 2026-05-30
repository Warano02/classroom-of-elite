import { Metadata } from "next"
import LivesPage from "./pageClient"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Live program  - IW"
}

function LiveProgram() {
  return (
    <Suspense>
      <LivesPage />
    </Suspense>
  )
}

export default LiveProgram