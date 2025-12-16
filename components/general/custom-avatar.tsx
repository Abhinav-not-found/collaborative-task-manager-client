"use client"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useMutation } from "@tanstack/react-query"
import { logoutUser } from "@/helper/auth-client-helper"
import { toast } from "sonner"
import Link from "next/link"

const CustomAvatar = () => {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      toast.success(data.message)
      router.push("/")
      router.refresh()
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className='flex flex-col gap-1'>
          <Link href={"/profile"}>
            <Button variant={"ghost"}>View Profile</Button>
          </Link>
          <Button onClick={() => mutate()} variant={"outline"}>
            {isPending ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomAvatar
