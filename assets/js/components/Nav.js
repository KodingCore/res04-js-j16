import { CreatLinks } from "./Links.js";

let CreatNav = {
    data () {  
        return {  
            links : [  
                {  
                    link : "Accueil"
                },
                {  
                    link : "À propos" 
                },  
                {  
                    link : "Contact" 
                }  
            ]  
        }  
    }, 
    components : {
        CreatLinks
    },
    template: `  
        <nav>      
            <ul>
                <CreatLinks v-for="link in links" :link="link"/>
            </ul>
        </nav>
    `
}

export { CreatNav };