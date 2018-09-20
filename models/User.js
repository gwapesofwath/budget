const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    budget: 
        {
            type: Schema.Types.ObjectId,
            ref: "Budget"
        }
    
});
<<<<<<< HEAD
=======

>>>>>>> 9ce5a6c6eec6b122999c6d6ec6a23b9ea1b68970

const BudgetSchema = new Schema({
    wallet: { type: Number, required: false },
    paycheck: { type: Number, required: false },
    otherIncome: { type: Number, required: false },
    saveFirst: { type: Number, required: false },
    currentBalance: { type: Number, required: false },
    billsTotal: { type: Number, required: false },
    housing: { type: Number, required: false },
    carPayment: { type: Number, required: false },
    carInsurance: { type: Number, required: false },
    gas: { type: Number, required: false },
    food: { type: Number, required: false },
    subscriptions: { type: Number, required: false },
    creditCards: { type: Number, required: false },
    otherBills: { type: Number, required: false },
    leftover: { type: Number, required: false },
})

UserSchema.pre('save', function(next){
    if(this.isModified('password') || this.isNew){
        bcrypt.hash(this.password, 10, (err, hash) => {
            if(err){ return next(err); }
            this.password = hash;
            return next();
        })
    } else {
      return next();
    }
});

UserSchema.methods.comparePassword = function(pass, cb){
    bcrypt.compare(pass, this.password, (err, isMatch) => {
        if(err) {return cb(err)}
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);
const Budget = mongoose.model("Budget", BudgetSchema);

module.exports = {User, Budget};