"use client";
import Style from './batalha.module.css';
import Header from '../components/header/header';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Batalha = () => {

    const [dados, setDados] = useState([]);

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
                                            <div className={Style.itemArmadura}>
                                                <img style={{ backgroundColor: equipamento.cor }} src={`inventory/${equipamento.tipo}Final.png`} alt="" />
                                            </div>
                                        ))
                                    ) : (
                                        <p>Nenhum equipamento adicionado</p>
                                    )

                                }
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