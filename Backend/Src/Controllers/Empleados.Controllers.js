import getConnection from "../Db/Database.js"
const getEmpleados = async (req,res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT * from empleados");
    console.log(result);
    res.json(result);
    };


export const methodsHTTP = {
    getEmpleados /* : getCosntructoras */
}