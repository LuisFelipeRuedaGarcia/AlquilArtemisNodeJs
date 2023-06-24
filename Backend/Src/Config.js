import {config} from "dotenv";

config();

export default {
    Host: process.env.HOST,
    Database : process.env.DATABASE,
    User: process.env.USERX,
    Password: process.env.PASSWORD
}