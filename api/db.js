var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '52.211.220.220',
  user: 'homestead',
  password: 'secret',
  database: 'spPanel',
  multipleStatements: true,
});

connection.connect(function(err) {
  if(err) {
    console.log('error connecting: ', err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;