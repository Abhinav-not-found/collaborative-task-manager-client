
import PublicRoute from "@/components/routes/public-route"
import LoginForm from "../_components/login-form"

export default async function LoginPage() {
  return (
    <PublicRoute className='flex items-center justify-center h-[90vh]'>
      <LoginForm />
    </PublicRoute>
  )
}
