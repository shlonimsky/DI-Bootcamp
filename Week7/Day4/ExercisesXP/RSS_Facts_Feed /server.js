const express = require('express')
const ejs = require('ejs')
const cors = require('cors')
const body_parser = require('body-parser')
const Parser = require('rss-parser')

const parser = new Parser();
(async () => {

    let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
    console.log(feed.title);
  
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  
  })();

const app = express()
app.listen(3000,() => console.log(`LISTENING`))

