import express from "express";
import ConstructorasRoutes from "./Routes/Constructoras.Routes.js";
import CategoriasRoutes from "./Routes/Categorias.Routes.js";
import EmpleadosRoutes from "./Routes/Empleados.Routes.js";
import ProductosRoutes from "./Routes/Productos.Routes.js";
/* express.set(); */
// // App = express(); importante declarar let!
let App = express();

App.set("port",5000);
/* 
App.listen(App.get("port"));
no va aqui, va en Index*/

App.use("/Api/Constructoras",ConstructorasRoutes);
App.use("/Api/Categorias",CategoriasRoutes);
App.use("/Api/Empleados",EmpleadosRoutes);
App.use("/Api/Productos",ProductosRoutes);
export default App;
