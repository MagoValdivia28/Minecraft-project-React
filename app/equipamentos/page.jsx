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

    const [corEquipamento, setCorEquipamento] = useState(null);

    const handleDeletar = async (id) => {
        const url = `/api/equipamentos/id/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((student) => student.id !== id));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFilteredEquipamento = async (type) => {
        const url = `/api/equipamentos/type/${type}`;
        try {
            const response = await axios.get(url);
            setDados(response.data);
            setEquipamentos(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleEdit = (equipamento) => {
        setEditEquipamento(equipamento);
        setCorEquipamento(equipamento.cor);
    };

    const handleCorEquipamentos = (e) => {
        setCorEquipamento(e.target.value);
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
    }, [equipamento])

    useEffect(() => {
        async function fetchEquipamentos() {
            try {
                const response = await axios.get("/api/equipamentos");
                // console.log(response);
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
                            <div onClick={() => { handleFilteredEquipamento('capacete'); setEquipamento('capacete'); setCorEquipamento('#000'); }} className={styles.itemArmadura}>
                                <img style={{ backgroundColor: corEquipamento }} id='capaceteImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/capaceteFinal.png"} alt="capacete" />
                            </div>
                            <div onClick={() => { handleFilteredEquipamento('peitoral'); setEquipamento('peitoral'); setCorEquipamento('#000') }} className={`${styles.itemArmadura} ${styles.itempeitoral}`}>
                                <img style={{ backgroundColor: corEquipamento }} id='peitoralImg' className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/peitoralFinal.png"} alt="peitoral" />
                            </div>
                            <div onClick={() => { handleFilteredEquipamento('calca'); setEquipamento('calca'); setCorEquipamento('#000') }} className={`${styles.itemArmadura} ${styles.itemcalca}`}>
                                <img style={{ backgroundColor: corEquipamento }} id="calcaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/calcaFinal.png"} alt="calça" />
                            </div>
                            <div onClick={() => { handleFilteredEquipamento('bota'); setEquipamento('bota'); setCorEquipamento('#000') }} className={`${styles.itemArmadura} ${styles.itemcalca}`}>
                                <img style={{ backgroundColor: corEquipamento }} id="botaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/botaFinal.png"} alt="bota" />
                            </div>
                            <div onClick={() => { handleFilteredEquipamento('espada'); setEquipamento('espada'); setCorEquipamento('#000') }} className={`${styles.itemArmadura}`}>
                                <img style={{ backgroundColor: corEquipamento }} id="espadaImg" className={`${styles.itemDoItem} ${styles.hidden}`} src={"inventory/espadaFinal.png"} alt="espada" />
                            </div>
                        </div>
                        {
                            equipamento ? (
                                <>
                                    <div className={styles.containerCreation}>
                                        {dados.length > 0 ? (
                                            <div className={styles.equipamentosPredefinidos}>
                                                {
                                                    dados.map((equipamentoMap) => (
                                                        <div onClick={() => setMoreInfo(equipamentoMap.id)} className={`${styles.itemArmadura} ${styles[`item${equipamentoMap.nome}`]}`} key={equipamentoMap.id}>
                                                            <img style={{ backgroundColor: equipamentoMap.cor }} id={`${equipamento}Img`} className={`${styles.itemDoItem}`} src={`inventory/${equipamento}Final.png`} alt={equipamento} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : (
                                            <p>Não há {equipamento}s cadastrados</p>
                                        )}
                                    </div>
                                    <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e)} setDados={setDados} corEquipamento={corEquipamento} edited={editEquipamento} setarCor={setCorEquipamento} fechar={() => setMoreInfo(null)} />
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