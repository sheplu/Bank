import * as express from 'express';
import { Transfer } from '../models/transfer';

const router = express.Router();

router.get('/', (req, res, next) => {
    Transfer.find(
        {},
        (err, transfer) => {
            res.json(transfer);
        }
    );
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    new Transfer({
        amount: req.body.amount,
        origin: req.body.origin,
        target: req.body.target,
        fee: 10,
        oid: 'card1',
        otype: req.body.otype,
        tid: 'card2',
        ttype: req.body.ttype,
    })
    .save((err, result) => {
        if(err) console.log(err);
        console.log(result)
        res.json(result);
    });
});

router.get('/:id', (req, res, next) => {
    Transfer.findById(
        req.params.id,
        (err, transfer) => {
            res.json(transfer);
        }
    );
});

export { router as TransferRouter };