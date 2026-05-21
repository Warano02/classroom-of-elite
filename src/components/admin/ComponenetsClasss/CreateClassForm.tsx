"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { axiosInstance } from "@/lib/axios";

export default function CreateClasseForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        slogan: "",
        image: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (e.target instanceof HTMLInputElement && e.target.type === "file") {
            setFormData({ ...formData, image: e.target.files?.[0] ?? null });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.description) {
            return alert("Please fill in all required fields.");
        }

        try {
            const body = new FormData();
            body.append("name", formData.name);
            body.append("description", formData.description);
            if (formData.slogan) body.append("slogan", formData.slogan);
            if (formData.image) body.append("image", formData.image);
            body.append("suspendue", "false");
            body.append("students", "0");

            await axiosInstance.post("/teacher/classroom/create", body, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            router.push("/teacher/classrooms");
        } catch (e) {
            console.error(e);
            alert("Erreur lors de la création de la classe.");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">

            <header className="border-b border-border bg-card/80 backdrop-blur-xl shadow-lg shadow-slate-950/20">
                <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                        <button
                            onClick={() => router.push("/teacher/classrooms")}
                            className="mt-1 inline-flex items-center justify-center rounded-2xl border border-border bg-card/10 p-3 text-foreground transition hover:bg-card/20"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>

                        <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-pink-400">
                                Classroom creation
                            </p>
                            <h1 className="mt-2 text-3xl font-bold text-foreground">
                                Create Class
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                                Add the classroom details, optional slogan, and an image so students can identify it easily.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <div className="rounded-2xl bg-muted px-4 py-3 text-sm text-muted-foreground border border-border">
                            Ready to launch your next class?
                        </div>
                    </div>
                </div>
            </header>


            <main className="max-w-4xl mx-auto px-6 py-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-card border border-border rounded-3xl p-8 backdrop-blur-xl"
                >
                    {/* Nom */}
                    <div className="mb-6">
                        <label className="block mb-2 text-muted-foreground">
                            Class name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-input border border-border"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label className="block mb-2 text-muted-foreground">
                            Description
                        </label>
                        <textarea
                            name="description"
                            required
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-input border border-border resize-none"
                        />
                    </div>
                    {/* Slogan */}
                    <div className="mb-6">
                        <label className="block mb-2 text-muted-foreground">
                            Slogan
                        </label>
                        <input
                            type="text"
                            name="slogan"
                            value={formData.slogan}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-input border border-border"
                        />
                    </div>

                    {/* Image */}
                    <div className="mb-8">
                        <label className="block mb-2 text-muted-foreground">
                            Class image
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-input border border-border file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-muted/50 file:text-foreground file:text-sm hover:file:bg-muted/70 cursor-pointer"
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-4 border-t border-border pt-6">
                        <button
                            type="button"
                            onClick={() => router.push("/teacher/classrooms")}
                            className="px-6 py-3 rounded-xl border border-border hover:bg-card/10 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                        >
                            <Save className="w-5 h-5" />
                            Create
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}