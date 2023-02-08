// object literal
// attributes
// methods

const characterFirst = {
  username: 'Hermione Granger',
  house: 'Gryfindor',
  age: 20,
  play : function () {
    console.log(this);
    console.log(`${this.username} plays football`);
  }
};

characterFirst.play();

console.log(this); // global scope it means the window
// this in an object means this particular object

class Character {
    constructor (name,age,house="Gryfindor") {
        this.username = name;
        this.userage = age;
        this.userhouse = house;
    }

    play() {
        console.log(`${this.username} plays football`);
    }

    setHouse (newhouse) {
        this.userhouse = newhouse
    }
};

//creating am object from the Character class
const firstUser = new Character("Harry", 23, "Gryfindor");
console.log(firstUser);
firstUser.play();
firstUser.setHouse('ABC')
console.log(firstUser.userhouse);


//inheritance
class Wizard extends Character{
    constructor (wizardName, wizardAge, wizardHouse, wizardPowers) {
        super(wizardName, wizardAge, wizardHouse); //call the constructor function of the parent class (the Character clasd)
        this.allPowers = wizardPowers || [];
    }

    addPowers (newPower) {
        this.allPowers.push(newPower);
    }

    getPowers () {
        for(let power of this.allPowers) {
            console.log(`${this.username} power is ${power}`);
        }
    }

    //method that has exactly the same name the parent class, it overrides it
    play () {
        console.log(`${this.username} doesn't play with the other characters`);
    }
}

const wizardOne = new Wizard("Jaffar", 200, "Aladin", ["disappear", "run fast"]);
console.log(wizardOne);
wizardOne.addPowers("fly");
wizardOne.getPowers();
wizardOne.play()

const wizardTwo= new Wizard("John", 200, "Mermaid");
wizardTwo.addPowers("fly");
wizardTwo.getPowers()
