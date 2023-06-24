import {Router} from "express";
import { methodsHTTP as ProductosControllers } from "../Controllers/Productos.Controllers.js";
let router = Router();
router.get("/", ProductosControllers.getProductos /* (req,res)=>{
res.send("example");
} */)
export default router;