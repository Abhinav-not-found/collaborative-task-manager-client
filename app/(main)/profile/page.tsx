import PrivateRoute from "@/components/routes/private-route"
import { getProfileServer } from "@/helper/auth-server-helper"

const ProfilePage = async () => {
  const data = await getProfileServer()
  console.log(data)

  return (
    <PrivateRoute>
      <p>User Info</p>
      <p>{data.data.name}</p>
      <p>{data.data.email}</p>
    </PrivateRoute>
  )
}

export default ProfilePage
