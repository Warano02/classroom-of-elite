import LoginForm from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Login',
}

function LoginStudent() {
  return (
    <main className="min-h-screen bg-[linear-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_25%),linear-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_20%)] 
    flex items-center justify-center px-6 py-12">
      <LoginForm />
    </main>
  )
}

export default LoginStudent
