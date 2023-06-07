import { getConnection } from "../database/connection";

export const getAllMetodoPago= async (req,res)=>{
    const pool = await getConnection();
    const result = await pool.query('select * from metodo_pago');
    console.log(result);
    res.json(result.rows);
    return result;
}
export const getMPById= async (req,res)=>{
    try {
        const id= await req.params.id;
        const pool = await getConnection();
        const result = await pool.query('Select * from metodo_pago where id_metodo_pago = $1',[id]);

        if(result.rowCount==0){
            res.status(404).json({msg:'El elemento no fue encontrado'});
        }else{
            res.json(result.rows);
        }
    } catch (error) {
        console.error(error);     
    }
}
export const createNewMP= async (req,res)=>{
    const {tipo} = await req.body;
    const pool= await getConnection();
    

    pool.query('INSERT INTO metodo_pago (tipo) VALUES ($1)',[tipo]);
    res.json('metodo pago generado');
}
export const deleteMPByID= async (req,res)=>{
    const id = await req.params.id;
    const pool= await getConnection();


    pool.query('DELETE FROM metodo_pago WHERE id_metodo_pago = $1',[id]);
    res.json('Elemento eliminado')
}

export const editByidMP = async (req,res) =>{
    const id = await req.params.id;
    const {tipo} = await req.body;
    const pool = await getConnection();

    console.log(id,tipo);

    pool.query('UPDATE metodo_pago set tipo=$1 where id_metodo_pago=$2',[tipo,id]);
    res.json('Elemento editado');
}