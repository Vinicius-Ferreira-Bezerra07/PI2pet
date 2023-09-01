import './Home.css';
import Card from '../../components/Card';
import alteraEstiloBody from '../../utils/altera-estilo-body';
import alteraHeader from '../../utils/altera-header';
import alteraIconeUsuario from '../../utils/altera-icone-usuario';
import pets from '../../data/pets.jsx'


// console.log(localStorage.getItem(id_user));

export const Home = () => {

    alteraEstiloBody('body-home');



    alteraHeader(true);
    alteraIconeUsuario(false);
    return (
        <>
            <section className='home'>
                <p className='home__paragrafo'>Olá! <br /> Veja os amigos disponíveis para adoção!</p>
                {pets.map(pet => <Card nome={pet.nome} img={pet.img} idade={pet.tamanho}
                    caracteristicas={pet.caracteristicas} tamanho={pet.tamanho}
                    localidade={pet.localidade} />)}
            </section>
            <div className='home__espacamento'>
            </div>
        </>
    )
}

