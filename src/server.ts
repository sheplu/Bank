import * as express from 'express';
import * as mongoose from 'mongoose';

import { ApiRouter } from './router/api';
import { logger } from './utils/log';

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

mongoose.connect(
    'mongodb://localhost:27017/Bank',
    { useNewUrlParser: true },
);

var db = mongoose.connection;

db.on('error', (err) => {
  //console.log(err);
});

db.once('open', () => {
  //console.log('connected');
});

app.use('/api', ApiRouter);

app.use('**', (req, res, next) => {
  logger(req);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});