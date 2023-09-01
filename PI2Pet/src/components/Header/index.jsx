
import './Header.css';
import casa from '../../assets/ico/casa.svg';
import mensagens from '../../assets/ico/mensagens.svg';
import {Link} from 'react-router-dom';
import pet from '../../assets/img/pet.png'

export const Header = () =>{

    const {pathname} = window.location;
    let classeUsuario = '';
    let classePerfil = 'none';
    let classeHeader = '';
    let classeNone = 'none';

    if(pathname === '/' || pathname === '/home' || pathname === '/mensagens' || pathname === '/perfil'|| pathname === '/login'|| pathname === '/register'){
         classeHeader = 'header';
         classeNone = 'icone-header-usuario'
    };

    if(pathname === '/perfil') {
        classePerfil = ''
        classeUsuario = 'none';
    };

    return (
        <header className={classeHeader} data-header>
            <nav  className='nav-header' style={{minWidth:'9rem'}} >
                <Link to='home'><img src={pet} alt='Logo do PetAdote' className='logo-header' /></Link>
                <Link to='home' ><img src={casa} alt=''  className='icone-header'/></Link>
                <Link to='mensagens'><img src={mensagens} alt ='' className='icone-header'/></Link>
                <Link to='login'><div className="div-login-btn"><button className="login-btn">Entrar</button></div></Link>
                <Link to='register'><div className="div-login-btn2"><button className="login-btn2">Cadastre-se</button></div></Link>
            </nav>

        </header>
    )
}

