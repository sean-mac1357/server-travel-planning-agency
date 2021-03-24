const db = require('./conn');

class VacationModel {
    constructor(id, guest_name, v_name, start_date, end_date) {
        this.id = id;
        this.guest_name = guest_name;
        this.v_name = v_name;
        this.start_date = start_date;
        this.end_date = end_date;
    }

    static async getAll() {
        try {
            const query = `SELECT * FROM vacations;`;
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message;
        }
    }
    static async getById(id) {
        try {
            const query = `
            SELECT * 
            FROM vacations 
            WHERE id = ${id};`;
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message;
        }
    }
    static async getByGuestName(guest_name) {
        try {
            const query = `SELECT * FROM vacations WHERE guest_name = '${guest_name}';`;
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async addEntry(v_name, guest_name, start_date, end_date, days) {
        try {
            const response = await db.result(`INSERT INTO vacations (v_name, guest_name, start_date, end_date, days) VAlUES ($1, $2, $3, $4, $5);`, [v_name, guest_name, start_date, end_date, days]);
            return response;
        } catch(error) {
            console.log("error", error.message)
            return error.message;
        }
    }

    static async updateEntry(id, name_hotel, address_hotel, hotel_lat, hotel_lon) {
        try {
            const response = await db.one(`
                UPDATE vacations 
                SET name_hotel = '${name_hotel}', address_hotel = '${address_hotel}', hotel_lat = '${hotel_lat}', hotel_lon = '${hotel_lon}'
                WHERE id = ${id};`);
                return response;
        } catch(error){
            console.log("error", error.message)
            return error.message;
        }
    }

    static async updateDays(id, days) {
        try {
            const response = await db.one(`
            UPDATE vacations
            SET days = ${days}
            WHERE id = ${id};`);
            return response;
        } catch(error){
            console.log("error", error.message)
            return error.message;
        }
    }
}

module.exports = VacationModel;