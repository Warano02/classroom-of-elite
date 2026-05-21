'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../ui/input'
import { axiosInstance } from '@/lib/axios'

function LoginForm() {
    const [formData, setFormData] = useState({
        password: "",
        identifier: "",
    })

    const handleSubmit = async () => {
        if (!formData.identifier || !formData.password)
            return alert("Please fill out all fields.")

        try {
            const { data } = await axiosInstance.post('/auth/login', formData)
            window.location.href = `${window.location.origin}/${data.user.role}`
        } catch (e) {
            console.error(e)
            alert("Invalid username or password.")
        }
    }

    return (
        <form
            onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
            className="bg-card w-150 border border-border rounded-3xl p-12 backdrop-blur-xl"
        >
            <div className="flex justify-center mb-8">
                <h1 className="text-3xl font-bold text-foreground">Sign In</h1>
            </div>

            {/* Identifier */}
            <div className="mb-6">
                <label className="block mb-2 text-muted-foreground">
                    Identifier
                </label>
                <Input
                    type="text"
                    value={formData.identifier}
                    onChange={(e) => setFormData(p => ({ ...p, identifier: e.target.value }))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground"
                    placeholder='Enter your identifier'
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-6">
                <label className="block mb-2 text-muted-foreground">
                    Password
                </label>
                <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(p => ({ ...p, password: e.target.value }))}
                    className="w-full h-15 px-4 py-3 rounded-xl bg-input border border-border text-foreground"
                    required
                />
            </div>

            {/* mot de passe oublié */}
            <div className="flex justify-end mb-6">
              <Link href="/auth/forgot-password" className='text-sm text-pink-400 hover:text-pink-300 transition-colors'>
                  Forgot password
              </Link>
            </div>

            {/* Submit */}
            <div className="flex justify-center border-t border-border pt-6">
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                >
                    Sign in
                </button>
            </div>
        </form>
    )
}

export default LoginForm