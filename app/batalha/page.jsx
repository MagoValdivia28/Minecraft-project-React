"use client";
import Style from './batalha.module.css';
import Header from '../components/header/header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EscolhaEquipamento from '../components/escolhaEquipamento/EscolhaEquipamento';
import EscolhaMob from '../components/escolhaMob/EscolhaMob';
import PopUpBatalha from '../components/popUpBatalha/PopUpBatalha';


const Batalha = () => {

    const [dados, setDados] = useState([]);

    const [buttonEscolha, setButtonEscolha] = useState(false);
    const [buttonEscolhaMob, setButtonEscolhaMob] = useState(false);
    const [msgBatalha, setMsgBatalha] = useState(null);

    // Variaveis selecionaveis equipamento

    const [selecionarCapacete, setSelecionarCapacete] = useState(null);
    const [selecionarPeitoral, setSelecionarPeitoral] = useState(null);
    const [selecionarCalca, setSelecionarCalca] = useState(null);
    const [selecionarBota, setSelecionarBota] = useState(null);
    const [selecionarEspada, setSelecionarEspada] = useState(null);

    // Variaveis selecionaveis mob
    const [selecionarMob, setSelecionarMob] = useState(null);

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

    const handleStartBatalha = () => {
        if (selecionarEspada && selecionarCapacete && selecionarPeitoral && selecionarCalca && selecionarBota && selecionarMob) {
            const seuDano = Number(selecionarEspada.dano);
            const suaVida = Number(defesa);

            const vidaMob = Number(selecionarMob.defesa);
            const danoMob = Number(selecionarMob.dano);
            const nomeMob = selecionarMob.nome;


            const totalUsuario = seuDano + suaVida;
            const totalMob = danoMob + vidaMob;

            if (totalUsuario > totalMob) {
                setMsgBatalha(`Voce ganhou a batalha contra ${nomeMob}!`);
            } else if (totalUsuario === totalMob) {
                setMsgBatalha(`Voce empatou a batalha contra ${nomeMob}!`);
            } else {
                setMsgBatalha(`Voce perdeu a batalha contra ${nomeMob}!`);
            }

        } else {
            setMsgBatalha('Voce precisa escolher todos os equipamento e um mob para batalhar!');
        }
    }


    return (
        <main className={Style.main}>
            <div className={Style.opacidadeImg}>
                {
                    buttonEscolha &&
                    <EscolhaEquipamento fecharPopUp={() => setButtonEscolha(false)} setSelecionarCapacete={setSelecionarCapacete} setSelecionarPeitoral={setSelecionarPeitoral} setSelecionarCalca={setSelecionarCalca} setSelecionarBota={setSelecionarBota} setSelecionarEspada={setSelecionarEspada} />
                }
                {
                    buttonEscolhaMob &&
                    <EscolhaMob fecharPopUp={() => setButtonEscolhaMob(false)} setSelecionarMob={setSelecionarMob} />
                }
                {
                    msgBatalha &&
                    <PopUpBatalha msg={msgBatalha} fecharPopUp={() => setMsgBatalha(null)} />
                }
                <Header />
                <div className={Style.titulo}>
                    <h1>BATALHE AGORA!!</h1>
                </div>

                <div className={Style.batalhaConteiner}>
                    {/* equipamento */}
                    <div className={Style.gerenciamentoEquipamento}>
                        <div>
                            <button className={Style.createButton} onClick={() => setButtonEscolha(true)}>ESCOLHA SEU EQUIPAMENTO</button>
                        </div>
                        <div className={Style.containerAll}>
                            <img className={Style.imgFundo} src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Play_With_Friends_Online_672x360.png" alt="" />
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

                    <div className={Style.meioBatalha}>
                        <img className={Style.espadaX} src={"espadasX.png"} alt="" />
                        <button className={Style.batalheButton} onClick={() => handleStartBatalha()}>BATALHE</button>
                    </div>
                    {/* mobs */}
                    <div className={Style.mobContainer}>
                        <div className={Style.mob}>
                            <button className={`${Style.createButton} ${Style.red}`} onClick={() => setButtonEscolhaMob(true)}>ESCOLHA SEU ADVERSARIO</button>
                        </div>

                        <div className={Style.containerAllMob}>
                            <img className={Style.imgFundoMob} src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Play_With_Friends_Realms_672x360.png" alt="" />

                            <div className={Style.containerAttachmentMob}>
                                <div className={Style.containerMob}>

                                    {
                                        selecionarMob ? (
                                            <img width={150} height={150} className={Style.mobChoice} src={selecionarMob?.img} alt="Mob escolhido" />
                                        ) : null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Batalha;