import * as mongoose from 'mongoose';

const CardSchema = new mongoose.Schema({
    wid: String,
    currency: String,
    balance: {
        type: Number,
        default: 0,
        min: [0, 'Card balance must be positive'],
    },
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