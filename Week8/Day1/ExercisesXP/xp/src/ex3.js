// Exercise 3 : Object
// Using the following object:

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };

// In the React App, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the 
// fav_animals array to the UserFavoriteColors component.
// In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify 
// each HTML item

const UserFavoriteColors =(props) => {
    return(
        props.fav_animals.map(animal => {
            return(
                <ul>
                    <li>{animal}</li>
                </ul>
            )
        })
    )
}

export default UserFavoriteColors