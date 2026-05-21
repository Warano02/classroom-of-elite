'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, RefreshCw } from 'lucide-react'
import { axiosInstance } from '@/lib/axios'

interface Props {
    identifier: string
    onResend: () => void
}

export default function EmailSentPage() {
    const [resending, setResending] = useState(false)
    const [resent, setResent] = useState(false)

    // Get identifier from URL
    const identifier = typeof window !== 'undefined'
        ? new URLSearchParams(window.location.search).get('identifier') ?? ""
        : ""

    const handleResend = async () => {
        if (resending) return
        setResending(true)
        try {
            await axiosInstance.post('/auth/forgot-password', { identifier })
            setResent(true)
            setTimeout(() => setResent(false), 5000)
        } catch (e) {
            console.error(e)
            alert("Failed to resend. Please try again.")
        } finally {
            setResending(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="bg-card w-150 border border-border rounded-3xl p-12 backdrop-blur-xl">

                {/* Back */}
                <Link
                    href="/auth/forgot-password"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-5 rounded-2xl bg-pink-500/10 border border-pink-500/20">
                        <Mail className="w-10 h-10 text-pink-400" />
                    </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-foreground">Check your inbox</h1>
                    <p className="text-muted-foreground text-sm">
                        We sent a reset link to{" "}
                        <span className="text-foreground font-medium">{identifier}</span>.
                        It expires in 15 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-3 mb-8">
                    {[
                        "Open your email inbox",
                        "Click the reset link we sent you",
                        "Choose a new password",
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                            <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold flex items-center justify-center shrink-0">
                                {i + 1}
                            </span>
                            <p className="text-sm text-muted-foreground">{step}</p>
                        </div>
                    ))}
                </div>

                {/* Resend */}
                <div className="text-center border-t border-border pt-6 space-y-4">
                    {resent && (
                        <p className="text-emerald-400 text-sm">
                            Email resent successfully!
                        </p>
                    )}
                    <p className="text-muted-foreground text-sm">
                        Didn't receive an email?
                    </p>
                    <button
                        onClick={handleResend}
                        disabled={resending}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm text-muted-foreground hover:bg-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <RefreshCw className={`w-4 h-4 ${resending ? 'animate-spin' : ''}`} />
                        {resending ? "Resending..." : "Resend email"}
                    </button>

                    {/* Fallback */}
                    <p className="text-muted-foreground text-xs">
                        Still nothing?{" "}
                        <Link
                            href={`/auth/reset-password?identifier=${encodeURIComponent(identifier)}&fallback=true`}
                            className="text-pink-400 hover:text-pink-300 transition-colors"
                        >
                            Reset directly with your matricule
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}