
import {
  BrowserRouter as Router , 
  Routes,
  Route,
} from "react-router-dom";
import { Wellcome } from "./page/wellcome/wellcome";
import { UploadImg } from "./page/upload/UploadImg";
import { Excluir } from "./page/excluir/Excluir";
function AppRouts(){
  return (
    <Router> 
      <Routes>
      <Route path="/Wellcome" element={ <Wellcome />} />
      <Route path="/UploadImg" element={ <UploadImg />} />
      <Route path="/Excluir" element={ <Excluir />} />
      </Routes>
    </Router>
   
  );
};
export default AppRouts;