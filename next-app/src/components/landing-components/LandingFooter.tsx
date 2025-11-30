// Import linking from Next
import Link from "next/link"

export function LandingFooter() {

    return (
        <footer className="flex space-around">

            <div className="footer-tile">

                <h3>Supporting Documents</h3>

                <nav>

                    <ul>

                        <li>

                            <Link href="https://bytesizedcrew.com/terms-of-service" target="_blank" rel="noreferrer">
                            
                                Terms of Service

                            </Link>

                        </li>

                        <li>

                            <Link href="https://bytesizedcrew.com/privacy-policy" target="_blank" rel="noreferrer">
                            
                                Privacy Policy
                            
                            </Link>

                        </li>

                    </ul>

                </nav>

            </div>

            <div className="footer-tile">

                <h3>Social Media</h3>

                <nav>

                    <ul>

                        <li>

                            <Link href="https://bsky.app/profile/bytesizedcrew.bsky.social" target="_blank" rel="noreferrer">

                                <img src="/icons/bluesky.svg" alt="Bluesky icon" width={ 20 } />

                            </Link>

                        </li>

                        <li>

                            <Link href="https://x.com/bytesizedcrew" target="_blank" rel="noreferrer">
                            
                                <img src="/icons/twitter-x.svg" alt="X icon" width={ 20 } />

                            </Link>

                        </li>

                    </ul>

                </nav>

            </div>

        </footer>
    )
}