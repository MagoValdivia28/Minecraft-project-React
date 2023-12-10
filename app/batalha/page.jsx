"use client";
import Style from './batalha.module.css';
import Header from '../components/header/header';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Batalha = () => {

    const [dados, setDados] = useState([]);

    // Variaveis selecionaveis

    const [selecionarCapacete, setSelecionarCapacete] = useState(null);
    const [selecionarPeitoral, setSelecionarPeitoral] = useState(null);
    const [selecionarCalca, setSelecionarCalca] = useState(null);
    const [selecionarBota, setSelecionarBota] = useState(null);
    const [selecionarEspada, setSelecionarEspada] = useState(null);

    useEffect(() => {
        async function fetchEquipamento() {
            try {
                const response = await axios.get("/api/equipamentos");
                console.log(response.data);
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchEquipamento();
    }, []);

    const handleEquipamentoSelecionado = (equipamento) => {
        if (equipamento.tipo === "capacete") {
            setSelecionarCapacete(equipamento);
        } else if (equipamento.tipo === "peitoral") {
            setSelecionarPeitoral(equipamento);
        } else if (equipamento.tipo === "calca") {
            setSelecionarCalca(equipamento);
        } else if (equipamento.tipo === "bota") {
            setSelecionarBota(equipamento);
        } else if (equipamento.tipo === "espada") {
            setSelecionarEspada(equipamento);
        }
    }

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
                        <div className={Style.equipamentosFeitos}>
                            <div className={Style.buscar}>
                                <input type="text" placeholder='Buscar Equipamento' />
                            </div>
                            <div className={Style.containerEquipamentos}>
                                {
                                    dados.length ? (
                                        dados.map((equipamento) => (
                                            <div onClick={() => handleEquipamentoSelecionado(equipamento)} className={Style.itemArmadura}>
                                                <img style={{ backgroundColor: equipamento.cor }} src={`inventory/${equipamento.tipo}Final.png`} alt="" />
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nenhum equipamento adicionado</p>
                                    )

                                }
                            </div>
                         </div>
                         <div className={Style.equipamentosSelecionados}>
                            <div className={Style.itemArmadura}>
                                <img style={{background: selecionarCapacete?.cor}} src={`inventory/${selecionarCapacete?.tipo}Final.png`} alt="" />
                            </div>
                            <div className={Style.itemArmadura}>
                                <img style={{background: selecionarPeitoral?.cor}} src={`inventory/${selecionarPeitoral?.tipo}Final.png`} alt="" />
                            </div>
                            <div className={Style.itemArmadura}>
                                <img style={{background: selecionarCalca?.cor}} src={`inventory/${selecionarCalca?.tipo}Final.png`} alt="" />
                            </div>
                            <div className={Style.itemArmadura}>
                                <img style={{background: selecionarBota?.cor}} src={`inventory/${selecionarBota?.tipo}Final.png`} alt="" />
                            </div>
                            <div className={Style.itemArmadura}>
                                <img style={{background: selecionarEspada?.cor}} src={`inventory/${selecionarEspada?.tipo}Final.png`} alt="" />
                            </div>
                         </div>
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