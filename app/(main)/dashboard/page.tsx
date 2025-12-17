import CreateTask from "@/components/general/create-task"
import PrivateRoute from "@/components/routes/private-route"
import { Grid2x2, TableOfContents } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyTasks from "./_components/my-task"

const DashboardPage = () => {
  return (
    <PrivateRoute>
      <div className='flex justify-between items-center mt-5'>
        <Tabs defaultValue='my-task' className='w-full flex'>
          <div className='flex justify-between'>
            <TabsList>
              <TabsTrigger value='my-task'>My Task</TabsTrigger>
              <TabsTrigger value='assigned-task'>Assigned-task</TabsTrigger>
            </TabsList>
            <div className='flex gap-8'>
              {/* <div className='flex gap-4 items-center'>
                <Grid2x2 />
                <TableOfContents />
              </div> */}
              <CreateTask />
            </div>
          </div>
          <TabsContent value='my-task'>
            <MyTasks/>
          </TabsContent>
          <TabsContent value='assigned-task'>
            View and manage tasks assigned to you here.
          </TabsContent>
        </Tabs>
      </div>
    </PrivateRoute>
  )
}

export default DashboardPage
