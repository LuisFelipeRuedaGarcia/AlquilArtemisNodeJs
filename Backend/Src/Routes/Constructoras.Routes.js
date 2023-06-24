import {Router} from "express";
import { methodsHTTP as ConstructorasControllers } from "../Controllers/Constructoras.Controllers.js";
let router = Router();
router.get("/", ConstructorasControllers.getConstructoras /* (req,res)=>{
res.send("example");
} */)
export default router;