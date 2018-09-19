const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const BudgetSchema = new Schema({
    totalIncome: { type: Number, required: true },
    totalExpenses: { type: Number, required: true },
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

module.exports = User;
module.exports = Budget;