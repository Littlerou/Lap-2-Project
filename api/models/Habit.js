const db = require('../dbConfig/init');

const User = require('./User')

module.exports = class Habit {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.user = data.user_id
    }

    static findByUserId(id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`SELECT * FROM habits WHERE user_id = $1;`, [ id ]);
                resolve (new Habit(habitData.rows[0]))
            } catch (err) {
                reject('User not found');
            };
        });
    };

    static create(description,user_id){
        return new Promise (async (resolve, reject) => {
            try {
                let habitData = await db.query(`INSERT INTO habits (description,user_id) VALUES ($1,$2) RETURNING *;`, [ description, user_id]);
                resolve (new Habit(habitData.rows[0]));
            } catch (err) {
                reject('Habit could not be created');
            };
        });
    };

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const result = await db.query(`DELETE FROM habits WHERE id = $1 RETURNING id`, [ data.user_id ]);
                resolve(`Habit ${result.id} was deleted`)
            } catch (err) {
                reject('Habit could not be deleted')
            };
        });  
    };
}

