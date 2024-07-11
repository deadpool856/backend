const db = require('../helpers/database');


exports.getById = async function getById(id){
    let query = "SELECT * FROM users WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

exports.getAll = async function getAll (page, limit, order) {
    let query = "SELECT * FROM users;";
    let data = await db.run_query(query);
    return data;
}

exports.add = async function add (users) {
    let query = "INSERT INTO users SET ?";
    let data = await db.run_query(query,users);
}

