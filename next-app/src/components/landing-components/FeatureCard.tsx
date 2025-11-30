export function FeatureCard({ title, description } : { title: string, description: string }) {

    return (
        <div className="card">

            <h3>{ title }</h3>

            <p>{ description }</p>

        </div>
    )

}