import * as mongoose from 'mongoose';

const TransferSchema = new mongoose.Schema({
    timestamp: { 
        type: Date,
        default: Date.now
    },
    amount: Number,
    origin: String,
    target: String,
    fee: Number,
    eid: String,
    otype: String,
    tid: String,
    ttype: String,
});

const Transfer = mongoose.model('Transfer', TransferSchema);
export { Transfer as Transfer };