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

router.post('/', (req, res, next) => {
    console.log(req.body)
    new Wallet({
        balance: req.body.balance,
        currency: req.body.currency,
        cid: req.body.company,
    })
    .save((err, result) => {
        if(err) console.log(err);
        console.log(result)
        res.json(result);
    })
});

router.get('/:id', (req, res, next) => {
    Wallet.findById(
        req.params.id,
        (err, wallet) => {
            res.json(wallet);
        }
    )
    res.json("wallets")
});

export { router as WalletRouter };