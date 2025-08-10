/* 
    This helper function takes in a date string, creates a date object 
    from it, and formats a more legigible date string for display
*/
export function displayDate(dateString: string): string {

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

    const date = new Date(dateString);

    const dayNumber: number = date.getDay();

    const monthNumber: number = date.getMonth();

    const yearNumber: number = date.getFullYear();

    const monthString = monthsList[monthNumber];

    return `Dreamed on ${ monthString } ${ dayNumber }, ${ yearNumber }.`;

}