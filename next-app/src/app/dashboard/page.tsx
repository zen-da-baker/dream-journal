"use client"

// Import local state management from React
import { useState, useEffect } from "react";

import Link from "next/link"

/*
    The dashboard reads a list of stored dreams and their ID and date from the local storage and displays that list on
    the main page. The user can click on the dream which loads the dream in a new page using the ID for the query 
    parameters. At some point in time, the dreams may be reflected in a calendar view. 
*/
export default function Dashboard() {

    return (
        <main>

            <h1>ByteSized Dreams | Dashboard</h1>

            <Link href="/">Landing Page</Link>

            <Link href="/dream">Dream</Link>

        </main>
    )

}