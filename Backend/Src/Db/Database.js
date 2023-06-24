import mysql from "promise-mysql"
import config from "../Config.js"

const Connection = mysql.createConnection({
    host : config.Host,
    database: config.Database,
    user:config.User,
    password:config.Password
})

const getConnection = () =>{
    return Connection;
}

export default getConnection;