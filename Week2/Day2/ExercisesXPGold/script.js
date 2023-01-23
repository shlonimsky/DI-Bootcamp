// Exercise 1 : The World Translator
// Hint: Use Switch Case
// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
const language = prompt(`Please, enter the language you speak:`).toLowerCase();
switch (language) {
    case 'french':
        alert(`Bonjour`);
        break;
    case 'english':
        alert(`Hello`);
        break;
    case 'hebrew':
        alert(`Shalom`);
        break; 
    default:
        alert(`01110011 01101111 01110010 01110010 01111001`);
}