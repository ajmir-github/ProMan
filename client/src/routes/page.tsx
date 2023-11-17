// import Teams from "@/features/Teams";
"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  console.log(session);

  return <div>{session?.user?.email}</div>;
}
