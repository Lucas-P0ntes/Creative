import { Navbar } from "../../components/Navbar/Navbar"

import React, { useEffect, useState } from "react";
import "./style.css";

import api from "../../api/apis"



export function Wellcome(){

    const [user, setUser] = useState<any[]>([]);

    useEffect(() => {
      api
        .get("/image")
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    console.log(user);
    return(
    
        <>
        <Navbar />
    <div className="boxpage">
        {user.map((itens)=>{
            return (
        
                <div className="card-wellcome">
                    <img className="img_page" src={"http://localhost:8080/imagens/"+itens?.img}></img> 
                    <h1>{itens?.id}</h1>
                </div>

             ) 
        }) }
        </div>
    
  
    </>  
    )
}


