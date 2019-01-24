import * as express from 'express';
import { WalletRouter } from './wallet';

const router = express.Router();

router.get("/", (req, res) => {
    res.json("router")
})

router.use('/wallet', WalletRouter);


export { router as ApiRouter };