"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { axiosInstance } from "@/lib/axios";
import { Eye, EyeOff, Loader2, GraduationCap } from "lucide-react";

export default function LoginStudent() {
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
      const { data } = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });

      if (data.error) {
        setError(data.msg);
        return;
      }

      // Si onboarding non terminé
      if (data.user?.level !== undefined && data.user.level < 3) {
        router.push("/auth/signup/fallback");
        return;
      }

      // Connexion réussie → dashboard étudiant
      router.push("/student");

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
        {/* Cercles décoratifs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-500/10" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-500/10" />

        {/* Logo */}
        <div className="relative z-10">
          <div className="text-2xl font-bold text-white tracking-tight">
            Classroom <span className="text-violet-400">of Elite</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400">
            <GraduationCap className="size-3" />
            Espace Étudiant
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-3 my-8">
          {[
            { value: "1 200+", label: "Étudiants" },
            { value: "48", label: "Cours actifs" },
            { value: "96%", label: "Satisfaction" },
          ].map((s) => (
            <div
              key={s.label}
              className="border border-white/10 rounded-lg p-3 text-center"
            >
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="relative z-10">
          <blockquote className="text-lg italic text-zinc-300 leading-relaxed mb-2">
            "L'éducation est l'arme la plus puissante pour changer le monde."
          </blockquote>
          <cite className="text-xs text-zinc-500 not-italic">— Nelson Mandela</cite>
        </div>
      </div>

      {/* ── Panneau droit — Formulaire ── */}
      <div className="flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md space-y-6">

          {/* Logo mobile */}
          <div className="lg:hidden text-xl font-bold">
            Classroom <span className="text-violet-500">of Elite</span>
          </div>

          {/* Switcher étudiant / enseignant */}
          <div className="flex gap-1 p-1 bg-muted rounded-lg">
            <div className="flex-1 text-center py-2 rounded-md text-sm font-medium bg-background shadow-sm">
              🎓 Étudiant
            </div>
            <Link
              href="/auth/teacher"
              className="flex-1 text-center py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              📖 Enseignant
            </Link>
          </div>

          {/* Titre */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Connexion</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Accédez à vos cours et suivez votre progression.
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@example.com"
                required
                className="w-full px-3 py-2.5 text-sm rounded-md border bg-background outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>

            {/* Mot de passe */}
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

            {/* Erreur */}
            {error && (
              <div className="px-3 py-2.5 rounded-md bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                ⚠ {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-all flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="size-4 animate-spin" />}
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          {/* Lien inscription */}
          <p className="text-sm text-center text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              S'inscrire gratuitement →
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}