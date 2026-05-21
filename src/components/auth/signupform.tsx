    'use client'
    import { useState } from 'react'
    import Link from 'next/link'
    import { Input } from '../ui/input'
    import { axiosInstance } from '@/lib/axios'

    function RegisterForm() {
        const [formData,setFormData]=useState({
            name:"",
            email:"",
            matricule:"",
            classId:"",
            password:"",
        })

        const handleSubmit=async () => {
            if(!formData.name || !formData.email || !formData.matricule || !formData.password )return alert("fill all")
                try {
                    const {data}=await axiosInstance.post('/auth/signup', formData)
                    console.log(data)
                    alert("Your account has been created !")
                    // Route.push('/login') redirection
                } catch (e) {
                    alert("Error occured while login ",)
                    console.error(e)
                    alert("Error during the signup process")
                }
        }
        // console.log( process.env.NEXT_API_BASE_URL)

    return (
        <form
                onSubmit={(e)=>{e.preventDefault();handleSubmit()}}
                className="
                    bg-card
                    w-150
                    border border-border
                    rounded-3xl
                    p-12
                    backdrop-blur-xl
                "
                > 
                <div className="max-w-2xl mx-auto px-6 py-6 flex justify-center gap-4">
                    <h1 className="text-3xl font-bold text-foreground">
                        SignUp
                    </h1>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-muted-foreground">
                    Name
                    </label>

                    <Input 
                    type="text"
                    onChange={(e)=>setFormData(p=>({...p,name:e.target.value}))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground" required/>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-muted-foreground">
                    Email
                    </label>

                    <Input 
                    type="email"
                    onChange={(e)=>setFormData(p=>({...p,email:e.target.value}))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground" required/>
                </div>
                
                <div className="mb-6">
                    <label className="block mb-2 text-muted-foreground">
                    matricule
                    </label>

                    <Input 
                    type="text"
                    onChange={(e)=>setFormData(p=>({...p,matricule:e.target.value}))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground" required/>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-muted-foreground">
                    classe id
                    </label>

                    <Input 
                    type="text"
                    onChange={(e)=>setFormData(p=>({...p,classId:e.target.value}))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground" required/>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-muted-foreground">
                    Password
                    </label>

                    <Input 
                    type="password"
                    onChange={(e)=>setFormData(p=>({...p,password:e.target.value}))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground" required/>
                </div>

                <div className="flex justify-center gap-4 border-t border-border pt-6">
                    <button
                    type="submit"
                    className="
                        inline-flex items-center gap-2
                        px-6 py-3 
                        rounded-xl
                        bg-pink-500 text-white
                        hover:bg-pink-600
                        transition-colors
                    "
                    >
                    SignUp
                    </button>

                    <div>
                        <Link
                            href="/auth/signup/email-sent"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-3
                                rounded-xl
                                bg-background/70
                                text-muted-foreground
                                hover:bg-background
                                transition-colors
                            "
                            >
                            forgot password ?
                            </Link>
                    </div>
                </div>
                </form>
    )
    }

    export default RegisterForm
