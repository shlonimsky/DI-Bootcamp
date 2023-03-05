// Exercise 2: With JSX
// Display a “Hello World!” message on the page.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence 
// "React is <sum> times better with JSX"
const WithJSX = () => {
        const sum = 5+5
        const myElement = <h1>I Love JSX!</h1>
    return (
        <p>React is {sum} times better with JSX! {myElement}</p>
    )
}

export default WithJSX