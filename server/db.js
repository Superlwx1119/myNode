const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',  // 新建数据库连接时的 主机名或ID地址 内容
  user: 'root', 
  password: 'root', // root 密码
  database: 'test', // 数据库名
  port: '3306'
}
const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  port: mysqlConfig.port,
  multipleStatements: true    // 多语句查询
});

var getValue = function() {
    pool.getConnection((err, connection) => {
      var sql = 'SELECT * FROM test'
      connection.query(sql, [1], (err, result) => {
          console.log(result);
          connection.release();
      })
    })
  }
getValue();

// var setValue = function() {
//   pool.getConnection((err, connection) => {
//     var sql = 'INSERT INTO test(id, name) VALUES (1, "blog")'
//     connection.query(sql, (err, result) => {
//         console.log(result);
//         connection.release();
//     })
//   })
// }

// setValue();