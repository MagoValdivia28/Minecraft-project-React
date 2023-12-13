"use client";
import Style from './batalha.module.css';
import Header from '../components/header/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EscolhaEquipamento from '../components/escolhaEquipamento/EscolhaEquipamento';


const Batalha = () => {

    const [dados, setDados] = useState([]);

    const [buttonEscolha, setButtonEscolha] = useState(false);

    // Variaveis selecionaveis

    const [selecionarCapacete, setSelecionarCapacete] = useState(null);
    const [selecionarPeitoral, setSelecionarPeitoral] = useState(null);
    const [selecionarCalca, setSelecionarCalca] = useState(null);
    const [selecionarBota, setSelecionarBota] = useState(null);
    const [selecionarEspada, setSelecionarEspada] = useState(null);

    const [defesa, setDefesa] = useState(0);

    const [filtragemNome, setFiltragemNome] = useState(null);
    const [filtragemTipo, setFiltragemTipo] = useState(null);

    useEffect(() => {
        async function fetchEquipamento() {
            try {
                const response = await axios.get("/api/equipamentos");
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchEquipamento();
    }, []);

    useEffect(() => {
        let totalDefesa = 0;

        if (selecionarCapacete) {
            totalDefesa += selecionarCapacete.defesa;
        }
        if (selecionarPeitoral) {
            totalDefesa += selecionarPeitoral.defesa;
        }
        if (selecionarCalca) {
            totalDefesa += selecionarCalca.defesa;
        }
        if (selecionarBota) {
            totalDefesa += selecionarBota.defesa;
        }

        setDefesa(totalDefesa);
    }, [selecionarCapacete, selecionarPeitoral, selecionarCalca, selecionarBota]);


    return (
        <main className={Style.main}>
            <div className={Style.opacidadeImg}>
                {
                    buttonEscolha &&
                    <EscolhaEquipamento dados={dados} fecharPopUp={() => setButtonEscolha(false)} />
                }
                <Header />
                <div className={Style.titulo}>
                    <h1>BATALHE AGORA!!</h1>
                </div>

                <div className={Style.batalhaConteiner}>

                    <button onClick={() => setButtonEscolha(true)}>ESCOLHA SEU EQUIPAMENTO</button>


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