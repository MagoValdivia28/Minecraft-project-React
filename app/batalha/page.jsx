import Style from './batalha.module.css';
import Header from '../components/header/header';


const Batalha = () => {
    return (
        <main className={Style.main}>
            <div className={Style.opacidadeImg}>
                <Header />
                <div className={Style.titulo}>
                    <h1>BATALHE AGORA!!</h1>
                </div>

                <div className={Style.batalhaConteiner}>

                    <div className={Style.usuário}>
                        <p className={Style.textop}>SELECIONE SEU EQUIPAMENTO !</p>
                    </div>


                    <div>
                        <img className={Style.espadaX} src={"espadasX.png"} alt="" />
                    </div>


                    <div className={Style.mob}>
                        <p className={Style.textop}>SELECIONE O MOB PARA ENFRENTA-LO!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Batalha;