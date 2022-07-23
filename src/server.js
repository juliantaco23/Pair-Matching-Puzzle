const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/game.routes');
const Config = require('./config/config');
const PageNotFound = require('./middleware/pageNotFound');
const PORT = Config.PORT || 3000;

app.use(morgan('dev'));
app.use('/', routes);


app.use(PageNotFound.getErrorMessage);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})