import {Router} from "express";
let router = Router();
router.get("/",(req,res)=>{
res.send("example");
})
export default router;