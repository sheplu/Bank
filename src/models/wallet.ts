import * as mongoose from 'mongoose';

const WalletSchema = new mongoose.Schema({
    balance: {
        type: Number,
        default: 0,
        min: [0, 'Account must be positive'],
    },
    currency: String,
    cid: String,
    uid: String,
    master: {
        type: Boolean,
        default: false,
    },
});

const Wallet = mongoose.model('Wallet', WalletSchema);
export { Wallet as Wallet };