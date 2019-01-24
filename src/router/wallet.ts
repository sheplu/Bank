import * as express from 'express';
import { Wallet } from '../models/wallet';

const router = express.Router();

router.get('/', (req, res, next) => {
    Wallet.find(
        {},
        (err, wallets) => {
            res.json(wallets);
        }
    )
});

// check if valid currency
router.post('/', (req, res, next) => {
    new Wallet({
        balance: req.body.balance,
        currency: req.body.currency,
        cid: req.body.company,
        uid: req.body.uid,
    })
    .save((err, result) => {
        if(err) console.log(err);
        res.json(result);
    })
});

router.get('/:id', (req, res, next) => {
    Wallet.findById(
        req.params.id,
        (err, wallet) => {
            res.json(wallet);
        }
    );
});

export { router as WalletRouter };