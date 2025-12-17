import { getMyTasks } from "@/helper/task-server-helper"
import TaskTable from "./task-table"

const MyTasks = async () => {
  const myTasks = await getMyTasks()

  if (!myTasks || myTasks.data.length === 0) {
    return <p>No tasks found</p>
  }

  return <TaskTable tasks={myTasks.data} />
}

export default MyTasks
