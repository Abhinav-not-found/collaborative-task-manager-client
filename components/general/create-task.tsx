import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "@/components/ui/button"

const CreateTask = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        test
      </DialogContent>
    </Dialog>
  )
}

export default CreateTask
