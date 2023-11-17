import { ProjectIcon, TextBodyIcon, UsersIcon } from "@/components/Icons";
import Team from "@/interfaces/Team";
import { Link } from "react-router-dom";

export default function TeamCard({
  team: { id, name, area, numberOfMembers, numberOfProjects, image },
}: {
  team: Team;
}) {
  return (
    <Link
      className="grid bg-base-100 rounded-lg p-4 gap-2 hover:bg-base-200"
      to={`/dashboard/teams/${id}`}
    >
      <div className="flex gap-4">
        {image ? (
          <div className="avatar">
            <div className="w-20 h-20 rounded-xl">
              <img
                alt={name}
                className=" object-cover object-center flex-shrink-0 rounded-full"
                src={image}
                width={128}
                height={128}
              />
            </div>
          </div>
        ) : (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-20 h-20">
              <span className="text-3xl uppercase">{name.slice(0, 2)}</span>
            </div>
          </div>
        )}

        <div className="flex-grow grid gap-2">
          <h2 className="text-base-content title-font font-bold">{name}</h2>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <TextBodyIcon />
            {area}
          </p>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <UsersIcon /> {numberOfMembers} member/s
          </p>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <ProjectIcon /> {numberOfProjects} project/s
          </p>
        </div>
      </div>
    </Link>
  );
}
