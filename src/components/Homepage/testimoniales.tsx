"use client"
export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Marie Laurent",
      role: "Mathematics Professor, Paris-Saclay University",
      content: "This platform has transformed how I teach. I can now reach all my students, even those who cannot attend in-person classes.",
      avatar: "ML"
    },
    {
      name: "Prof. Jean Dupont",
      role: "Literature Professor, Sorbonne University",
      content: "The interface is intuitive and my students love the interactive features. Auto-graded quizzes save me valuable time.",
      avatar: "JD"
    },
    {
      name: "Dr. Sophie Martin",
      role: "Science Professor, University of Lyon",
      content: "Student tracking is excellent. I can quickly identify who needs help and adapt my teaching accordingly.",
      avatar: "SM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">
            Trusted by <span className="text-pink-500">educators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover what our instructors think about the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
