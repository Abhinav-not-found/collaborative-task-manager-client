"use client"

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createTask } from "@/helper/task-helper"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type Priority = "Low" | "Medium" | "High" | "Urgent"
type Status = "To Do" | "In Progress" | "Review" | "Completed"

const CreateTask = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState<Priority>("Medium")
  const [status, setStatus] = useState<Status>("To Do")

  const { mutate, isPending } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Task created")
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      setOpen(false)
      setTitle("")
      setDescription("")
      setDueDate("")
      setPriority("Medium")
      setStatus("To Do")
      router.refresh()
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      title,
      description,
      dueDate,
      priority,
      status,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Task</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Create Task</DialogTitle>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* Title */}
          <Input
            maxLength={100}
            placeholder='Task title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Description */}
          <Textarea
            placeholder='Task description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Due Date */}
          <Input
            type='date'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <div className='flex gap-5'>
            <Select
              value={priority}
              onValueChange={(value) => setPriority(value as Priority)}
            >
              <SelectTrigger>
                <SelectValue placeholder='Priority' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Low'>Low</SelectItem>
                <SelectItem value='Medium'>Medium</SelectItem>
                <SelectItem value='High'>High</SelectItem>
                <SelectItem value='Urgent'>Urgent</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={status}
              onValueChange={(value) =>
                setStatus(
                  value as "To Do" | "In Progress" | "Review" | "Completed"
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder='Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='To Do'>To Do</SelectItem>
                <SelectItem value='In Progress'>In Progress</SelectItem>
                <SelectItem value='Review'>Review</SelectItem>
                <SelectItem value='Completed'>Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type='submit' className='w-full'>
            {isPending ? "Creating..." : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTask
