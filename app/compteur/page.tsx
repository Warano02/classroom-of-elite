import Countdown from "@/components/Countdown"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Compteur",
    description: "Compte a reboure."
}

function Compteur() {
    return (
        <div>
            <Countdown/>
        </div>
    )
}

export default Compteur