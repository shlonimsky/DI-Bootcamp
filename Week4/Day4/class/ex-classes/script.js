// Exercise 1
// Part I
// Create a TV function constructor with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed
// Part II
// Create a subclass for Smart TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default
// Part III: Modify the TV class
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

class TV {
    constructor(brand,channel=1,volume=50){
        this.brandTV=brand;
        this.channelTV=channel;
        this.volumeTV = volume;
    }
    setVolume(oper){
        (this.volumeTV>0 && this.volumeTV<100) ? (oper == "+"? this.volumeTV++:this.volumeTV--):"";
        // oper == "+"? (this.volumeTV>=0 && this.volumeTV<=99?):this.volumeTV--
        console.log(this.volumeTV)
    }
    setChannel(num){
        (num>0 && num <=50)? this.channelTV=num: "";
    }
    resetTV(){
        this.channelTV=1
        this.volumeTV=50
    }
    statusTV(){
        return  `${this.brandTV} at channel ${this.channelTV}, volume ${this.volumeTV}`
    }
}

const kitchenTV = new TV("Samsung",1,1)
console.log(kitchenTV)
kitchenTV.setVolume("-")
kitchenTV.setVolume("-")


class SmartTV extends TV{
    constructor(brand,channel,volume,netflix=true){
        super(brand,channel,volume)
        this.netflix = netflix
    }
    // setVolume(oper){
    //     oper == "+"? this.volumeTV += 10:this.volumeTV -=10;
    //     console.log(this.volumeTV)
    // }
    setVolume(oper){
        (this.volumeTV>=10 && this.volumeTV<=90) ? (oper == "+"? this.volumeTV+=10:this.volumeTV-=10):"";
        // oper == "+"? (this.volumeTV>=0 && this.volumeTV<=99?):this.volumeTV--
        console.log(this.volumeTV)
    }
}
const badRoomTV = new SmartTV("LG")
console.log(badRoomTV)
badRoomTV.setVolume("+")

