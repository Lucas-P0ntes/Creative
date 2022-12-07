import  { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/apis";
import { Input } from "../../components/input/input";
import { Navbar } from "../../components/Navbar/Navbar";
import "./style.css"

export function UploadImg() {
    const[error, seterror]=useState<any[]>([])

    const [nome,setnome]=useState<any>("");
    const [img,setImg]=useState<any>();
 
    const salvar = async (e: any) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", nome);
        formData.append("file",img);
        
            const h={
                body: formData,
                'headers':{
                    'Content-Type': 'multipart/form-data'
                }
            }

        await api.post("/image",formData,h).
        then((Response)=>{
            console.log(Response);
        }).catch((e)=>{
            console.log(e)
            console.log(Response)
                console.log("Deu erro ai irmão");
              });
        console.log(nome);
  
        
    }
     
    return(
        <>
        <Navbar />
        <div className="box_upload">
            <form className="box_form" onSubmit={salvar} >
                <h1>Upload Imagem</h1>
                <Input placeholder="Nome da imagem" onChange={(e:any) => setnome(e.target.value)} value={nome}/>              
                <input type="file" name="img" accept="image/*"  onChange={(e:any)=> setImg(e.target.files[0])}/>
                
                <button className="bnt_ok" type="submit">Enviar</button>
               
            </form>
        </div>
        </>
    );

}