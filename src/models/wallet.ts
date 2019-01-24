import * as mongoose from 'mongoose';

const WalletSchema = new mongoose.Schema({
    balance: {
        type: Number,
        default: false,
    },
    currency: String,
    cid: String,
    master: {
        type: Boolean,
        default: false,
    },
});

const Wallet = mongoose.model('Wallet', WalletSchema);
export { Wallet as Wallet };