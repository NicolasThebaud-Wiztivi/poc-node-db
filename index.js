const express = require('express');
const cors = require('cors');
const Aggregator = require('./collections/ThemeAggregator');


const app = express();
app.use(cors());
app.use(express.json());

const customers = [

];

app.get('/getThemes', (request, response) => {
    response.json(Aggregator.themes);
});

app.get('/getCustomers', (request, response) => {
    response.json(customers);
});

app.post('/getCustomerTheme', (request, response) => {
    const body = request.body;
    let customer = customers.find(c => c.cpe === body.cpeID);
    if (!customer) {
        customer = { cpe: body.cpeID, themeId: Aggregator.map[0][body.cpeID] }
        customers.push(customer);
    }
    const theme = Aggregator.themes.find(theme => theme.id === customer.themeId);
    response.json(theme);
});

app.post('/setCustomerTheme', (request, response) => {
    const body = request.body;
    customers.find(c => c.cpe === body.cpe)['themeId'] = body.id;
    response.send('OK');
});

app.post('/setDisplayTokenValue', (request, response) => {
    const body = request.body;
    const theme = Aggregator.themes.find(theme => theme.id === body.themeId);
    theme.style[body.args[0]] = body.args[1];
    response.send('OK');
});

app.post('/setTokens', (request, response) => {
    const body = request.body;
    Aggregator.themes[body.id] = body.tokens;
    response.send('OK');
});

app.post('/registerNewTheme', (request, response) => {
    const body = request.body;
    Aggregator.registerTheme(body);
    Aggregator.themes.push(body);
    response.send('OK');
});

app.listen(1234);
console.warn('[HTTP] server listening on port 1234');
