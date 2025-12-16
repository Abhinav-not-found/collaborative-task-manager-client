"use client"

import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"
import { deleteTask } from "@/helper/task-helper"


const DeleteBtn = ({ id }: { id: string }) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
      router.refresh()
    },
  })

  return (
    <Button onClick={() => mutate(id)} variant='ghost' disabled={isPending}>
      {isPending ? (
        <Spinner className='h-4 w-4' />
      ) : (
        <Trash className='h-4 w-4' />
      )}
    </Button>
  )
}

export default DeleteBtn
