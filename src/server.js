const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const morgan = require('morgan');
const routes = require('./routes/game.routes');
const PageNotFound = require('./middleware/pageNotFound');
app.use(morgan('dev'));
app.use('/', routes);


app.use(PageNotFound.getErrorMessage);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})