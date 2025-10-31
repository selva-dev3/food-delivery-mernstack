import express from 'express';
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, verfiyOrder,userOrder, upadateSatus } from '../controllers/orderController.js';

const orderRouter = express.Router();


orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verfiyOrder);
orderRouter.post('/userorders',authMiddleware,userOrder);
orderRouter.get('/list',listOrders);
orderRouter.post('/status',upadateSatus)




export default orderRouter;