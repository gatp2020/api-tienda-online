const {Pool} = require('pg');

const dbSetting=({
    user: 'postgres',
    password:'1234',
    host:'localhost',
    database:'tienda-online',
})

export async function getConnection(){
    try {
        const pool = new Pool(dbSetting);
        //const result = await pool.query("select 1")
        //console.log(result);
        return pool;
    } catch (error) {
        console.error(error)
    }
}

//getConnection();