import getConnection from "../Db/Database.js"
const getProductos = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * from productos");
    console.log(result);
    res.json(result);
    };


export const methodsHTTP = {
    getProductos /* : getCosntructoras */
}