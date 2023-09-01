import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register/registerPage";
import { Login } from "../pages/Login/loginPage";
import { Home } from "../pages/Home/homePage.jsx";
import { Perfil } from "../pages/Perfil/perfilPage.jsx";
import {Header} from "../components/Header/index.jsx";
import {Mensagens} from "../pages//Mensagens/index.jsx";





export const AppRouter = () => {
  return (
   

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path='mensagens' element={<Mensagens/>}/>
        
       
      </Routes>
    </Router>
    
   
    
  );
  
};
