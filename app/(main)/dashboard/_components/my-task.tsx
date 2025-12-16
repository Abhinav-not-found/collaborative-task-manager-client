import DeleteBtn from "@/components/buttons/delete-btn"
import { getMyTasks } from "@/helper/task-server-helper"
import { Task } from "@/types/task-types"

const MyTasks = async () => {
  const myTasks = await getMyTasks()

  if (!myTasks || myTasks.data.length === 0) {
    return <p>No tasks found</p>
  }

  return (
    <div className='flex flex-col gap-2 mt-2'>
      {myTasks?.data.map((task: any) => (
        <Item key={task._id} data={task} />
      ))}
    </div>
  )
}

const Item = ({ data }: { data: Task }) => {
  return (
    <div className='w-full bg-neutral-50 py-3 px-3 rounded-md flex justify-between'>
      {data.title}
      <DeleteBtn id={data._id} />
    </div>
  )
}
export default MyTasks
