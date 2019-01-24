import * as mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
    wid: Number,
    currency: String,
    balance: Number,
    digits: Number,
    ccv: Number,
    expiration: Date,
    uid: String,
    status: {
        type: Boolean,
        default: false,
    },
});

const Card = mongoose.model('Card', CardSchema);
export { Card as Card };