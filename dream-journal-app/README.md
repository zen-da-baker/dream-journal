# Dream Journal - Social Media App - Design Process
## Purpose
This is a message board app that allows users to post short stories with a thumbnail image of their most recent dream. The profile of the user sets the dreams in chronological order. The user can view when they posted about a dream in a flat timeline view or in a calendar view using the post creation data as a source for those database displays. 
## Description
This is a dream journal application in the form of a social media network aimed at sharing dreams and statistics around dream occurrence with other users. The core of the app is in the sign in, sign up, profile, friend, and discover pages. 
## Languages
- HTML
- CSS
- JavaScript
- React.js
## Skills
## Build Process
Page navigation was created first on a whiteboard with the logic drawn. The page navigation uses components the size of the page to control the user view using useState. 
A true state sets other states to false and the page displayed is based on that state. All states being false display a default Sign In page.
*The header and footer are components that display in the profile, discover, and friends pages. They do not display in the log in and sign up pages.*

I created a form on the Sign In page with a password form that successfully enters the User Profile page when the correct password is entered. 
*This is to be located in an account database but for a simple demo a sample password was used.*

Following the Sign In page password creation, I also made the page navigation buttons in the header component that successfully navigate between the pages using useState and props passed from the parent component to the child page components.

I created the User Profile page to use CSS Grid for laying out the core Profile Banner, Calendar Display, Dream Post, and Friends List child components within their own folders and styled with a module CSS file. 

Following the use of CSS Grid for laying out the page, I also used it to layout each component such as the Profile Banner and Friend List and passed placeholder data as props to be displayed in those 3rd level child components.

Creating a basic footer was next and I used a simple CSS Grid to structure the basic footer and used Flexbox to arrange buttons in place of links. Finally, I used the same text field component styling for a newsletter input and a primary colored submit button to go with it.

Next off was to make a textarea for the dream post input as a placeholder component before allowing the input or display of the dream post to be determined by state. 
