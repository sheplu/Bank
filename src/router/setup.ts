import * as express from 'express';
import { Wallet } from '../models/wallet';

const router = express.Router();

router.get('/', (req, res, next) => {
    new Wallet({
        balance: 1000,
        currency: 'USD',
        cid: 'Spendesk',
        uid: 'Spendesk',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    new Wallet({
        balance: 2000,
        currency: 'EUR',
        cid: 'Spendesk',
        uid: 'Spendesk',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    new Wallet({
        balance: 3000,
        currency: 'GBP',
        cid: 'Spendesk',
        uid: 'Spendesk',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    res.json('setup done')
});

export { router as SetupRouter };