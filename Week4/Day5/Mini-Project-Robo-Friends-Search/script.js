// 1. create The class that will 
//  - create cards 
// - create add cards to DOM
// 2. Create a field with eventListener("input") whith function:
//  - this function make.filter by input string in the key
//  and shows the card

// HTML
// nav -->icon, input, 
// body->section(grid-container) -> div(flex card)

// JS:
// -addEventListener for input ("input")
// displaying Robots:
// -create div, giv him a class
// -create img, <p>
// -appent them 
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    (function(){
        // adding event to input
        const input = document.getElementById("search")
        input.addEventListener("input", search)
    }());

    // class Robots{
    //     constructor(name,username,email,image){
    //         this.name = name;
    //         this.username = username;
    //         this.email = email;
    //         this.image = image;
    //     }
    // }

  robots.forEach(robot => {
    const card = document.createElement(`div`);
    card.id=robot.id
    card.classList.add("flex-container")
    const image = document.createElement("img");
    image.src=robot.image;
    const pTag1 = document.createElement("p");
    const pTagText1 = document.createTextNode(robot.name);
    pTag1.appendChild(pTagText1);
    const pTag2 = document.createElement("p");
    const pTagText2 = document.createTextNode(robot.email);
    pTag2.appendChild(pTagText2)
    // appending
    card.append(image,pTag1,pTag2);
    document.getElementById("container").appendChild(card)
  })

  function search(evt){
    const section = document.getElementById("container")
    const searchString = evt.target.value.toLowerCase();
    console.log(searchString)
    robots.forEach(robot => {
       if(robot.name.toLowerCase().includes(searchString)
        // || robot.email.toLowerCase().includes(searchString)
        // || robot.username.includes(searchString) || robot.email.includes(searchString)
        ){
            console.log(robot.name)
        document.getElementById(robot.id).classList.add("display-block")
        document.getElementById(robot.id).classList.remove("not-visible")

       } else{
        document.getElementById(robot.id).classList.remove("display-block")
        document.getElementById(robot.id).classList.add("not-visible")
       }
    })
  }