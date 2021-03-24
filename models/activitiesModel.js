const db = require('./conn');

class ActivitiesModel {
    constructor(id, day, vacation_id, breakfast, morning_a, lunch, afternoon_a, dinner, evening_a) {
        this.id = id;
        this.day = day;
        this.vacation_id = vacation_id;
        this.breakfast = breakfast;
        this.morning_a = morning_a;
        this.lunch = lunch;
        this.afternoon_a = afternoon_a;
        this.dinner = dinner;
        this.evening_a = evening_a;
        
    }
    
    static async getAll() {
        try {
            const query =  `SELECT * FROM activities;`;
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message
        }
    }

    static async getByVacationId(vacation_id, day) {
        try {
            const query = `
            SELECT * 
            FROM activities 
            WHERE vacation_id = ${vacation_id}
                AND day = ${day};`;
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message
        }
    }

    static async addDay(day, vacation_id) {
        try {
            const response = await db.result(`INSERT INTO activities (day, vacation_id) VALUES ($1, $2);`, [day, vacation_id]);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }

    static async updateEntry(id, breakfast, morning_a, lunch, afternoon_a, dinner, evening_a) {
        try{
            const response = await db.one(`
            UPDATE activities
            SET breakfast = '${breakfast}',
            morning_a = '${morning_a}',
            lunch = '${lunch}',
            afternoon_a = '${afternoon_a}',
            dinner = '${dinner}',
            evening_a = '${evening_a}',
            WHERE id = ${id};`);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }
}

module.exports = ActivitiesModel;