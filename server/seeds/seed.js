const db = require('../config/connection');
const { User, Drink} = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await Drink.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i=0; i < User.Drink.length; i++) {
            const {_id } = await Drink.create()//API call link here???
            const user = await User.findOneAndUpdate(
                { username: drinkText},
                {
                    $addToSet: {
                        drink: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});