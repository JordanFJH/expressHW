const express = require("express");
const app = express();

//TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {

    let result = (req.params.tipPercentage  * req.params.total) / 100 ;
    res.send(`Tip Amount is ${result}`)
})

//GREETING
app.get("/greeting/:name", (req, res) => {
    res.send(`How's it going ${req.params.name}`)
})

//MAGIC 8 BALL
app.get("/magic/:question", (req, res) => {
    let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randNum = Math.floor(Math.random() * response.length);
    res.send(response[randNum])
})

app.listen(5000, () => {
    console.log("Showing on port 5000")
})