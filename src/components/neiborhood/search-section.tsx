import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchSection() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <Select defaultValue="all-locations">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
            <SelectItem value="austin">Austin, TX</SelectItem>
            <SelectItem value="dallas">Dallas, TX</SelectItem>
            <SelectItem value="houston">Houston, TX</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
