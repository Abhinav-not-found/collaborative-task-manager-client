import PublicRoute from "@/components/routes/public-route"
import Hero from "./_components/hero"

export default async function LandingPage() {
  return <PublicRoute>
    <Hero/>
  </PublicRoute>
}
