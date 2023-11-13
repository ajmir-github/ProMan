import { BsPeople } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
function TeamCart() {
  const teamName = "Kabul University";
  const numberOfMembers = 33;
  const numberOfProjects = 7;
  return (
    <div className="card card-bordered">
      <div className="card-body">
        <h2 className="card-title">{teamName}</h2>
        <div className="flex justify-between">
          <span className="flex items-center gap-2">
            Members: <BsPeople size={18} /> {numberOfMembers}
          </span>
          <span className="flex items-center gap-2">
            Projects: <TiTick size={18} /> {numberOfProjects}
          </span>
        </div>
        <p>
          A project description seems self-explanatory, but don’t underestimate
          a well-written project description as it sets your project up for
          success. It acts as a communication tool for stakeholders and shares
          the project vision in a clear and actionable fashion.
        </p>
        <div className="card-actions justify-end ">
          <div className="join">
            <button className="join-item btn btn-secondary">Join</button>
            <button className="join-item btn btn-primary">Open</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Teams() {
  const teams = [1, 2, 3, 4, 5];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 p-2 gap-2">
      {teams.map((team) => (
        <TeamCart />
      ))}
    </div>
  );
}
