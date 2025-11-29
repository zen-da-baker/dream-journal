import Link from "next/link";

import { LandingHeader } from "@/components/LandingHeader";

export default function Home() {
  return (
    <main>

      <LandingHeader />

      <h1>Landing Page</h1>

      <Link href="/dashboard">Dashboard</Link>

      <Link href="/dream">Dream</Link>

    </main>
  );
}
