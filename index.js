const express = require('express');
const cors = require('cors');
const Aggregator = require('./collections/ThemeAggregator');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/getThemes', (request, response) => {
    console.warn('×', Aggregator.themes);
    response.json(Aggregator.themes);
});

app.post('/getCustomerTheme', (request, response) => {
    const body = request.body;
    console.warn('×', '[CPE ID]', body);
    response.json(Aggregator.themes.find(theme => theme.id === Aggregator.map[0][body.cpeID]));
});

app.listen(1234);
console.warn('[HTTP] server listening on port 1234');
