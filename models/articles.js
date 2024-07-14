const db = require('../helpers/database');


exports.getById = async function getById(id){
    let query = "SELECT * FROM articles WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

exports.getAll = async function getAll (page, limit, order) {
    let query = "SELECT * FROM articles;";
    let data = await db.run_query(query);
    return data;
}

exports.add = async function add (articles) {
    let query = "INSERT INTO articles SET ?";
    let data = await db.run_query(query,articles);
}

// Delete an article by ID
exports.delete = async function del(id) {
    let query = "DELETE FROM articles WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}

// Update an existing article
exports.update = async function update(id, article) {
    let query = "UPDATE articles SET ? WHERE ID = ?";
    let values = [article, id];
    let data = await db.run_query(query, values);
    return data;
}