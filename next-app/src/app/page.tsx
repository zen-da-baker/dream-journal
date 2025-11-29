import Link from "next/link";

export default function Home() {
  return (
    <main>

      <h1>Landing Page</h1>

      <Link href="/dashboard">Dashboard</Link>

      <Link href="/dream">Dream</Link>

    </main>
  );
}
