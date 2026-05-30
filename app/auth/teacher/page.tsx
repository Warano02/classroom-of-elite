"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { axiosInstance } from "@/lib/axios";
import { Eye, EyeOff, Loader2, BookOpen } from "lucide-react";

export default function LoginTeacher() {
  const router = useRouter();

  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Route spécifique enseignant
      const { data } = await axiosInstance.post("/api/auth/login_a", {
        email,
        password,
      });

      if (data.error) {
        setError(data.msg);
        return;
      }

      // Connexion réussie → dashboard admin/teacher
      router.push("/admin");

    } catch (err: unknown) {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as { response?: { data?: { msg?: string } } };
        setError(axiosErr.response?.data?.msg || "Erreur de connexion.");
      } else {
        setError("Impossible de joindre le serveur.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* ── Panneau gauche ── */}
      <div className="hidden lg:flex flex-col justify-between bg-zinc-900 p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/10" />

        <div className="relative z-10">
          <div className="text-2xl font-bold text-white tracking-tight">
            Classroom <span className="text-emerald-400">of Elite</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
            <BookOpen className="size-3" />
            Espace Enseignant
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-4xl font-bold text-white/10 mb-4">📖</div>
          <blockquote className="text-lg italic text-zinc-300 leading-relaxed mb-2">
            "Enseigner, c'est apprendre deux fois."
          </blockquote>
          <cite className="text-xs text-zinc-500 not-italic">— Joseph Joubert</cite>
        </div>

        <div className="relative z-10 text-xs text-zinc-600 font-mono">
          Réservé aux enseignants · Classroom of Elite
        </div>
      </div>

      {/* ── Panneau droit ── */}
      <div className="flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md space-y-6">

          <div className="lg:hidden text-xl font-bold">
            Classroom <span className="text-emerald-500">of Elite</span>
          </div>

          {/* Switcher */}
          <div className="flex gap-1 p-1 bg-muted rounded-lg">
            <Link
              href="/auth"
              className="flex-1 text-center py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              🎓 Étudiant
            </Link>
            <div className="flex-1 text-center py-2 rounded-md text-sm font-medium bg-background shadow-sm">
              📖 Enseignant
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">Connexion</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Gérez vos cours, étudiants et sessions virtuelles.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="professeur@example.com"
                required
                className="w-full px-3 py-2.5 text-sm rounded-md border bg-background outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Mot de passe
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                >
                  Oublié ?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 pr-10 text-sm rounded-md border bg-background outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPwd
                    ? <EyeOff className="size-4" />
                    : <Eye className="size-4" />
                  }
                </button>
              </div>
            </div>

            {error && (
              <div className="px-3 py-2.5 rounded-md bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                ⚠ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="size-4 animate-spin" />}
              {loading ? "Connexion..." : "Se connecter — Enseignant"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}