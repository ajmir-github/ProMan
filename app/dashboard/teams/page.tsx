import TeamsList from "@/features/TeamsList";
import TeamsListFilterBar from "@/features/TeamsList/TeamsListFilterBar";
import Team from "@/interfaces/Team";

const teams: Team[] = [
  {
    id: "1",
    name: "Team 1",
    area: "IT",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-1.jpg",
  },
  {
    id: "2",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-2.jpg",
  },
  {
    id: "3",
    name: "Team 3",
    area: "IT",
    numberOfMembers: 1,
    numberOfProjects: 2,
  },
  {
    id: "4",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-3.jpg",
  },
  {
    id: "5",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-4.jpg",
  },
  {
    id: "6",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-5.jpg",
  },
  {
    id: "7",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-6.jpg",
  },
  {
    id: "8",
    name: "Team 2",
    area: "Content Writing",
    numberOfMembers: 1,
    numberOfProjects: 2,
    image: "/images/caption-7.jpg",
  },
];

export default function TeamsPage() {
  return (
    <div className="p-2 grid gap-2">
      <TeamsListFilterBar />
      <TeamsList teams={teams} />
    </div>
  );
}
