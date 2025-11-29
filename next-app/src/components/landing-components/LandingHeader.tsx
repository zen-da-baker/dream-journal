// Import linking from Next
import Link from "next/link";

export function LandingHeader() {

    return (
        <header className="flex space-around">

            <Link href="/">

                <h2>ByteSized Dreams</h2>

            </Link>

            <Link href="/dashboard">

                <button>Open App</button>

            </Link>

        </header>
    )
}