import {
  EditIcon,
  GoBackIcon,
  JoinIcon,
  ProjectIcon,
  TextBodyIcon,
  UsersIcon,
} from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";

function TeamMeta() {
  const name = "Kabul University";
  const description = ` Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
  tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
  ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
  meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth
  af fingerstache pitchfork.`;
  const area = "Grammar";
  const numberOfMembers = 22;
  const numberOfProjects = 11;
  return (
    <section className="grid gap-2">
      <div className="flex flex-col items-center  gap-8 ">
        <Image
          className="max-w-sm w-full object-cover object-center rounded"
          alt="hero"
          src="/images/caption-5.jpg"
          width={720}
          height={600}
        />
        <div className="max-w-lg flex flex-col text-center gap-4 grow lg:col-span-2">
          <h1 className="title-font sm:text-4xl text-3xl font-medium">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 shrink-0">
        <div className="stat">
          <div className="stat-figure text-primary">
            <TextBodyIcon />
          </div>
          <div className="stat-title">Area</div>
          <div className="stat-value"> {area}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <UsersIcon />
          </div>
          <div className="stat-title">Member/s</div>
          <div className="stat-value"> {numberOfMembers}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <ProjectIcon />
          </div>
          <div className="stat-title"> project/s</div>
          <div className="stat-value"> {numberOfProjects}</div>
        </div>
      </div>

      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-bold">Holden Caulfield</h2>
            <p className="opacity-80">UI Designer</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/84x84"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-bold">Henry Letham</h2>
            <p className="opacity-80">CTO</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/88x88"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Oskar Blinde</h2>
            <p className="opacity-80">Founder</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/90x90"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">John Doe</h2>
            <p className="opacity-80">DevOps</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/94x94"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Martin Eden</h2>
            <p className="opacity-80">Software Engineer</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/98x98"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Boris Kitua</h2>
            <p className="opacity-80">UX Researcher</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/100x90"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Atticus Finch</h2>
            <p className="opacity-80">QA Engineer</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/104x94"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Alper Kamu</h2>
            <p className="opacity-80">System</p>
          </div>
        </div>

        <div className="h-fit btn btn-neutral p-4">
          <img
            alt="team"
            className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/108x98"
          />
          <div className="flex-grow grid gap-2">
            <h2 className=" font-medium">Rodrigo Monchi</h2>
            <p className="opacity-80">Product Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TeamPage({
  params: { teamId },
}: {
  params: { teamId: string };
}) {
  return (
    <div className="grid gap-4 p-2">
      <div className="flex justify-between">
        <Link href={"/dashboard/teams"} className="btn btn-ghost">
          <GoBackIcon />
          Back
        </Link>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost">
            <JoinIcon />
            Join
          </button>
          <button className="btn btn-ghost">
            <EditIcon />
            Edit
          </button>
        </div>
      </div>
      <TeamMeta />
    </div>
  );
}
