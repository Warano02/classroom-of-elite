'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { axiosInstance } from '@/lib/axios'

export default function ForgotPasswordPage() {
    const [identifier, setIdentifier] = useState("")
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!identifier) return alert("Veuillez entrer votre identifiant.")

        setLoading(true)
        try {
            await axiosInstance.post('/auth/forgot-password', { identifier })
            setSent(true)
        } catch (e) {
            console.error(e)
            // Fallback : si le backend échoue, on redirige vers reset-password
            // avec l'identifier en query param
            window.location.href = `/auth/reset-password?identifier=${encodeURIComponent(identifier)}`
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
            <div className="bg-card w-150 border border-border rounded-3xl p-12 backdrop-blur-xl">

                {/* Retour */}
                <Link
                    href="/auth"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à la connexion
                </Link>

                {/* Titre */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-foreground">Mot de passe oublié</h1>
                    <p className="text-muted-foreground text-sm">
                        Entrez votre identifiant et nous vous enverrons un lien de réinitialisation.
                    </p>
                </div>

                {sent ? (
                    <div className="text-center space-y-6">
                        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                            <p className="text-emerald-400 text-sm">
                                Un lien de réinitialisation a été envoyé pour le compte{" "}
                                <span className="font-semibold text-foreground">{identifier}</span>.
                                Vérifiez votre boîte mail.
                            </p>
                        </div>
                        {/* Fallback : lien manuel vers reset-password */}
                        <p className="text-muted-foreground text-xs">
                            Vous n'avez pas reçu d'email ?{" "}
                            <Link
                                href={`/auth/reset-password?identifier=${encodeURIComponent(identifier)}`}
                                className="text-pink-400 hover:text-pink-300 transition-colors"
                            >
                                Réinitialiser directement
                            </Link>
                        </p>
                        <Link
                            href="/auth"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors text-sm"
                        >
                            Retour à la connexion
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block mb-2 text-muted-foreground">
                                Identifiant
                            </label>
                            <Input
                                type="text"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                placeholder="Votre identifiant"
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
                                {loading ? "Envoi en cours..." : "Envoyer le lien"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}