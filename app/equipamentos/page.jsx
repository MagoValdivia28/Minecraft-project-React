"use client"
import axios from "axios";
import Header from '../components/header/header';
import styles from './equipamentos.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MoreInfoEquipamento from "../components/moreInfoEquipamento/MoreInfoEquipamento";

// components

import CadastroEquipamento from "../components/cadastroEquipamento/CadastroEquipamento";

const equipamentoPage = () => {
    const [dados, setDados] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);

    const [equipamento, setEquipamento] = useState(null);

    const [editEquipamento, setEditEquipamento] = useState(null);

    const [moreInfo, setMoreInfo] = useState(null);

    // Cor dos equipamentos

    const [corCapacete, setCorCapacete] = useState(null);

    const [corPeitoral, setCorPeitoral] = useState(null);

    const [corCalca, setCorCalca] = useState(null);

    const [corBota, setCorBota] = useState(null);

    const [corEspada, setCorEspada] = useState(null);

    const handleDeletar = async (id) => {
        const url = `/api/equipamentos/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((student) => student.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleEdit = (equipamento) => {
        setEditEquipamento(equipamento);
        equipamento.tipo == 'capacete' ? (
            setCorCapacete(equipamento.cor)
        ) : equipamento.tipo == 'peitoral' ? (
            setCorPeitoral(equipamento.cor)
        ) : equipamento.tipo == 'calca' ? (
            setCorCalca(equipamento.cor)
        ) : equipamento.tipo == 'bota' ? (
            setCorBota(equipamento.cor)
        ) : equipamento.tipo == 'espada' ? (
            setCorEspada(equipamento.cor)
        ) : null
    };

    const handleCorEquipamentos = (e, equip) => {
        if (equip == 'Capacete') {
            setCorCapacete(e.target.value);
            setCorPeitoral(null);
            setCorCalca(null);
            setCorBota(null);
            setCorEspada(null);
        } else if (equip == 'Peitoral') {
            setCorCapacete(null);
            setCorPeitoral(e.target.value);
            setCorCalca(null);
            setCorBota(null);
            setCorEspada(null);
        } else if (equip == 'Calca') {
            setCorCapacete(null);
            setCorPeitoral(null);
            setCorCalca(e.target.value);
            setCorBota(null);
            setCorEspada(null);
        } else if (equip == 'Bota') {
            setCorCapacete(null);
            setCorPeitoral(null);
            setCorCalca(null);
            setCorBota(e.target.value);
            setCorEspada(null);
        } else if (equip == 'Espada') {
            setCorCapacete(null);
            setCorPeitoral(null);
            setCorCalca(null);
            setCorBota(null);
            setCorEspada(e.target.value);
        } else {
            console.log('Não foi possível alterar a cor do equipamento');
        }
    }

    useEffect(() => {
        if (equipamento) {
            if (equipamento == 'capacete') {
                let capacete = document.getElementById('capaceteImg');
                let peitoral = document.getElementById('peitoralImg');
                let calca = document.getElementById('calcaImg');
                let bota = document.getElementById('botaImg');
                let espada = document.getElementById('espadaImg');
                capacete.classList.remove(`${styles.hidden}`);
                peitoral.classList.add(`${styles.hidden}`);
                calca.classList.add(`${styles.hidden}`);
                bota.classList.add(`${styles.hidden}`);
                espada.classList.add(`${styles.hidden}`);
            }
            if (equipamento == 'peitoral') {
                let capacete = document.getElementById('capaceteImg');
                let peitoral = document.getElementById('peitoralImg');
                let calca = document.getElementById('calcaImg');
                let bota = document.getElementById('botaImg');
                let espada = document.getElementById('espadaImg');
                capacete.classList.add(`${styles.hidden}`);
                peitoral.classList.remove(`${styles.hidden}`);
                calca.classList.add(`${styles.hidden}`);
                bota.classList.add(`${styles.hidden}`);
                espada.classList.add(`${styles.hidden}`);
            }
            if (equipamento == 'calca') {
                let capacete = document.getElementById('capaceteImg');
                let peitoral = document.getElementById('peitoralImg');
                let calca = document.getElementById('calcaImg');
                let bota = document.getElementById('botaImg');
                let espada = document.getElementById('espadaImg');
                capacete.classList.add(`${styles.hidden}`);
                peitoral.classList.add(`${styles.hidden}`);
                calca.classList.remove(`${styles.hidden}`);
                bota.classList.add(`${styles.hidden}`);
                espada.classList.add(`${styles.hidden}`);
            }
            if (equipamento == 'bota') {
                let capacete = document.getElementById('capaceteImg');
                let peitoral = document.getElementById('peitoralImg');
                let calca = document.getElementById('calcaImg');
                let bota = document.getElementById('botaImg');
                let espada = document.getElementById('espadaImg');
                capacete.classList.add(`${styles.hidden}`);
                peitoral.classList.add(`${styles.hidden}`);
                calca.classList.add(`${styles.hidden}`);
                bota.classList.remove(`${styles.hidden}`);
                espada.classList.add(`${styles.hidden}`);
            }
            if (equipamento == 'espada') {
                let capacete = document.getElementById('capaceteImg');
                let peitoral = document.getElementById('peitoralImg');
                let calca = document.getElementById('calcaImg');
                let bota = document.getElementById('botaImg');
                let espada = document.getElementById('espadaImg');
                capacete.classList.add(`${styles.hidden}`);
                peitoral.classList.add(`${styles.hidden}`);
                calca.classList.add(`${styles.hidden}`);
                bota.classList.add(`${styles.hidden}`);
                espada.classList.remove(`${styles.hidden}`);
            }
        } else {
            console.log('Não há equipamento selecionado');
        }
    }, [corCapacete, corPeitoral, corCalca, corBota, corEspada])

    useEffect(() => {
        async function fetchEquipamentos() {
            try {
                const response = await axios.get("/api/equipamentos");
                console.log(response);
                setEquipamentos(response.data);
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchEquipamentos();
    }, []);

    return (
        <>
            <Header />
            <div className={styles.bg}>
                <div className={styles.boxInventory}>
                    <div className={styles.armadura}>
                        {
                            moreInfo ? (
                                dados.map((equipamento) => (
                                    equipamento.id == moreInfo ? (
                                        <MoreInfoEquipamento idKey={equipamento.id} equipamentoArray={equipamento} funcEdit={() => handleEdit(equipamento)} funcDel={() => handleDeletar(equipamento.id)} popUP={setMoreInfo} />
                                    ) : null
                                ))
                            ) : null
                        }
                        <div className={styles.armaduraSlotInventario}>
                            <div onClick={() => { setEquipamento('capacete'); setCorCapacete('#000'); setCorPeitoral(null); setCorCalca(null); setCorBota(null); setCorEspada(null) }} className={styles.itemArmadura}>
                                <img style={{ backgroundColor: corCapacete }} id='capaceteImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/capaceteFinal.png"} alt="capacete" />
                            </div>
                            <div onClick={() => { setEquipamento('peitoral'); setCorPeitoral('#000'); setCorCalca(null); setCorBota(null); setCorEspada(null); setCorCapacete(null) }} className={`${styles.itemArmadura} ${styles.itempeitoral}`}>
                                <img style={{ backgroundColor: corPeitoral }} id='peitoralImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/peitoralFinal.png"} alt="peitoral" />
                            </div>
                            <div onClick={() => { setEquipamento('calca'); setCorCalca('#000'); setCorBota(null); setCorEspada(null); setCorCapacete(null); setCorPeitoral(null) }} className={`${styles.itemArmadura} ${styles.itemcalca}`}>
                                <img style={{ backgroundColor: corCalca }} id="calcaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/calcaFinal.png"} alt="calça" />
                            </div>
                            <div onClick={() => { setEquipamento('bota'); setCorBota('#000'); setCorCapacete(null); setCorPeitoral(null); setCorCalca(null); setCorEspada(null) }} className={`${styles.itemArmadura} ${styles.itemcalca}`}>
                                <img style={{ backgroundColor: corBota }} id="botaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/botaFinal.png"} alt="bota" />
                            </div>
                            <div onClick={() => { setEquipamento('espada'); setCorEspada('#000'); setCorCapacete(null); setCorPeitoral(null); setCorCalca(null); setCorBota(null) }} className={`${styles.itemArmadura}`}>
                                <img style={{ backgroundColor: corEspada }} id="espadaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/espadaFinal.png"} alt="espada" />
                            </div>
                        </div>
                        {
                            equipamento == 'capacete' ? (
                                <>
                                    <div className={styles.containerCreation}>
                                        {dados.length ? (
                                            equipamentos ? (
                                                <div className={styles.equipamentosPredefinidos}>
                                                    {dados.some(equipamento => equipamento.tipo == 'capacete') ? (
                                                        dados.map((equipamento) => (
                                                            equipamento.tipo == 'capacete' ? (
                                                                <div onClick={() => setMoreInfo(equipamento.id)} className={`${styles.itemArmadura} ${styles[`item${equipamento.nome}`]}`} key={equipamento.id}>
                                                                    <img style={{ backgroundColor: equipamento.cor }} id='capaceteImg' className={`${styles.itemDoItem}`} src={"inventory/capaceteFinal.png"} alt="capacete" />
                                                                </div>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <p>Não há capacetes cadastrados</p>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Não há equipamentos cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e, 'Capacete')} setDados={setDados} corEquipamento={corCapacete} edited={editEquipamento} setarCor={setCorCapacete} fechar={() => setMoreInfo(null)}  />
                                </>
                            ) : null
                        }
                        {
                            equipamento == 'peitoral' ? (
                                <>
                                    <div className={`${styles.containerCreation} ${styles.peitoralCreation}`}>
                                        {dados.length ? (
                                            equipamentos ? (
                                                <div className={styles.equipamentosPredefinidos}>
                                                    {dados.some(equipamento => equipamento.tipo == 'peitoral') ? (
                                                        dados.map((equipamento) => (
                                                            equipamento.tipo == 'peitoral' ? (
                                                                <div onClick={() => setMoreInfo(equipamento.id)} className={`${styles.itemArmadura} ${styles.itempeitoral}`} key={equipamento.id}>
                                                                    <img style={{ backgroundColor: equipamento.cor }} id='peitoralImg' className={`${styles.itemDoItem}`} src={"inventory/peitoralFinal.png"} alt="peitoral" />
                                                                </div>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <p>Não há peitorais cadastrados</p>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Não há equipamentos cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e, 'Peitoral')} setDados={setDados} corEquipamento={corPeitoral} edited={editEquipamento} setarCor={setCorPeitoral} fechar={() => setMoreInfo(null)}  />
                                </>
                            ) : null
                        }
                        {
                            equipamento == 'calca' ? (
                                <>
                                    <div className={`${styles.containerCreation} ${styles.calcaCreation}`}>
                                        {dados.length ? (
                                            equipamentos ? (
                                                <div className={styles.equipamentosPredefinidos}>
                                                    {dados.some(equipamento => equipamento.tipo == 'calca') ? (
                                                        dados.map((equipamento) => (
                                                            equipamento.tipo == 'calca' ? (
                                                                <div onClick={() => setMoreInfo(equipamento.id)} className={`${styles.itemArmadura} ${styles.itemcalca}`} key={equipamento.id}>
                                                                    <img style={{ backgroundColor: equipamento.cor }} id='calcaImg' className={`${styles.itemDoItem}`} src={"inventory/calcaFinal.png"} alt="calça" />
                                                                </div>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <p>Não há calças cadastradas</p>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Não há equipamentos cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e, 'Calca')} setDados={setDados} corEquipamento={corCalca} edited={editEquipamento} setarCor={setCorCalca} fechar={() => setMoreInfo(null)}  />
                                </>
                            ) : null
                        }
                        {
                            equipamento == 'bota' ? (
                                <>
                                    <div className={`${styles.containerCreation} ${styles.botaCreation}`}>
                                        {dados.length ? (
                                            equipamentos ? (
                                                <div className={styles.equipamentosPredefinidos}>
                                                    {dados.some(equipamento => equipamento.tipo == 'bota') ? (
                                                        dados.map((equipamento) => (
                                                            equipamento.tipo == 'bota' ? (
                                                                <div onClick={() => setMoreInfo(equipamento.id)} className={`${styles.itemArmadura} ${styles.itemcalca}`} key={equipamento.id}>
                                                                    <img style={{ backgroundColor: equipamento.cor }} id='botaImg' className={`${styles.itemDoItem}`} src={"inventory/botaFinal.png"} alt="bota" />
                                                                </div>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <p>Não há botas cadastradas</p>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Não há equipamentos cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e, 'Bota')} setDados={setDados} corEquipamento={corBota} edited={editEquipamento} setarCor={setCorBota} fechar={() => setMoreInfo(null)}  />   
                                </>
                            ) : null
                        }
                        {
                            equipamento == 'espada' ? (
                                <>
                                    <div className={`${styles.containerCreation} ${styles.espadaCreation}`}>
                                        {dados.length ? (
                                            equipamentos ? (
                                                <div className={styles.equipamentosPredefinidos}>
                                                    {dados.some(equipamento => equipamento.tipo == 'espada') ? (
                                                        dados.map((equipamento) => (
                                                            equipamento.tipo == 'espada' ? (
                                                                <div onClick={() => setMoreInfo(equipamento.id)} className={`${styles.itemArmadura} ${styles[`item${equipamento.nome}`]}`} key={equipamento.id}>
                                                                    <img style={{ backgroundColor: equipamento.cor }} id='espadaImg' className={`${styles.itemDoItem}`} src={"inventory/espadaFinal.png"} alt="espada" />
                                                                </div>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <p>Não há espadas cadastradas</p>
                                                    )}
                                                </div>
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Não há equipamentos cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e, 'Espada')} setDados={setDados} corEquipamento={corEspada} edited={editEquipamento} setarCor={setCorEspada} fechar={() => setMoreInfo(null)}  />   
                                </>
                            ) : null
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default equipamentoPage