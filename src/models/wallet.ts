import * as mongoose from 'mongoose';

const WalletSchema = new mongoose.Schema({
    balance: Number,
    currency: String,
    cid: Number,
    master: {
        type: Boolean,
        default: false,
    },
});

const Wallet = mongoose.model('Wallet', WalletSchema);
export { Wallet as Wallet };