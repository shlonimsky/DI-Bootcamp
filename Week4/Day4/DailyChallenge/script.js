// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

class Video {
    constructor(title,uploader,time){
        this.title=title;
        this.uploader=uploader;
        this.time=time
    }
    watch(){
        const sentence = `${this.uploader} watched all ${this.time} of ${this.title}!`
        return sentence
    }
}

const homeVideo = new Video("Home video","BigDragon007",69)
console.log(homeVideo.watch());
const birthdayVideo = new Video ("First birthday","HappyMum",777)
console.log(birthdayVideo.watch());

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
const videoDataBase = [{
    title : "Home video",
    uploader : "BigDragon007",
    time : 69
},{
    title : "First birthday",
    uploader : "HappyMum",
    time : 777
},{
    title : "Prom 1999",
    uploader : "tom1981",
    time : 555
},{
    title : "Wedding",
    uploader : "Jhonson'sFamily",
    time : 999
},{
    title : "Funeral",
    uploader : "FinallyFree81",
    time : 666
}]
videoDataBase.forEach(video => {
    const {title,uploader,time}=video
    const newVideo = new Video(title,uploader,time)
    console.log(newVideo)
    console.log(newVideo.watch());
})