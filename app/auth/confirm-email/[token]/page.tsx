"use client"

import axiosInstance from "@/lib/axios"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

function ConfirmEmail() {
  const { token } = useParams()
  const router = useRouter()
  const verify = async () => {
    try {
      await axiosInstance.get("/auth/confirm-email?token=" + token)
      router.push("/auth/login")
    } catch {
      toast.error("Invalid or expired token")
      router.push("/auth/login")
    }
  }

  useEffect(() => {
    verify()
  }, [])
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <span className="size-20 rounded-full border-2 border-primary  animation-spin" />
    </div>
  )
}

export default ConfirmEmail