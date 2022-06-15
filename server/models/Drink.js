const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    isAlcoholic : {
        type: Boolean,
        require: true
    }, 
    haveMade: {
        type: Boolean,
        required: true,
    },
    comments: {
        type: String,
        required: false, 
    },
    drinkText: {
        type: String,
        required: true, 
    }
});

// drinkSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10; 
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

// drinkSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// // };

const Drink = model('Drink', drinkSchema);

module.exports = Drink;