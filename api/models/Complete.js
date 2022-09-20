const db = require('../dbConfig/init');

module.exports = class Complete {
    constructor(data) {
        this.data = data.date
        this.id = data.habit_id
    }

    static findByHabitId(id){
        return new Promise (async (resolve, reject) => {
            try {
                let completionDates = await db.query(`SELECT date FROM completed WHERE habit_id = $1;`, [ id ]);
                resolve (new Complete(completionDates.rows[0]))
            } catch (err) {
                reject('Achievement not found');
            };
        });
    };

    // delete dates along with achivement (tue)
    // destroy(){
    //     return new Promise(async(resolve, reject) => {
    //         try {
    //             const result = await db.query(`DELETE date FROM completed WHERE id = $1 RETURNING id`, [ this.id ]);
    //             resolve(`Achievements ${result.id} was deleted`)
    //         } catch (err) {
    //             reject('Achievements could not be deleted')
    //         }
    //     })   
    // }



}
