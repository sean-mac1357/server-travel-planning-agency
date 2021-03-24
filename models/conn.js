'use strict';

const host = "queenie.db.elephantsql.com",
    database = "ozmgdzxb",
    user = "ozmgdzxb",
    password = "n4-v_yrF70kDd3FMhiKf8e2kqkEU88qk";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY: ', event.query)
    }
});

const options = {
    host,
    database,
    user,
    password
}

const db = pgp(options);

module.exports = db;