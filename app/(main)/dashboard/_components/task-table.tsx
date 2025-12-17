"use client"

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import DeleteBtn from "@/components/buttons/delete-btn"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { Task } from "@/types/task-types"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import StatusFilter, { Status } from "./status-filter"
import PriorityFilter, { Priority } from "./priority-filter"
import DateFilter from "./date-filter"

const updateTask = async ({
  id,
  data,
}: {
  id: string
  data: Partial<Task>
}) => {
  const res = await fetch(`http://localhost:8000/task/update/${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error("Update failed")
  return res.json()
}

const EditableCell = ({
  value,
  onSave,
}: {
  value: string
  onSave: (value: string) => void
}) => {
  const [editing, setEditing] = useState(false)
  const [localValue, setLocalValue] = useState(value)

  if (editing) {
    return (
      <Input
        autoFocus
        className='w-fit'
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={() => {
          setEditing(false)
          if (localValue !== value) onSave(localValue)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditing(false)
            if (localValue !== value) onSave(localValue)
          }
        }}
      />
    )
  }

  return (
    <div onClick={() => setEditing(true)} className='cursor-pointer'>
      {value}
    </div>
  )
}

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  const queryClient = useQueryClient()
  const router = useRouter()

  const [statusFilter, setStatusFilter] = useState<Status>("all")
  const [priorityFilter, setPriorityFilter] = useState<Priority>("all")
  const [dueDateFilter, setDueDateFilter] = useState<string>("")

  const filteredTasks = tasks.filter((task) => {
    const statusMatch = statusFilter === "all" || task.status === statusFilter

    const priorityMatch =
      priorityFilter === "all" || task.priority === priorityFilter

    const dueDateMatch =
      !dueDateFilter || task.dueDate?.split("T")[0] === dueDateFilter

    return statusMatch && priorityMatch && dueDateMatch
  })

  const { mutate } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      toast.success("Task updated")
      router.refresh()
    },
  })

  const save = (id: string, field: keyof Task, value: string | Date) => {
    mutate({ id, data: { [field]: value } })
  }

  return (
    <>
      <div className='flex gap-3 mb-4'>
        <h1 className='text-2xl font-medium'>Filter: </h1>
        <StatusFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <PriorityFilter
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <DateFilter
          dueDateFilter={dueDateFilter}
          setDueDateFilter={setDueDateFilter}
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredTasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell>
                <EditableCell
                  value={task.title}
                  onSave={(v) => save(task._id, "title", v)}
                />
              </TableCell>

              <TableCell>
                <EditableCell
                  value={task.description}
                  onSave={(v) => save(task._id, "description", v)}
                />
              </TableCell>

              <TableCell>
                <Input
                  type='date'
                  defaultValue={task.dueDate?.split("T")[0]}
                  onBlur={(e) => {
                    const value = e.target.value
                    if (!value) return
                    save(task._id, "dueDate", new Date(value).toISOString())
                  }}
                />
              </TableCell>

              <TableCell>
                <Select
                  defaultValue={task.priority}
                  onValueChange={(v) => save(task._id, "priority", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Low'>Low</SelectItem>
                    <SelectItem value='Medium'>Medium</SelectItem>
                    <SelectItem value='High'>High</SelectItem>
                    <SelectItem value='Urgent'>Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell>
                <Select
                  defaultValue={task.status}
                  onValueChange={(v) => save(task._id, "status", v)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='To Do'>To Do</SelectItem>
                    <SelectItem value='In Progress'>In Progress</SelectItem>
                    <SelectItem value='Review'>Review</SelectItem>
                    <SelectItem value='Completed'>Completed</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell>
                <DeleteBtn id={task._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
