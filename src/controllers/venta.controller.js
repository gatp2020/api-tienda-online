import { getConnection } from "../database/connection";

export const getAllVenta = async (req,res)=>{
    const pool = await getConnection();
    const result = await pool.query('select * from venta');

    res.json(result.rows);
    return result.rows;
}
export const getVentaById = async (req,res)=>{
    const id = await req.params.id;
    const pool= await getConnection();
    console.log(id);

    const result = await pool.query('Select * from venta where id_venta=$1 ',[id]);
    res.json(result.rows);
    return result.rows;
}
export const createNewVenta= async (req,res)=>{
    const {total_venta} = await req.body;
    const {detalle,id_metodo_pago} = await req.body;
    const pool = await getConnection();
    console.log(total_venta,detalle,id_metodo_pago);

    pool.query('insert into venta(total_venta,detalle,id_metodo_pago) values ($1,$2,$3)',[total_venta,detalle,id_metodo_pago]);
    res.json('Elemento agregado');

}
export const deleteByIdVenta = async (req,res)=>{
    const id = await req.params.id
    const pool= await getConnection();

    pool.query('DELETE FROM venta WHERE id_venta = $1',[id]);
    res.json('Elemento eliminado');
}
export const editarByIdVenta = async (req,res)=>{
    const id = await req.params.id;
    const {total_venta,detalle,id_metodo_pago} = await req.body;
    const pool = await getConnection();

    pool.query('update venta set total_venta =$1, detalle=$2,Id_metodo_pago=$3 ',[total_venta,detalle,id_metodo_pago])
    res.json('Elemento editado')
}
