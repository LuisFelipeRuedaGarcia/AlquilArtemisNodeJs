import {Router} from "express";
import { methodsHTTP as CategoriasControllers } from "../Controllers/Categorias.Controllers.js";
let router = Router();
router.get("/", CategoriasControllers.getCategorias /* (req,res)=>{
res.send("example");
} */)
export default router;