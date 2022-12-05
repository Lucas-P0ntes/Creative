import "./style.css";
 type  BntNavbarProps ={
    text: string;
}

export function BntNavbar(props: BntNavbarProps){
    return(
        <a className="bntNavBar">{props.text}</a>
    );
}