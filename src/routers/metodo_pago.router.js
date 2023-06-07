import {Router} from 'express';
import {createNewMP, deleteMPByID, editByidMP, getAllMetodoPago, getMPById} from '../controllers/metodo_pago.controller'

const router = Router();

//devolver todo metodo pago
router.get('/metodo_pago',getAllMetodoPago);

//devolver por id
router.get('/metodo_pago/:id',getMPById);

//agregar nuevo
router.post('/metodo_pago',createNewMP);

//eliminar 
router.delete('/metodo_pago/:id',deleteMPByID);

//editar
router.put('/metodo_pago/:id',editByidMP);


export default router;