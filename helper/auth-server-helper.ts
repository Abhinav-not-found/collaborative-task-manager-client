import { cookies } from "next/headers"

export const getProfileServer = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (!token) return null

  const res = await fetch("http://localhost:8000/user/getUserInfo", {
    headers: {
      Cookie: `token=${token.value}`,
    },
    cache: "no-store",
  })

  if (!res.ok) return null

  return res.json()
}
