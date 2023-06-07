import { Router } from "express";
import { createNewVenta, deleteByIdVenta, editarByIdVenta, getAllVenta, getVentaById } from '../controllers/venta.controller'

const router = Router();

//mostrar todo
router.get('/venta',getAllVenta);
//mostrar por id
router.get('/venta/:id',getVentaById);
//agregar venta
router.post('/venta',createNewVenta);
// eliminar
router.delete('/venta/:id',deleteByIdVenta);
// editar
router.put('/venta/:id',editarByIdVenta);

export default router;