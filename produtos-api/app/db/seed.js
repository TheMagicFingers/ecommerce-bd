    const faker = require('faker')
    let connection = app.infra.connectionFactory();
    
    //Insire 20 Usuario nos banco de dados
    function seedDB(){
        for(let i = 0 ; i < 20 ; i++){
            connection.query(`insert into clientes(nome_user,email_user,senha_user) values (
                ${Faker.fake("{name.findName,internet.email,internet.password}")}
            )`,(err,result) => {
                if (err) throw err
                console.log("seeded 20 users!!!")
            })
        }
    }
   
module.exports = seedDB;