import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type Priority = "all" | "Low" | "Medium" | "High" | "Urgent"

type PriorityFilterProps = {
  priorityFilter: Priority
  setPriorityFilter: React.Dispatch<React.SetStateAction<Priority>>
}

const PriorityFilter = ({
  priorityFilter,
  setPriorityFilter,
}: PriorityFilterProps) => {
  return (
    <Select
      value={priorityFilter}
      onValueChange={(value) => setPriorityFilter(value as Priority)}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="Low">Low</SelectItem>
        <SelectItem value="Medium">Medium</SelectItem>
        <SelectItem value="High">High</SelectItem>
        <SelectItem value="Urgent">Urgent</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default PriorityFilter
