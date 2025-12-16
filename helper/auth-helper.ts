import { LoginPayload, RegisterPayload } from "@/types/auth-types"

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
    throw new Error(err.message || "Login failed")
  }

  return res.json()
}

export const registerUser = async (data: RegisterPayload) => {
  const res = await fetch("http://localhost:8000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || "Register failed")
  }

  return res.json()
}

export const logoutUser = async () => {
  const res = await fetch("http://localhost:8000/user/logout", {
    method: "POST",
    credentials: "include",
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Logout failed")
  }

  return data
}

