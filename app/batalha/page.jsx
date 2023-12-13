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
                    <EscolhaEquipamento fecharPopUp={() => setButtonEscolha(false)} setSelecionarCapacete={setSelecionarCapacete} setSelecionarPeitoral={setSelecionarPeitoral} setSelecionarCalca={setSelecionarCalca} setSelecionarBota={setSelecionarBota} setSelecionarEspada={setSelecionarEspada} />
                }
                <Header />
                <div className={Style.titulo}>
                    <h1>BATALHE AGORA!!</h1>
                </div>

                <div className={Style.batalhaConteiner}>
                    <div className={Style.gerenciamentoEquipamento}>
                        <div>
                            <button className={Style.createButton} onClick={() => setButtonEscolha(true)}>ESCOLHA SEU EQUIPAMENTO</button>
                        </div>
                        <div className={Style.containerAll}>
                            <img src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Play_With_Friends_Online_672x360.png" alt="" />
                            <div className={Style.containerAttachmentEquipamentos}>
                                <div className={Style.containerEquipamentos}>
                                    <div className={Style.itemArmadura}>
                                        <img style={{ background: selecionarCapacete?.cor }} src={`inventory/${selecionarCapacete?.tipo}Final.png`} alt="" />
                                    </div>
                                    <div className={Style.itemArmadura}>
                                        <img style={{ background: selecionarPeitoral?.cor }} src={`inventory/${selecionarPeitoral?.tipo}Final.png`} alt="" />
                                    </div>
                                    <div className={Style.itemArmadura}>
                                        <img style={{ background: selecionarCalca?.cor }} src={`inventory/${selecionarCalca?.tipo}Final.png`} alt="" />
                                    </div>
                                    <div className={Style.itemArmadura}>
                                        <img style={{ background: selecionarBota?.cor }} src={`inventory/${selecionarBota?.tipo}Final.png`} alt="" />
                                    </div>
                                </div>
                                <div className={Style.containerEspada}>
                                    <div className={Style.itemArmadura}>
                                        <img style={{ background: selecionarEspada?.cor }} src={`inventory/${selecionarEspada?.tipo}Final.png`} alt="" />
                                    </div>
                                    <div className={Style.status}>
                                        <span className={`${Style.textop} ${Style.dano}`}>ataque: {selecionarEspada ? selecionarEspada.dano : 0}</span>
                                        <span className={`${Style.textop} ${Style.defesa}`}>defesa: {defesa}</span>
                                    </div>
                                </div>
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