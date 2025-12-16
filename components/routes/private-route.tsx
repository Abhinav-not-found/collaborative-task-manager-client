import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"

export default async function PrivateRoute({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (!token) {
    redirect("/")
  }
  return <div className={className}>{children}</div>
}
