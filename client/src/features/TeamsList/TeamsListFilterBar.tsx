import { CheckIcon, SelectIcon, SortIcon, SyncIcon } from "@/components/Icons";

export default function TeamsListFilterBar() {
  return (
    <div className="flex justify-end gap-4 flex-wrap">
      <div className="flex items-center gap-2">
        <SelectIcon />
        <select className="select select-bordered">
          <option disabled selected>
            Filter By area
          </option>
          <option>IT</option>
          <option>Programming</option>
          <option>Bussiness</option>
          <option>Designing</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <CheckIcon />
        <select className="select select-bordered">
          <option disabled selected>
            Filter By Membership
          </option>
          <option>Joined</option>
          <option>Not joined</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <SortIcon />
        <select className="select select-bordered">
          <option disabled selected>
            Sort by
          </option>
          <option>Date</option>
          <option>Name</option>
          <option>Number of members</option>
          <option>Number of projects</option>
        </select>
      </div>
      <button className="btn btn-primary btn-outline" disabled>
        <SyncIcon />
        Apply
      </button>
    </div>
  );
}
