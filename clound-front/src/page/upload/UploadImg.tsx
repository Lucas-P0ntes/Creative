import  { useState } from "react";
import api from "../../api/apis";
import { Input } from "../../components/input/input";
import { Navbar } from "../../components/Navbar/Navbar";
import "./style.css"

export function UploadImg() {
    const[error, seterror]=useState<any[]>([])

    const [nome,setnome]=useState<string>();
    const [numero,setnumero]=useState<string>();
    const [img,setImg]=useState<any>();
 
    const salvar = async (e: any) =>{
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("file",img);
        
            const h={
                'headers':{
                    'Content-Type': 'multipart/form-data'
                }
            }

        await api.post("/image",formData,).
        then((Response)=>{
            console.log(Response);
        }).catch((e)=>{
            console.log(e)
            console.log(Response)
                console.log("Deu erro ai irmão");
                
              });
        
  
        
    }
     
    return(
        <>
        <Navbar />
        <div className="box_upload">
            <form className="box_form" onSubmit={salvar} >
                <h1>Upload Imagem</h1>
                <input type="file" name="img" accept="image/*"  onChange={(e:any)=> setImg(e.target.files[0])}/>
                <button className="bnt_ok" type="submit"  >Subir</button>
            </form>
        </div>
        </>
    );

}