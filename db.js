const mysql = require('mysql2')

 const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'s@bin@!1',
    database:'todo_project'
})
// db.connect(function(err){//throw error if occur
//     if(err) throw err;
//     console.log("mysql connected")
// });
module.exports = db 