import { DreamsList } from "../components/DreamsList";

import { NewDream } from "../components/NewDream";

export function AllDreamsPage() {
    
    return (
        <main>

            <h1>All Dreams</h1>

            <NewDream />

            <DreamsList />

        </main>
    )
}