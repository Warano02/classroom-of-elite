import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Collection"
}
function Page() {
    return (
        <div>
            <h1>Collection</h1>
            <p>Here you can view the courses in a specific collection.</p>
        </div>
    )
}

export default Page