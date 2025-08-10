/* 
    This helper function takes in a date string, creates a date object 
    from it, and formats a more legigible date string for display
*/
export function displayDate(dateString: string): string {

    // A list of months strings
    const monthsList: Array<string> = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    // List of days strings
    const dayList: Array<string> = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    // Create a date object based on the string for parsing 
    const date = new Date(dateString);

    // Extract number details from the date object
    const dayOfTheWeekNumber: number = date.getDay();

    const dayNumber: number = date.getDate();

    const monthNumber: number = date.getMonth();

    const yearNumber: number = date.getFullYear();

    // Select the day of the week and months from the list based on the number
    const dayOfTheWeekString = dayList[dayOfTheWeekNumber];

    const monthString = monthsList[monthNumber];

    // Return a custom string with interporlation
    return `Dreamed on ${ dayOfTheWeekString } ${ monthString } ${ dayNumber }, ${ yearNumber }.`;

}