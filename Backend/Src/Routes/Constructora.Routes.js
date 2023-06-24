import {Router} from "express";
import { methodsHTTP as ConstructoraControllers } from "../Controllers/Constructora.Controllers.js";
let router = Router();
router.get("/", ConstructoraControllers.getCosntructoras /* (req,res)=>{
res.send("example");
} */)
export default router;