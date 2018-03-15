const express = require('express');
const app = express();

// const requestTime = (req, res, next) => { not whats needed I dont think
//     req.requestedTime = Date.now();
//     next();
// }

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/time', (req, res) => {
    const datetime = new Date().toISOString();
    res.send(datetime);
})

app.listen(8080, () => {
    console.log('listening on port 8080')
});