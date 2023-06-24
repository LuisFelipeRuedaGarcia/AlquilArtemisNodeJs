import express from "express";
import ConstructorasRoutes from "./Routes/Constructoras.Routes.js";
/* express.set(); */
// // App = express(); importante declarar let!
let App = express();

App.set("port",5000);
/* 
App.listen(App.get("port"));
no va aqui, va en Index*/

App.use("/Api/Constructoras",ConstructorasRoutes);
export default App;
