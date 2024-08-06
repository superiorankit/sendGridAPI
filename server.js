const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.post('/mailTrack', (req, res) => {
    console.log('hitted')
    const events = req.body;
    if (!events)
        return res.status(300).send('Status not recieved')
    try{
    events.forEach(event => {
        console.log(`Event: ${event.event}, Email: ${event.email}`);
    });
    return res.status(200).send('Status recieved')
}
catch(err){
    return res.status(400).send('Something went wrong')
}
});

app.listen(3000, () => {
    console.log(`Server Started..........`)
})