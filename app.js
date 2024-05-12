const express = require('express');

const TypicalFood = require('./routes/typicalFood');

const app = express();

app.use('/api/food', TypicalFood);

app.listen(3000);