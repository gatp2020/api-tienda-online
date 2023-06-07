import { Router } from "express";
import { createNewCategoria, deleteById, editCategoriaById, getAllCategoria, getCategoriaById } from "../controllers/categoria.controller";

const router=Router();

//devolver todo categoria
router.get('/categoria', getAllCategoria);
//agregar
router.post('/categoria',createNewCategoria);
//devolver por id
router.get('/categoria/:id',getCategoriaById);
//eliminar categoria
router.delete('/categoria/:id',deleteById);
//editar por id
router.put('/categoria/:id',editCategoriaById);

export default router;