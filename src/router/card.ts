import * as express from 'express';
import * as mongoose from 'mongoose';

import { digitsCard, ccv } from '../utils/random';
import { Card } from '../models/card';
import { Wallet } from '../models/wallet';


const router = express.Router();

router.get('/', (req, res, next) => {
    Card.find(
        {},
        (err, cards) => {
            res.json(cards);
        }
    );
});

// check startsession for transaction
router.post('/', (req, res, next) => {

    Wallet.findByIdAndUpdate(
        req.body.wallet,
        {
            $inc: { balance: -req.body.balance }
        },
        { new: true },
        (err, wallet) => {
            console.log(wallet)
        }
    );

    new Card({
        wid: req.body.wallet,
        currency: req.body.currency,
        balance: req.body.balance,
        digits: digitsCard(),
        ccv: ccv(),
        expiration: new Date().setMonth(new Date().getMonth() + 1 ),
        uid: req.body.uid,
    })
    .save((err, result) => {
        if(err) console.log(err);
        console.log(result)
        res.json(result);
    }); 
});

router.get('/:id', (req, res, next) => {
    Card.findById(
        req.params.id,
        (err, card) => {
            res.json(card);
        }
    );
});

router.post('/load', (req, res, next) => {
    Wallet.findByIdAndUpdate(
        req.body.wallet,
        {
            $inc: { balance: -req.body.amount }
        },
        { new: true },
        (err, wallet) => {
            console.log(wallet);
        }
    );

    Card.findByIdAndUpdate(
        req.body.card,
        {
            $inc: { balance: req.body.amount }
        },
        { new: true },
        (err, card) => {
            console.log(card);
            res.json(card)
        }
    );
});

router.post('/unload', (req, res, next) => {
    Wallet.findByIdAndUpdate(
        req.body.wallet,
        {
            $inc: { balance: req.body.amount }
        },
        { new: true },
        (err, wallet) => {
            console.log(wallet);
        }
    );

    Card.findByIdAndUpdate(
        req.body.card,
        {
            $inc: { balance: -req.body.amount }
        },
        { new: true },
        (err, card) => {
            console.log(card);
            res.json(card)
        }
    );
});

router.get('/:uid/:cid/block', (req, res, next) => {
    
});

router.get('/:uid/:cid/unblock', (req, res, next) => {
    
});


export { router as CardRouter };