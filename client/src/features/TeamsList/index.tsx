import TeamCard from "./TeamCard";
import Team from "@/interfaces/Team";

interface Props {
  teams: Team[];
}

export default function TeamsList({ teams }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </section>
  );
}
