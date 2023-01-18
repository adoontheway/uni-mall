const sqlite3 = require('sqlite3').verbose();
const dbname = 'jingdong';
const db = new sqlite3.Database(dbname);

db.serialize(()=>{
	const sql = ``;
	db.run(sql);
})