import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type Status =
  | "all"
  | "To Do"
  | "In Progress"
  | "Review"
  | "Completed"

type StatusFilterProps = {
  statusFilter: Status
  setStatusFilter: React.Dispatch<React.SetStateAction<Status>>
}

const StatusFilter = ({ statusFilter, setStatusFilter }: StatusFilterProps) => {
  return (
    <Select
      value={statusFilter}
      onValueChange={(value) => setStatusFilter(value as Status)}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="To Do">To Do</SelectItem>
        <SelectItem value="In Progress">In Progress</SelectItem>
        <SelectItem value="Review">Review</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default StatusFilter
