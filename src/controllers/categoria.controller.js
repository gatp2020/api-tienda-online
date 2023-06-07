import { getConnection } from "../database/connection";

export const getAllCategoria = async (req, res) =>{
    

    const pool = await getConnection();
    const result = await pool.query('select * from categoria');
    console.log(result);

    res.json(result.rows);
    return result;
}

export const createNewCategoria = async (req,res) =>{
    const {nombre_categoria} = req.body;
    if(nombre_categoria == null){
        return res.status(400).json({msg:'bad request, porfavor ingrese todos los datos'});
    }
    const pool = await getConnection();

    pool.query ('INSERT INTO categoria (nombre_categoria) VALUES ($1)',[nombre_categoria]);
    console.log(nombre_categoria);
    res.json('categoria generada');
}

export const getCategoriaById= async (req,res)=>{
    
    try {
        const id= await req.params.id;
        console.log(id);
        const pool= await getConnection();
        const result = await pool.query('Select * from categoria where id_categoria = $1',[id]);

        if(result.rowCount==0){
            res.status(404).json({msg:'El elemento no fue encontrado'});
        }else{
            res.json(result.rows);
        }
    } catch (error) {
        console.error(error);
    }
}

export const deleteById = async (req,res)=>{
    const id= await req.params.id;

    
    try {
        const pool = await getConnection();

        const result = pool.query('DELETE FROM categoria WHERE id_categoria = $1',[id]);

        if((await result).rowCount==0){
            res.status(404).json({msg:'Elemento no encontrado'})
        }else{
            res.json('elemento eliminado');
        }    
    } catch (error) {
        console.error(error);
    }
    
}

export const editCategoriaById = async (req,res)=>{
    
    const id = await req.params.id;
    const {nombre_categoria} = await req.body;
    console.log('***********',nombre_categoria)
    
    try {
        const pool = await getConnection();

        const result = pool.query("update categoria set nombre_categoria=$1 where id_categoria = $2 ",[nombre_categoria,id])
        
        if(result.rowCount==0 || nombre_categoria == null || res.error==true){
            res.status(404).json({msg:'Elemto no encontrado'})
        }else{
            res.json('elemento editado');
        }    
    } catch (error) {
        console.log(error);
    }     
}

