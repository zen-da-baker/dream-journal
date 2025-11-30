// Import linking from Next
import Link from "next/link"

export function GetStartedSection() {

    return (
        <section>

            <h2>Get Started Today</h2>

            <Link href="/dashboard">
            
                <button>Open App</button>

            </Link>
            
        </section>
    )
}