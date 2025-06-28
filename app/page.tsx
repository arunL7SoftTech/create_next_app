import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Hello Arun Kumar K</h1>
      <div>
        <Link className="text-purple-600" href="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link className="text-orange-600" href="/dashboard/settings">Settings</Link>
      </div>
    </div>
  );
}
