
import {
  BrowserRouter as Router , 
  Routes,
  Route,
} from "react-router-dom";
import { Wellcome } from "./page/wellcome/wellcome";
import { UploadImg } from "./page/upload/UploadImg";
function AppRouts(){
  return (
    <Router> 
      <Routes>
      <Route path="/Wellcome" element={ <Wellcome />} />
      <Route path="/UploadImg" element={ <UploadImg />} />
      </Routes>
    </Router>
   
  );
};
export default AppRouts;