const {amountOfTime,howLongYouLive,leftToHoliday} = require('./date.js')

console.log(amountOfTime())
// let prompt = require('prompt');
// prompt.start();
// const {date} =  prompt.get("date").then()
console.log(howLongYouLive())
const Holidays = require('date-holidays')
const hd = new Holidays('US')
const holiday = hd.getHolidays(2023).filter(obj => obj.name=='Christmas Day')
console.log(holiday)
console.log(leftToHoliday(holiday[0]["start"],holiday[0]["name"]))
