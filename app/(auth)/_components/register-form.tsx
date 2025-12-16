"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { registerUser } from "@/helper/auth-helper"

const RegisterForm = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      router.push("/login")
      toast.success(data.message)
    },
    onError: (error: any) => {
      toast.error(error.message)
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({ name, email, password })
  }
  return (
    <form className='w-1/3' onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              placeholder='Max Leiter'
            />
          </Field>
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
        {isPending ? "Registering" : "Register"}
      </Button>
      <p className='text-muted-foreground mt-4 text-center'>
        Already have an account?{" "}
        <Link href={"/login"} className='underline'>
          Login
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
