"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { ArrowLeft, Save } from "lucide-react";

import { axiosInstance } from '@/lib/axios'

import type { Classe } from "@/types/classe";
import Students from "../../../../app/teacher/class/[idCourse]/students/page";

export default function CreateClasseForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        slogan: "",
        icon: "",
    });

    const emojiSuggestions = [
        "📚",
        "📐",
        "🎨",
        "💻",
        "🔬",
        "🌍",
        "🎵",
        "⚽",
        "🎭",
        "📖",
    ];

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();
    }

    if(!formData.name || !formData.description)
        return alert("Fill all the inputs")

    try{
         try {
            const {data}=await axiosInstance.post('/teacher/(root)/classroom/create',{
            name: formData.name,
            decription: formData.description,
            slogan: formData.slogan || undefined,
            image: formData.image || undefined,
            suspendue:false,
            Students: false,
        }) catch (e) {
            console.error(e)
            alert("Error during the creation of the classe")
        }
    }

        const newClasse: Classe = {
        id: Date.now().toString(),
        name: formData.name,
        viewMode: "grid" ,
        description: formData.description,
        slogan:
            formData.slogan || undefined,
        icon: formData.icon || undefined,
        };

        const savedClasses =
        localStorage.getItem("classes");

        const classes: Classe[] =
        savedClasses
            ? JSON.parse(savedClasses)
            : [];

        classes.push(newClasse);

        router.push("/teacher/classrooms");
    };

    const handleChange = (
        e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
};

return (
        <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
            <button
                onClick={() =>
                router.push(
                    "/teacher/classrooms"
                )
                }
                className="
                p-2
                rounded-xl
                hover:bg-white/10
                transition-all
                "
            >
                <ArrowLeft className="w-6 h-6" />
            </button>

            <h1 className="text-3xl font-bold">
                Create a class
            </h1>
            </div>
        </header>

        {/* Form */}
        <main className="max-w-4xl mx-auto px-6 py-10">
            <form
            onSubmit={handleSubmit}
            className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-xl
            "
            >
            {/* name */}
            <div className="mb-6">
                <label className="block mb-2 text-zinc-300">
                class name
                </label>

                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-black/40
                    border border-white/10
                "
                />
            </div>

            {/* Description */}
            <div className="mb-6">
                <label className="block mb-2 text-zinc-300">
                Description
                </label>

                <textarea
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-black/40
                    border border-white/10
                    resize-none
                "
                />
            </div>

            {/* Slogan */}
            <div className="mb-6">
                <label className="block mb-2 text-zinc-300">
                Slogan
                </label>

                <input
                type="text"
                name="slogan"
                value={formData.slogan}
                onChange={handleChange}
                className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-black/40
                    border border-white/10
                "
                />
            </div>

            {/* Emoji */}
            <div className="mb-8">
                <label className="block mb-2 text-zinc-300">
                Icône
                </label>

                <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                maxLength={2}
                className="
                    w-full
                    px-4 py-3
                    rounded-xl
                    bg-black/40
                    border border-white/10
                "
                />

                <div className="flex flex-wrap gap-3 mt-4">
                {emojiSuggestions.map(
                    (emoji) => (
                    <button
                        key={emoji}
                        type="button"
                        onClick={() =>
                        setFormData({
                            ...formData,
                            icon: emoji,
                        })
                        }
                        className="
                        w-14 h-14
                        text-2xl
                        rounded-xl
                        bg-white/5
                        border border-white/10
                        "
                    >
                        {emoji}
                    </button>
                    )
                )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 border-t border-white/10 pt-6">
                <button
                type="button"
                onClick={() =>
                    router.push(
                    "/teacher/classrooms"
                    )
                }
                className="
                    px-6 py-3
                    rounded-xl
                    border border-white/10
                "
                >
                Annuler
                </button>

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
                <Save className="w-5 h-5" />
                Created 
                </button>
            </div>
            </form>
        </main>
        </div>
    );
}