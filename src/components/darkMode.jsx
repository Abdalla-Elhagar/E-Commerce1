import { useEffect, useState } from "react";
import dark from "../assets/navbar/dark-mode-button.png"
import light from "../assets/navbar/light-mode-button.png"


export default function DarkMode(){
    const [theme , setTheme] = useState(
        localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
    );
    const Element = document.documentElement ;
    useEffect(()=>{
        if(theme === "dark") {
            Element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            Element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);
    
    return(
        <div className=" relative w-12 h-14 flex items-center">
            <img className={`dark absolute cursor-pointer w-12 rounded-full ${theme === "light"?"opacity-0":"opacity-100"}`} onClick={()=> setTheme(theme === "light" ? "dark" : "light")} src={dark} alt="Dark" />
            <img className={`light absolute cursor-pointer w-12 rounded-full ${theme === "dark"?"opacity-0":"opacity-100"}`} onClick={()=> setTheme(theme === "light" ? "dark" : "light")} src={light} alt="light" />
        </div>
    );
}