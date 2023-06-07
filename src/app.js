import express from 'express';
import config from './config';

import categoriaRouter from './routers/categoria.router'
import productoRouter  from './routers/producto.router'
import metodoPagoRouter from './routers/metodo_pago.router'
import ventaRouter from './routers/venta.router'

const app= express();

//setting
app.set('port', config.port );

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(categoriaRouter,productoRouter,metodoPagoRouter,ventaRouter);


export default app;