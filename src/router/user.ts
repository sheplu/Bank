import * as express from 'express';

import { Wallet } from '../models/wallet';
import { Card } from '../models/card';
import { Transfer } from '../models/transfer';


const router = express.Router();

router.get('/', (req, res, next) => {
    Card.find(
        {},
        (err, cards) => {
            res.json(cards);
        }
    );
});

router.get('/:uid/wallet', (req, res, next) => {
    Wallet.find(
        {
            uid: req.params.uid,
        },
        (err, wallets) => {
            res.json(wallets);
        }
    );
});

router.get('/:uid/card', (req, res, next) => {
    Card.find(
        {
            uid: req.params.uid,
        },
        (err, cards) => {
            res.json(cards);
        }
    );
});

export { router as UserRouter };