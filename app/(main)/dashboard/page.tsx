import CreateTask from "@/components/general/create-task"
import PrivateRoute from "@/components/routes/private-route"

const DashboardPage = () => {
  return (
    <PrivateRoute>
      <CreateTask />
      {/* <p>task assigned</p> */}
      <p>task created</p>
      {/* <p>task overdue</p> */}
    </PrivateRoute>
  )
}

export default DashboardPage
