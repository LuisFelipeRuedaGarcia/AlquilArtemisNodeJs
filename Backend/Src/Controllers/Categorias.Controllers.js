import getConnection from "../Db/Database.js"
const getCategorias = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * from categorias");
    console.log(result);
    res.json(result);
    };


export const methodsHTTP = {
    getCategorias /* : getCosntructoras */
}