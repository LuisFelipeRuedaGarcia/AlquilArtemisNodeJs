import getConnection from "../Db/Database.js"
const getCosntructoras = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * from constructoras");
    console.log(result);
    res.json(result);
    };


export const methodsHTTP = {
    getCosntructoras /* : getCosntructoras */
}