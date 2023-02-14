const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));
app.use(logger('dev'))
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


//routes


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});