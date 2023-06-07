import { Router } from "express";
import { getAllproducto, createNewProducto, getProductoById, deleteProductoById, editProductoById } from "../controllers/producto.controller";

const router=Router();

//devolver todo categoria
router.get('/producto',getAllproducto);
//agregar
router.post('/producto',createNewProducto);
//devolver por id
router.get('/producto/:id',getProductoById);
//eliminar categoria
router.delete('/producto/:id',deleteProductoById);
//editar por id
router.put('/producto/:id',editProductoById);

export default router;