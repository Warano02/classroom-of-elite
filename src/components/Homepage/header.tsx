interface HeaderProps {
  onNavigate?: (page: 'home' | 'create-course' | 'classroom') => void;
}

export default function Header({ onNavigate }: HeaderProps = {}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/65 backdrop-blur-xl border-b border-border shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => onNavigate?.('home')}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300"
        >
          <div className="w-11 h-11 bg-linear-to-br from-pink-500 via-purple-600 to-violet-500 rounded-3xl flex items-center justify-center shadow-lg shadow-pink-500/25">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-foreground text-lg font-semibold tracking-tight">
            Classroom <span className="text-pink-400">of Elite</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
          <a href="#features" className="transition-colors duration-200 hover:text-foreground">Features</a>
          <a href="#how-it-works" className="transition-colors duration-200 hover:text-foreground">How it works</a>
          <a href="#testimonials" className="transition-colors duration-200 hover:text-foreground">Testimonials</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-foreground">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/auth/login"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-pink-500/30 bg-pink-600/10 px-4 py-2 text-sm font-semibold text-pink-300 transition duration-200 hover:bg-pink-600/20 hover:text-foreground"
          >
            Login
          </a>
          <a
            href="/auth/register"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition duration-200 hover:brightness-110"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
}