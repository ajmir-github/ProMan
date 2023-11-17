"use client";
import {
  LogOutIcon,
  ProjectIcon,
  SettingIcon,
  TeamIcon,
  UserIcon,
  UsersIcon,
} from "@/components/Icons";
import classes from "@/utils/classes";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="menu gap-1">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <img
            className="w-14"
            src={"/images/logo.png"}
            width={128}
            height={128}
            alt="ProMan Logo"
          />
        </NavLink>
      </li>

      <span className="divider my-1"></span>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <UserIcon />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <UserIcon />
          Profile
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/teams"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <TeamIcon />
          Teams
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <ProjectIcon />
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/users"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <UsersIcon />
          Users
        </NavLink>
      </li>

      <span className="divider"></span>

      <li>
        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            isActive
              ? "flex items-center flex-col md:flex-row active"
              : "flex items-center flex-col md:flex-row"
          }
        >
          <SettingIcon />
          Settings
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/auth/signout"}
          className="flex items-center flex-col md:flex-row"
        >
          <LogOutIcon />
          <span>Logout</span>
        </NavLink>
      </li>
    </ul>
  );
}
