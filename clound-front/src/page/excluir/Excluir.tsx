import { Navbar } from "../../components/Navbar/Navbar"
import { Input } from "../../components/input/input"
import {  } from "../../components/bnt/BntNavbar"
import "./style.css"
export function Excluir(){



    return(
        <>
        <Navbar />
        <div>
             <form className="box_form"  >
                <h1> Apagar fotos</h1>
                <Input placeholder="Numero Imagem a ser excluida" onChange={null} value={null}/>              
                <button className="bnt_ok" type="submit">Excluir</button>
               
            </form>
          
        </div>
        </>
    )

}