import express from "express";
/* express.set(); */
// // App = express(); importante declarar let!
let App = express();

App.set("port",5000);
/* 
App.listen(App.get("port"));
no va aqui, va en Index*/
export default App;
