import getConnection from "../Db/Database.js"
const getConstructoras = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * from constructoras");
    console.log(result);
    res.json(result);
    };


export const methodsHTTP = {
    getConstructoras /* : getCosntructoras */
}