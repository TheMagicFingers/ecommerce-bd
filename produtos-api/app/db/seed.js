    let mysql = require('mysql')
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'dbstore'
    })

    const faker = require('faker')
    //Insire 20 Usuario nos banco de dados
    function seedDB(){
        for(let i = 0 ; i < 20 ; i++){    
                // Insere 20 Usuarios - Senha padrão 123
                connection.query(`insert into clientes(nome_user,email_user,senha_user) values (
                    ${faker.fake("'{{name.findName}}','{{internet.email}}','123'")}
                )`,(err,result) => {
                    if (err) throw err
                    console.log("seeded 20 users!!!")
                })
                // Insere 20 produtos
                connection.query(`insert into produtos(descricao,preco_unit,qtd_est,url_img) values (
                    ${faker.fake("'{{commerce.productName}}','{{commerce.price}}',42,'https://tudoela.com/wp-content/uploads/2016/08/beneficios-da-melancia-810x540.jpg'")}
                )`,(err,result) => {
                    if (err) throw err
                    console.log("seeded 20 users!!!")
                })
            }
        }
    
module.exports = seedDB;