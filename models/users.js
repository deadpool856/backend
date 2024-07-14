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

exports.findByUsername = async function getByUsername(username){
    const query ="SELECT * FROM users where username = ?;";
    const user = await db.run_query(query, username);
    return user;
}


// Delete an article by ID
exports.delete = async function del(id) {
    let query = "DELETE FROM users WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

// Update an existing article
exports.update = async function update(id, article) {
    let query = "UPDATE users SET ? WHERE ID = ?";
    let values = [article, id];
    let data = await db.run_query(query, values);
    return data;
}