import {Router} from "express";
import { methodsHTTP as EmpleadosControllers } from "../Controllers/Empleados.Controllers.js";
let router = Router();
router.get("/", EmpleadosControllers.getEmpleados /* (req,res)=>{
res.send("example");
} */)
export default router;