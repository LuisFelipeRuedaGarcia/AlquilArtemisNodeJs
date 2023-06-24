//the main structure of files and folders is created
import App from "./App.js";
let Main=()=>{

    App.listen(App.get("port"));
    console.log(`you knew it: ${App.get("port")}`);
}
Main();