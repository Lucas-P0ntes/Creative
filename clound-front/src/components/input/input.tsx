import "./style.css";

type input={
    placeholder:string;
    onChange:any;
    value:any
    
}


export function Inputbuscar(){

return <> <input  className="input_busca"type="text"/> </>
}


export function Input(props:input){

    return <> <input  className="input" placeholder={props.placeholder} onChange={props.onChange} value={props.value}/> </>
    }