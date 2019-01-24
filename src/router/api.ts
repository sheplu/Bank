import * as express from 'express';
import { WalletRouter } from './wallet';
import { CardRouter } from './card';
import { TransferRouter } from './transfer';
import { UserRouter } from './user';

import { SetupRouter } from './setup'

const router = express.Router();

router.get("/", (req, res) => {
    res.json("router")
});

router.use('/wallet', WalletRouter);
router.use('/card', CardRouter);
router.use('/transfer', TransferRouter);
router.use('/user', UserRouter);
router.use('/setup', SetupRouter);

export { router as ApiRouter };