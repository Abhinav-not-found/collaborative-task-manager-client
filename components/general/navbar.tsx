import { cookies } from "next/headers"
import { Button } from "../ui/button"
import Link from "next/link"
import CustomAvatar from "./custom-avatar"

const Navbar = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  return (
    <header className='h-14 flex justify-between items-center'>
      <Link href={"/"} className='font-bold text-lg tracking-tight'>
        TaskFlow
      </Link>
      {token ? (
        <CustomAvatar/>
      ) : (
        <Link href={"/login"}>
          <Button>Login</Button>
        </Link>
      )}
    </header>
  )
}

export default Navbar
