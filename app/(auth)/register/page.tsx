import RegisterForm from "../_components/register-form"
import PublicRoute from "@/components/routes/public-route"

export default async function RegisterPage() {

  return (
    <PublicRoute className='flex items-center justify-center h-[90vh]'>
      <RegisterForm />
    </PublicRoute>
  )
}
