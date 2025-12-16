
export type CreateTaskPayload = {
  title: string
  description: string
  dueDate: string
  priority: "Low" | "Medium" | "High" | "Urgent"
  status: "To Do" | "In Progress" | "Review" | "Completed"
}

export const createTask = async (data: CreateTaskPayload) => {
  const res = await fetch("http://localhost:8000/task/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })

  const result = await res.json()

  if (!res.ok) {
    throw new Error(result.message || "Failed to create task")
  }

  return result
}

export const deleteTask = async (id: string) => {
  const res = await fetch(`http://localhost:8000/task/remove/${id}`, {
    method: "DELETE",
    credentials: "include",
  })

  if (!res.ok) {
    throw new Error("Failed to delete task")
  }
  return res.json()
}
