import { getConnection } from "../database/connection";

export const getAllproducto = async (req, res) =>{
    

    const pool = await getConnection();
    const result = await pool.query('select * from producto');
    console.log(result);

    res.json(result.rows);
    return result;
}
export const createNewProducto = async (req,res) =>{
    let precio_producto=parseInt(req.body.precio_producto);
    let descuento_producto=parseInt(req.body.descuento_producto);
    let stock = parseInt(req.body.stock);
    
    const {id_categoria,nombre_producto} = req.body;    
   
    const pool = await getConnection();

    pool.query ('INSERT INTO producto (precio_producto,descuento_producto,nombre_producto,stock,id_categoria) VALUES ($1,$2,$3,$4,$5)',[precio_producto,descuento_producto,nombre_producto,stock,id_categoria]);
    console.log(nombre_producto);
    res.json('producto generada');
}
export const getProductoById= async (req,res)=>{
    
    try {
        const id= await req.params.id;
        console.log(id);
        const pool= await getConnection();
        const result = await pool.query('Select * from producto where id_producto = $1',[id]);

        if(result.rowCount==0){
            res.status(404).json({msg:'El elemento no fue encontrado'});
        }else{
            res.json(result.rows);
        }
    } catch (error) {
        console.error(error);
    }
}
export const deleteProductoById = async (req,res)=>{
    const id= await req.params.id;

    
    try {
        const pool = await getConnection();

        const result = pool.query('DELETE FROM producto WHERE id_producto = $1',[id]);

        if((await result).rowCount==0){
            res.status(404).json({msg:'Elemento no encontrado'})
        }else{
            res.json('elemento eliminado');
        }    
    } catch (error) {
        console.error(error);
    }
    
}
export const editProductoById = async (req,res)=>{
    
    const id = await req.params.id;
    let precio_producto=parseInt(req.body.precio_producto);
    let descuento_producto=parseInt(req.body.descuento_producto);
    let stock = parseInt(req.body.stock);
    
    const {id_categoria,nombre_producto} = req.body;  
    
    try {
        const pool = await getConnection();

        const result = pool.query("update producto set precio_producto=$1, descuento_producto=$2,id_categoria=$3,stock=$4, nombre_producto=$5 where id_producto = $6 ",[precio_producto,descuento_producto,id_categoria,stock, nombre_producto,id])
        
        if(result.rowCount==0 ){
            res.status(404).json({msg:'Elemto no encontrado'})
        }else{
            res.json('elemento editado');
        }    
    } catch (error) {
        console.log(error);
    }     
}