const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors({
    origin:"*",
    methods: ['GET', 'POST']
    }))

const repo = [
    {
        token : "legato",
        results : [{
            name : "Best 5-Minute LEGATO Workout for Intermediate Guitarists",
            link : "GV5Gyh9253E"
        },
        {
            name : "Crazy Legato Tutorial | Tips, Tricks, Licks & Exercises",
            link : "Z5buD-bs_tA"
        },
        {
            name : "Legato Guitar Tutorial",
            link : "sskqRgxEHUY"
        }
    ]
    },
    {
        token : "alternate",
        results : [{
            name : "The Easy Way to Master Alternate Picking!",
            link : "0S7Rh1dJUMM"
        },
        {
            name : "Guitar Lesson Exercise to Practice Your Alternate Picking",
            link : "SCNlFwCXLWQ"
        },
        {
            name : "How to Master Alternate Picking",
            link : "hHLLmiLZK40"
        }
    ]
    }
]

app.get('/all',(req,res) => {

    var ans = []

    for(var i = 0; i < repo.length; i++)
    {
        ans = ans.concat(repo[i].results)
    }

    res.json(ans)
})

app.post('/search',(req,res) => {

    var ans = []

    var tokens = req.body.val.split(" ")

    for(var i = 0; i < tokens.length; i++)
    {
        for(var j = 0; j < repo.length; j++)
        {
            if(tokens[i] === repo[j].token)
            {
                ans = ans.concat(repo[j].results)
            }
        }
    }

    res.json(ans)
})

app.listen(5000,() =>{
    console.log("Server Started at port 5000")
})
    
