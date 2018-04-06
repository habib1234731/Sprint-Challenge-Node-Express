const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const server = express();

const db = require('./data/dbConfig.js')

const projectRouter = require('./routers/projectRouter.js')
const actionRouter = require('./routers/actionRouter.js');

const myLogger = (req, res, next) => {
    console.log("body: ", req.body);
    next();
}

server.use(helmet());
server.use(express.json());
server.use(morgan('dev'));
server.use(myLogger);

server.use('/api/projects/',projectRouter);
server.use('/api/actions/',actionRouter);

const port = 5000;
server.listen(port, () => {
    console.log(`Api is running on port ${port}`)
});