import { DreamsList } from "../components/DreamsList";

import { NewDream } from "../components/NewDream";

export function AllDreamsPage() {
    
    return (
        <main>

            <h1 className="title">All Dreams</h1>

            <NewDream />

            <DreamsList />

        </main>
    )
}