"use client";
import { useState } from "react";
import SearchModal from "./SearchModal";
import SettingsModal from "./SettingsModal";
import {
  LogOutIcon,
  ProjectIcon,
  SearchIcon,
  SettingIcon,
  TeamIcon,
  UserIcon,
  UsersIcon,
} from "@/components/Icons";

import Link from "next/link";
import Image from "next/image";
import classes from "@/util/classes";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [settingsModal, setSettingsModal] = useState<boolean>(false);

  const isActive = (url: string) => pathname === url;

  return (
    <ul className="menu">
      <SearchModal open={searchModal} setOpen={setSearchModal} />
      <SettingsModal open={settingsModal} setOpen={setSettingsModal} />

      <span className="flex justify-center items-center">
        <Image
          className="w-14"
          src={"/images/logo.png"}
          width={128}
          height={128}
          alt="ProMan Logo"
        />
      </span>
      <li>
        <button
          onClick={() => setSearchModal(true)}
          className="flex items-center flex-col md:flex-row"
        >
          <SearchIcon />
          Search
        </button>
      </li>

      <span className="divider my-1"></span>

      <li>
        <Link
          href={"/dashboard"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/dashboard") && "active"
          )}
        >
          <UserIcon />
          Profile
        </Link>
      </li>

      <li>
        <Link
          href={"/dashboard/teams"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/dashboard/teams") && "active"
          )}
        >
          <TeamIcon />
          Teams
        </Link>
      </li>
      <li>
        <Link
          href={"/dashboard/projects"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/dashboard/projects") && "active"
          )}
        >
          <ProjectIcon />
          Projects
        </Link>
      </li>
      <li>
        <Link
          href={"/dashboard/users"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/dashboard/users") && "active"
          )}
        >
          <UsersIcon />
          Users
        </Link>
      </li>

      <span className="divider"></span>

      <li>
        <button
          className="flex items-center flex-col md:flex-row"
          onClick={() => setSettingsModal(true)}
        >
          <SettingIcon />
          Settings
        </button>
      </li>

      <li>
        <button className="flex items-center flex-col md:flex-row">
          <LogOutIcon />
          <span>Logout</span>
        </button>
      </li>
    </ul>
  );
}
