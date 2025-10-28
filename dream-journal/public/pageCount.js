async function viewCounter() {

    const domain = "https://api.bytesizedcrew.com/dream";

    const result = await fetch( domain );

    const jsonResult = await result.json();

    console.log( jsonResult.msg );

}