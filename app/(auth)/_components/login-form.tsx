"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { loginUser } from "@/helper/auth-helper"
import { toast } from "sonner"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      router.push("/dashboard")
      router.refresh()
      toast.success(data.message)
    },
    onError: (error: any) => {
      toast.error(error.message)
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ email, password })
  }

  return (
    <form className='w-1/3' onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              placeholder='maxleiter@gmail.com'
            />
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              placeholder='••••••••'
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button type='submit' className='mt-4 w-full'>
        {" "}
        {isPending ? "Logging in..." : "Login"}
      </Button>
      <p className='text-muted-foreground mt-4 text-center'>
        Don't have an account?{" "}
        <Link href={"/register"} className='underline'>
          Register
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
