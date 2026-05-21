'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { axiosInstance } from '@/lib/axios'

export default function ResetPasswordPage() {
    const searchParams = useSearchParams()
    const identifier = searchParams.get('identifier') ?? ""

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })
    const [done, setDone] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.password || !formData.confirmPassword)
            return alert("Please fill in all fields.")

        if (formData.password !== formData.confirmPassword)
            return alert("Passwords do not match.")

        if (formData.password.length < 6)
            return alert("Password must be at least 6 characters.")

        setLoading(true)
        try {
            await axiosInstance.post('/auth/reset-password', {
                identifier,
                password: formData.password,
            })
            setDone(true)
        } catch (e) {
            console.error(e)
            alert("An error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="bg-card w-150 border border-border rounded-3xl p-12 backdrop-blur-xl">

                <Link
                    href="/auth/forgot-password"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-foreground">Reset Password</h1>
                    {identifier && (
                        <p className="text-muted-foreground text-sm">
                            Account: <span className="text-foreground font-medium">{identifier}</span>
                        </p>
                    )}
                </div>

                {done ? (
                    <div className="text-center space-y-6">
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                            <p className="text-emerald-400 text-sm">
                                Your password has been reset successfully.
                            </p>
                        </div>
                        <Link
                            href="/auth"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors text-sm"
                        >
                            Sign in
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block mb-2 text-muted-foreground">New password</label>
                            <Input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))}
                                placeholder="New password"
                                className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-muted-foreground">Confirm password</label>
                            <Input
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData(p => ({ ...p, confirmPassword: e.target.value }))}
                                placeholder="Confirm new password"
                                className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground"
                                required
                            />
                        </div>

                        <div className="flex justify-center border-t border-border pt-6">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Saving..." : "Reset password"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}