# Dream Journal
The dream journal is a primaryily client side browser based where the user can record their dreams and read them in a calendar or a list based on the date the dream took place. The date is recorded automatically or can be manually selected. 
## Technologies
The app is built in React 
- TypeScript
- CSS
- TSX
- HTML
## Data Persistence
Dreams are recorded as a Dream data model stored persistently as JSON in the browsers localStorage API. This provides the ability for the dream to be synced with a database in a backend if I chose later on. 
## Layout
The app has three main pages.
- Calendar view
- All dreams list
- Settings
An individual dream is viewed as a pop up based on the selection from the dream ID on either the calendar or the list of all dreams. 
## Data Model
The dream data model has an id number, a date string, a title string, and body text string. 