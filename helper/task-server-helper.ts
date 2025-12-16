import { Task } from "@/types/task-types"
import { cookies } from "next/headers"

export const getMyTasks = async (): Promise<{ data: Task[] } | null> => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (!token) return null

  const res = await fetch("http://localhost:8000/task/getAll", {
    headers: {
      Cookie: `token=${token.value}`,
    },
    cache: "no-store",
  })

  if (!res.ok) return null

  return res.json()
}
