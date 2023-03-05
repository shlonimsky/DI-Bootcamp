// Exercise 4 : HTML Tags In React
// Instructions
// PART I:
// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.

// PART II:
// Add the below object to the component Exercise4. Use this object to style the <h1>.

// PART III:
// Create a new css file named Exercise4.css and import it in your Exercise4 component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:
import './ex4.css'

const Exercise4 =() => { 
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            {/* <h1 style={{color:'red',backgroundColor:'lightblue'}}>This is an h1 Tag</h1> */}

            <h1 style={{...style_header}}>This is an h1 Tag</h1>

            <p>This is a paragraph</p>
            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"> This is a link to Wiki</a>
            <form>This is a form with input
                <input type="text"/>Hi, I'm an input
            </form>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png" alt="logo"></img>
        </div>
    )
}

export default Exercise4