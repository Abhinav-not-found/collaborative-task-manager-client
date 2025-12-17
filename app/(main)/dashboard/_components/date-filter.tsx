import { Input } from "@/components/ui/input"

type DateFilterProps = {
  dueDateFilter: string
  setDueDateFilter: React.Dispatch<React.SetStateAction<string>>
}

const DateFilter = ({
  dueDateFilter,
  setDueDateFilter,
}: DateFilterProps) => {
  return (
    <Input
      type="date"
      value={dueDateFilter}
      onChange={(e) => setDueDateFilter(e.target.value)}
      className="w-40"
    />
  )
}

export default DateFilter
