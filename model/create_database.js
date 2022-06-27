// const mysql = require('mysql')
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Mayuri@123",
//     database: "company"
// })

// db.connect(function(err){
//     if (err) throw err;
//     console.log("connected")
// })
// db.query("CREATE DATABASE company",function(err,result){
//     if (err){
//         console.log("Database alredy created");
//     }
//     else{
//         console.log("Database created")
//     }
// });

const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Mayuri@123',
        database: 'company'
    }
}
const knex = require('knex')(options);
  
  
// knex.schema.hasTable('registration').then(function (exists) {
//     if (!exists) {
//         knex.schema.createTable('registration', (table) => {
//             table.increments('user_id').primary();
//             table.string('firstname', 255).notNullable()
//             table.string('lastname', 255).notNullable()
//             table.string('email', 255).notNullable()
//             table.string('password', 255).notNullable()
//             table.unique('email')
//         }).then(() => console.log("table created"))
//             .catch((err) => { console.log("alredy creted") })
  
            
//     }
// })


// knex.schema.hasTable('product').then(function (exists) {
//     if (!exists) {
//         knex.schema.createTable('product', (table) => {
//             table.increments('user_id').primary();
//             table.string('name', 255).notNullable()
//             table.string('description', 255).notNullable()
//             table.string('quantity', 255).notNullable()
//             table.string('price', 255).notNullable()
//         }).then(() => console.log("table created"))
//             .catch((err) => { console.log("alredy creted") })
  
            
//     }
// })

module.exports=knex