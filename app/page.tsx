import Countdown from "../src/components/Countdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Classroom of Elite
      </h1>

      <p className="text-slate-400 mt-4 text-center max-w-xl">
        Bienvenue sur la plateforme de gestion et d’apprentissage.
      </p>

      <div className="mt-10">
        <Countdown />
      </div>

      <div className="mt-10 flex gap-4">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition">
          Commencer
        </button>

        <button className="px-6 py-3 border border-slate-600 hover:border-white rounded-xl transition">
          En savoir plus
        </button>
      </div>
    </main>
  );
}
