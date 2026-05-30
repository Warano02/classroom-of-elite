"use client"

export default function Stats() {
  const stats = [
    { number: "500+", label: "Instructors" },
    { number: "15K+", label: "Active students" },
    { number: "1200+", label: "Courses created" },
    { number: "98%", label: "Satisfaction" }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-pink-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-2 text-white">{stat.number}</div>
              <div className="text-lg text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}