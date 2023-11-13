import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/auth/login"} className="btn btn-primary">
        Login Page
      </Link>
      <Link href={"/auth/register"} className="btn btn-primary">
        Regsiter Page
      </Link>
      <Link href={"/dashboard"} className="btn btn-primary">
        dashboard Page
      </Link>
    </main>
  );
}
