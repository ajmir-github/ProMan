import { useLoaderData } from "react-router-dom";

export default function SettingsPage() {
  const data = useLoaderData();
  console.log(data);
  return <h1>Settings page</h1>;
}
