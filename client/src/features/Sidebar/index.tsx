"use client";
import {
  LogOutIcon,
  ProjectIcon,
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

  const isActive = (url: string, extact: boolean = false) =>
    extact ? pathname === url : pathname.startsWith(url);

  return (
    <ul className="menu gap-1">
      <span className="flex justify-center items-center">
        <Image
          className="w-14"
          src={"/images/logo.png"}
          width={128}
          height={128}
          alt="ProMan Logo"
        />
      </span>

      <span className="divider my-1"></span>

      <li>
        <Link
          href={"/"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/", true) && "active"
          )}
        >
          <UserIcon />
          Profile
        </Link>
      </li>

      <li>
        <Link
          href={"/teams"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/teams") && "active"
          )}
        >
          <TeamIcon />
          Teams
        </Link>
      </li>
      <li>
        <Link
          href={"/projects"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/projects") && "active"
          )}
        >
          <ProjectIcon />
          Projects
        </Link>
      </li>
      <li>
        <Link
          href={"/users"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/users") && "active"
          )}
        >
          <UsersIcon />
          Users
        </Link>
      </li>

      <span className="divider"></span>

      <li>
        <Link
          href={"/settings"}
          className={classes(
            "flex items-center flex-col md:flex-row",
            isActive("/settings") && "active"
          )}
        >
          <SettingIcon />
          Settings
        </Link>
      </li>

      <li>
        <Link
          href={"/api/auth/signout"}
          className="flex items-center flex-col md:flex-row"
        >
          <LogOutIcon />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
}
