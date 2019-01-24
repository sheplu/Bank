import * as express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.json("wallet")
})



export { router as WalletRouter };