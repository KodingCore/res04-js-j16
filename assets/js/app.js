import { CreatHeader } from "./components/Header.js";  
import { CreatMain } from "./components/Main.js";  
import { CreatFooter } from "./components/Footer.js";
 

let App = { 
    components : {  
        CreatHeader,
        CreatMain,
        CreatFooter,
    },
    template: `
        <CreatHeader />
        <CreatMain />
        <CreatFooter />
    `
};

export { App };