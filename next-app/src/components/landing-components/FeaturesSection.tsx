// Import components
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {

    // Feature objects for creating feature cards
    const feature1 = {
        title: "Daily Journaling",
        description: "Instead of opening social media when you first wake up in the morning, write down your dreams in a daily journal. Give the dream a title and read back on your past dreams."
    }

    const feature2 = {
        title: "Track How Often You Dream",
        description: "When you start writing down a dream, the app automatically records when the entry was created."
    }

    const feature3 = {
        title: "Dreams Always Stored On Your Device, Not the Cloud",
        description: "When you write down a dream, it is stored on your device. This means that your data is never set to the web server elsewhere."
    }

    return (
        <section>

            <h2>Features</h2>

            <div className="flex">

                <FeatureCard title={ feature1.title } description={ feature2.description } />

                <FeatureCard title={ feature2.title } description={ feature2.description } />

                <FeatureCard title={ feature3.title } description={ feature3.description } />

            </div>

        </section>
    )
}