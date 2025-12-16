import { LoginPayload } from "@/types/auth-types"
import { toast } from "sonner"

export const loginUser = async (data: LoginPayload) => {
  const res = await fetch("http://localhost:8000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  })

  if (!res.ok) {
    const err = await res.json()
    toast.error(err.message)
    throw new Error(err.message || "Login failed")
  }

  return res.json()
}
