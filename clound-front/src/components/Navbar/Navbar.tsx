import "./style.css";
import {Link} from 'react-router-dom';
import logo from "./../../assets/logo.png"
import {Input} from "../input/input"
import {BntNavbar} from "../bnt/BntNavbar"
export function Navbar(): JSX.Element{
    return(
        <div className="bigBox">
            <div className="smallbox"><h1 className="h1-navbar"><img src={logo} alt="Img de nuvem" />Creative</h1>
                
                
                <div>
                    <Input />
                </div>

                <div>
                <Link to="/wellcome"  className="Link">
                  wellcome
                 </Link>
                   
                </div>

                <div>
                <Link to="/UploadImg"  className="Link">
                  Upload Img
                 </Link>
                   
                </div>
            </div>
            
        </div>
    );
}