const express = require('express'); 
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'curriculoBanco.db';

const port = process.env.PORT || 3200;

app.listen(port, () => {
  console.log(`Server running at: ${port}/`);
});

app.get('/getProjectData', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = `SELECT
                   *
                FROM Projetos`;
    
    db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.send(JSON.stringify(rows));
	});
	db.close(); // Fecha o banco
});

// app.post('/InsertProjectInfo', (req, res) => {
	// res.statusCode = 200;
	// res.setHeader('Access-Control-Allow-Origin', '*');

	// var db = new sqlite3.Database(DBPATH);
	// var sql =
// }