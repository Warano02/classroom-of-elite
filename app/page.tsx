import Link from "next/link";

export default function Home() {
  const cards = [
    {
      icon: "👤",
      title: "Student Tracking",
      description:
        "Monitor the progress and performance of every student in real time.",
    },
    {
      icon: "💬",
      title: "Integrated Messaging",
      description:
        "Communicate easily with your students through a modern messaging system.",
    },
    {
      icon: "👨‍🏫",
      title: "Smart Management",
      description:
        "Organize your courses, manage students and publish educational content.",
    },
    {
      icon: "📚",
      title: "Immersive Experience",
      description:
        "A modern interface inspired by premium learning platforms.",
    },
    {
      icon: "⚡",
      title: "Fast Communication",
      description:
        "Stay connected with students through instant communication tools.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050b1f] bg-gradient-to-b from-[#10204d] to-[#050b1f] text-white px-6 md:px-10 py-6 overflow-x-hidden">

      <header className="flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10 rounded-3xl p-5 backdrop-blur-md bg-white/5">

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-b from-pink-400 to-violet-600 shadow-lg shadow-pink-500/40">
            📖
          </div>

          <div>
            <h2 className="font-bold text-2xl">
              Classroom
              <br />
              <span className="text-pink-500">
                of the Elite
              </span>
            </h2>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5">

          <p className="cursor-pointer hover:text-pink-500 transition">
            Features
          </p>

          <p className="cursor-pointer hover:text-pink-500 transition">
            How It Works
          </p>

          <p className="cursor-pointer hover:text-pink-500 transition">
            Testimonials
          </p>

          <p className="cursor-pointer hover:text-pink-500 transition">
            Contact
          </p>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl bg-orange-600 hover:scale-105 transition"
          >
            Join a Course
          </Link>

          <Link
            href="/auth/login"
            className="text-orange-400 hover:text-violet-400 transition"
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="px-6 py-3 rounded-xl bg-pink-600 hover:scale-105 transition"
          >
            Sign Up
          </Link>

        </nav>

      </header>

      <section className="mt-16">

        <h1 className="font-bold leading-none">

          <span className="block text-6xl md:text-8xl text-white">
            Classroom
          </span>

          <span className="block text-6xl md:text-8xl text-pink-500">
            of the
          </span>

          <span className="block text-6xl md:text-8xl text-pink-500">
            Elite
          </span>

        </h1>

        <p className="text-pink-400 text-xl md:text-3xl italic mt-8">
          Academic Excellence at Your Fingertips
        </p>

        <p className="text-gray-300 text-lg md:text-2xl mt-8 max-w-5xl leading-relaxed">
          The platform dedicated to university teachers and educators
          to create, manage and deliver online courses with a modern,
          fluid and immersive experience.
        </p>

        <div className="flex flex-col gap-5 mt-10">

          <Link
            href="/courses/create"
            className="w-full py-6 rounded-2xl bg-pink-600 text-2xl font-semibold hover:-translate-y-1 transition text-center"
          >
            Create Course
          </Link>

          <Link
            href="/auth/login"
            className="w-full py-6 rounded-2xl border border-white/20 bg-white/5 text-2xl hover:bg-white/10 transition text-center"
          >
            Join Course
          </Link>

        </div>

      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-2 transition"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-b from-pink-400 to-violet-600 mb-6">
              {card.icon}
            </div>

            <h3 className="text-3xl font-bold mb-4">
              {card.title}
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              {card.description}
            </p>

          </div>
        ))}

      </section>

      <section className="mt-20 rounded-3xl p-10 bg-gradient-to-r from-green-700 to-green-600 text-center">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-5xl font-bold text-pink-300">
              15K+
            </h2>
            <p>Students</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-pink-300">
              500+
            </h2>
            <p>Professors</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-pink-300">
              1200+
            </h2>
            <p>Courses</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-pink-300">
              98%
            </h2>
            <p>Satisfaction</p>
          </div>

        </div>

      </section>

      <section className="mt-20 rounded-3xl p-8 bg-white/5 border border-white/10">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-full bg-gradient-to-b from-pink-400 to-violet-600 flex items-center justify-center font-bold">
            MN
          </div>

          <div>
            <h4 className="font-bold text-xl">
              Prof. Marie NGONO
            </h4>

            <p className="text-gray-400">
              University of Ngaoundéré
            </p>
          </div>

        </div>

        <p className="italic text-xl text-gray-200">
          This platform has completely transformed
          the way I teach and interact with my students.
        </p>

      </section>

      <section className="mt-20">

        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
          alt="Teacher"
          className="rounded-3xl w-full object-cover"
        />

      </section>

      <section className="mt-20 space-y-8">

        <div className="rounded-3xl p-8 border border-pink-500/20 bg-white/5">

          <div className="text-7xl text-pink-500/40">
            01
          </div>

          <h3 className="text-4xl font-bold mt-4">
            Create Your Account
          </h3>

          <p className="text-gray-300 mt-4">
            Sign up for free in just a few clicks using your university email.
          </p>

        </div>

        <div className="rounded-3xl p-8 border border-pink-500/20 bg-white/5">

          <div className="text-7xl text-pink-500/40">
            02
          </div>

          <h3 className="text-4xl font-bold mt-4">
            Set Up Your Courses
          </h3>

          <p className="text-gray-300 mt-4">
            Create courses, upload videos, modules and educational resources.
          </p>

        </div>

      </section>

      <footer className="mt-24 grid md:grid-cols-3 gap-10 pb-20">

        <div>

          <h3 className="text-2xl font-bold mb-4">
            Navigation
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Home</p>
            <p>Documentation</p>
            <p>Support</p>
            <p>Legal Notice</p>
          </div>

        </div>

        <div>

          <h3 className="text-2xl font-bold mb-4">
            Support
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Help Center</p>
            <p>Contact</p>
            <p>FAQ</p>
            <p>Tutorials</p>
          </div>

        </div>

        <div>

          <h3 className="text-2xl font-bold mb-4">
            Legal
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>Legal Notice</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

        </div>

      </footer>

    </main>
  );
}
