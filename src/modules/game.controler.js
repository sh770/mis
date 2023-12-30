import { attack } from "./game.model.js"

export const addButetonEvent = () =>{
    document.querySelector("button").addEventListener("click",()=>{
        attack()
        // console.log("attack!");
    })
}