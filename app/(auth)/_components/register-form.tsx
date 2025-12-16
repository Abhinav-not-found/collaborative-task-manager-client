"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const RegisterForm = () => {
  return (
    <form className='w-1/3'>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='name'>Name</FieldLabel>
            <Input id='name' placeholder='Max Leiter' />
          </Field>
          <Field>
            <FieldLabel htmlFor='email'>Email</FieldLabel>
            <Input id='email' placeholder='maxleiter@gmail.com' />
          </Field>
          <Field>
            <FieldLabel htmlFor='password'>Password</FieldLabel>
            <Input id='password' type='password' placeholder='••••••••' />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button className='mt-4 w-full'>Register</Button>
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
