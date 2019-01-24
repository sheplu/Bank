import * as express from 'express';

import { Wallet } from '../models/wallet';
import { Card } from '../models/card';
import { Transfer } from '../models/transfer';
import { logger, loggerError } from '../utils/log';


const router = express.Router();

router.get('/:uid/wallet', (req, res, next) => {
    Wallet.find(
        {
            uid: req.params.uid,
        },
        (err, wallets) => {
            if(err) loggerError(err);
            logger([req, wallets]);
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
            if(err) loggerError(err);
            logger([req, cards]);
            res.json(cards);
        }
    );
});

export { router as UserRouter };