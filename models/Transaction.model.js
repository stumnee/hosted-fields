var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    Status: String, //Complete
    TransactionSetupID: String, //8CC682B3-A708-4B36-B14A-FFCE6341F694
    TransactionID: Number,//7261397
    ExpressResponseCode: Number,//0
    ExpressResponseMessage: String,//Approved
    AVSResponseCode: String,//=N
    CVVResponseCode: String,//=M
    ApprovalNumber: Number,//=000054
    LastFour: Number,//=1111
    ValidationCode: String,//=4E7E81CEEEE14AD6
    CardLogo: String,//=Visa
    ApprovedAmount: Number,//=6.55
    Bin: Number,//=411111
    Entry: String,//=Manual
    created: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Transaction', TransactionSchema);