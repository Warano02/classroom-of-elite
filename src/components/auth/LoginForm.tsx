<<<<<<< HEAD
'use client'
import { useState } from 'react'
import { Input } from '../ui/input'
import { axiosInstance } from '@/lib/axios'

function LoginForm() {
    const [ayii,setAyii]=useState({
        password:"",
        identifier:''
    })
    const handleSubmit=async () => {
        if(!ayii.identifier||!ayii.password)return alert("Maff remplie tout ")
            try {
                const {data}=await axiosInstance.post('/auth/login',ayii)
                window.location.href=window.location.origin+"/"+data.user.role
            } catch (e) {
                alert("Error occured while login ",)
                console.error(e)
                alert("invalide data")
            }
    }
    console.log( process.env.NEXT_API_BASE_URL)
  return (
      <form
            onSubmit={(e)=>{e.preventDefault();handleSubmit()}}
            className="
                bg-white/5
                w-150
                border border-white/10
                rounded-3xl
                p-12
                backdrop-blur-xl
            "
            > 
              <div className="max-w-2xl mx-auto px-6 py-6 flex  justify-center gap-4">
                <h1 className="text-3xl font-bold ">
                  Login Form
                </h1>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-zinc-300">
                  Identifier
                </label>

                <Input 
                  type="text"
                  onChange={(e)=>setAyii(p=>({...p,identifier:e.target.value}))}
                  className=" w-full h-15 px-4 py-3 rounded-xl   bg-black/40 border border-white/10" required/>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-zinc-300">
                  Password
                </label>

                <Input 
                  type="password"
                  onChange={(e)=>setAyii(p=>({...p,password:e.target.value}))}

                  className="
                    w-full
                    h-15
                    px-4 py-3
                    rounded-xl
                    bg-black/40
                    border border-white/10
                " required/>
              </div>

              <div className="flex justify-center gap-4 border-t border-white/10 pt-6">
                <button
                type="submit"
                className="
                    inline-flex items-center gap-2
                    px-6 py-3 
                    rounded-xl
                    bg-pink-500
                    hover:bg-pink-600
                "
                >
                  Submit
                </button>
              </div>
            </form>
  )
}

export default LoginForm
=======
"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";
import GoogleButton from "./user/GoogleButton";
import LinkedinButton from "./user/LinkedinButton";

function LoginForm() {
    const { login } = useAuthStore();
    const router = useRouter();
    const [data, setData] = useState({ email: "", password: "",stayConnected:false });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        if (!data.email || !data.password) return setError("All fields are required.");
        setLoading(true);
        const res = await login(data);
        setLoading(false);
        if (!res.success) return setError(res.msg || 'Login failed');
        if (res?.level) return (window.location.href = `/onboarding/set-${res.level}`);
        router.push("/user");
    };

    return (
        <div className="relative flex w-full flex-col justify-center px-8 py-12 lg:w-120 lg:min-w-105 lg:px-14">
            <div className="mb-12 flex items-center gap-3">
                <div className="h-9 w-9 animate-pulse rounded-lg bg-white/20" />
                <span className="text-lg font-bold tracking-tight text-white">Classroom of Elite</span>
            </div>

            <h2 className="mb-1 text-3xl font-bold tracking-tight text-white">Welcome back </h2>
            <p className="mb-9 text-sm leading-relaxed text-white/40">
                Sign in to pick up right where you left off.
            </p>

            <div className="mb-7 flex gap-3">
                <GoogleButton />
                <LinkedinButton />
            </div>

            <div className="mb-7 flex items-center gap-3">
                <Separator className="flex-1 bg-white/8" />
                <span className="text-xs uppercase tracking-widest text-white/25">or</span>
                <Separator className="flex-1 bg-white/8" />
            </div>

            {error && (
                <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                    <p className="text-sm text-red-400">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label className="text-xs font-medium uppercase tracking-wider text-white/50">Email address</Label>
                    <Input type="email" placeholder="felix@warano.dev" value={data.email} onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))} className="border-white/10 bg-white/5 text-white placeholder:text-white/20 focus-visible:border-white/35 focus-visible:ring-0 transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                    <Label className="text-xs font-medium uppercase tracking-wider text-white/50">Mot de passe</Label>
                    <div className="relative">
                        <Input type={showPassword ? "text" : "password"} placeholder="••••••••••" value={data.password} onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))} className="border-white/10 bg-white/5 pr-11 text-white placeholder:text-white/20 focus-visible:border-white/35 focus-visible:ring-0 transition-all" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/30 transition-colors hover:text-white/60">
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <Checkbox id="stay" checked={data.stayConnected} onCheckedChange={(value) => setData((prev) => ({ ...prev, stayConnected: !!value }))} className="cursor-pointer border-white/20 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-neutral-950"/>
                        <Label htmlFor="stay" className="cursor-pointer text-sm text-white/45">Stay connected</Label>
                    </div>
                    <a href="/auth/forgot-password" className="cursor-pointer text-sm text-white/40 transition-colors hover:text-white">
                        Forgot password?
                    </a>
                </div>

                <Button type="submit" disabled={loading} className="mt-2 w-full cursor-pointer py-6 bg-white text-sm font-bold text-neutral-950 hover:bg-neutral-200 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                    {loading ? "Signing in..." : "Sign in"}
                </Button>
            </form>

            <p className="mt-6 text-center text-sm text-white/35">
                Don't have an account?{" "}
                <a href="/auth/register" className="cursor-pointer font-semibold text-white/75 transition-colors hover:text-white">
                    Create an account
                </a>
            </p>
        </div>
    )
}

export default LoginForm
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
