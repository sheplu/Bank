import * as express from 'express';
import { Wallet } from '../models/wallet';

const router = express.Router();

router.get('/', (req, res, next) => {
    const usd = new Wallet({
        balance: 1000,
        currency: 'USD',
        cid: 'Spendesk',
        uid: 'Spendesk',
        master: true,
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    const eur = new Wallet({
        balance: 2000,
        currency: 'EUR',
        cid: 'Spendesk',
        uid: 'Spendesk',
        master: true,
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    const gbp = new Wallet({
        balance: 3000,
        currency: 'GBP',
        cid: 'Spendesk',
        uid: 'Spendesk',
        master: true,
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    const j_usd = new Wallet({
        balance: 200,
        currency: 'USD',
        cid: 'Oromys',
        uid: 'jean',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    const j_eur = new Wallet({
        balance: 300,
        currency: 'EUR',
        cid: 'Oromys',
        uid: 'jean',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    const j_gbp = new Wallet({
        balance: 400,
        currency: 'GBP',
        cid: 'Oromys',
        uid: 'jean',
    })
    .save((err, result) => {
        if(err) console.log(err);
    });

    Promise.all([usd, eur, gbp])
    .then(() => {
        res.json('setup done')
    })

    
});

export { router as SetupRouter };