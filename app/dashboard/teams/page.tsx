import {
  AddUserIcon,
  ProjectIcon,
  ReadMoreIcon,
  TextBodyIcon,
  UsersIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

function TeamCard() {
  return (
    <div className="grid bg-base-100 rounded-lg p-4 gap-2">
      <div className="flex gap-4">
        <Image
          alt="team logo"
          className="w-20 h-20 object-cover object-center flex-shrink-0 rounded-full"
          src="/images/caption-2.jpg"
          width={128}
          height={128}
        />
        <div className="flex-grow grid gap-2">
          <h2 className="text-base-content title-font font-medium">
            Team Name
          </h2>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <TextBodyIcon />
            Web Designing
          </p>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <UsersIcon /> 22 member/s
          </p>
          <p className="text-base-content flex gap-2 items-center justify-between">
            <ProjectIcon /> 2 project/s
          </p>
        </div>
      </div>
      <div className="join w-full">
        <Link href={"/sd"} className="join-item btn grow">
          <AddUserIcon />
          Join
        </Link>
        <Link href={"/as"} className="join-item btn grow">
          <ReadMoreIcon />
          Open
        </Link>
      </div>
    </div>
  );
}

export default function TeamsPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 gap-2">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </section>
  );
}
