import * as express from 'express';
import { Wallet } from '../models/wallet';
import { logger, loggerError } from '../utils/log';

const router = express.Router();

router.get('/', (req, res, next) => {
    Wallet.find(
        {},
        (err, wallets) => {
            if(err) loggerError(err);
            logger([req, wallets]);
            res.json(wallets);
        }
    )
});

router.post('/', (req, res, next) => {
    new Wallet({
        balance: req.body.balance,
        currency: req.body.currency,
        cid: req.body.company,
        uid: req.body.uid,
    })
    .save((err, result) => {
        if(err) loggerError(err);
        logger([req, result]);
        res.json(result);
    })
});

router.get('/:id', (req, res, next) => {
    Wallet.findById(
        req.params.id,
        (err, wallet) => {
            if(err) loggerError(err);
            logger([req, wallet]);
            res.json(wallet);
        }
    );
});

export { router as WalletRouter };