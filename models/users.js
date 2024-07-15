const db = require('../helpers/database');
const bcrypt = require ('bcrypt');
const saltRounds = 10;

const hashPassword = async function(password, saltRounds) {
    return await bcrypt.hash(password, saltRounds);
  }

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

exports.findByUsername = async function getByUsername(username){
    const query ="SELECT * FROM users where username = ?;";
    const user = await db.run_query(query, username);
    return user;
}



exports.update = async function update(id, userData) {
    if (userData.password){ 
    const password = userData.password;               
    userData.password = await hashPassword(password, saltRounds); 
    }
    let query = 'UPDATE users SET ? WHERE id = ?';
    let result = await db.run_query(query, [userData, id]);
    return result;
  }

//create a new user in the database
exports.add = async function add (user) {
    const password = user.password;
    user.password = await hashPassword(password, saltRounds);
    let query = "INSERT INTO users SET ?";
    let data = await db.run_query(query, user);
    return data;
  }

  // Delete an article by ID
exports.delete = async function del(id) {
    let query = "DELETE FROM users WHERE ID = ?";
    let values = [id];
    let data = await db.run_query(query, values);
    return data;
}
