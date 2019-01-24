import * as express from 'express';
import { Transfer } from '../models/transfer';

import { rates } from '../utils/exchange';

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
    let fee = 0;
    if (req.body.origin != req.body.target){
        fee = rates(req.body.origin, req.body.target, req.body.amount);
    }
    new Transfer({
        amount: req.body.amount,
        origin: req.body.origin,
        target: req.body.target,
        fee: fee,
        eid: req.body.oid,
        otype: req.body.otype,
        tid: req.body.tid,
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