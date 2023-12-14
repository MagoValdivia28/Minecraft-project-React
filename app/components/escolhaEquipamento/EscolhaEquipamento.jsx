import styles from './escolhaEquipamento.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSolidChevronLeft } from "react-icons/bi";

const EscolhaEquipamento = ({ fecharPopUp, setSelecionarCapacete, setSelecionarPeitoral, setSelecionarCalca, setSelecionarBota, setSelecionarEspada }) => {

    const [dados, setDados] = useState([]);

    // filtragem
    const [filtragemNome, setFiltragemNome] = useState(null);
    const [filtragemTipo, setFiltragemTipo] = useState(null);

    // useEffect filtragem 

    useEffect(() => {
        const handleBusca = async () => {
            try {
                let queryParams = '';
                if (filtragemNome) {
                    queryParams += `name=${filtragemNome}&`;
                }
                if (filtragemTipo) {
                    queryParams += `type=${filtragemTipo}&`;
                }
                if (queryParams.length > 0) {
                    queryParams = `?${queryParams}`;
                }
                const response = await axios.get(`/api/equipamentos${queryParams}`,);
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        handleBusca();
    }, [filtragemNome, filtragemTipo]);

    // funcao que dara poderes ao equipamento selecionado
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


    return (
        <div className={styles.containerModal}>
            <p onClick={fecharPopUp} className={styles.x}> x </p>
            <div className={styles.containerEquipamentos}>
                <div className={styles.filtragem}>
                    <div className={styles.divInput}>
                        <input onChange={(e) => setFiltragemNome(e.target.value)} type="text" placeholder='Buscar Equipamento' />
                        <div className={styles.icon}>
                            <img src="https://help.minecraft.net/hc/static/media/icon_search.62a7b5b663530e254bc6.svg" alt="imagemSearch" />
                        </div>
                    </div>
                    <select onChange={(e) => setFiltragemTipo(e.target.value)}  >
                        <option className={styles.inp} value="">Todos</option>
                        <option className={styles.inp} value="capacete">Capacetes</option>
                        <option className={styles.inp} value="peitoral">Peitorais</option>
                        <option className={styles.inp} value="calca">Calças</option>
                        <option className={styles.inp} value="bota">Botas</option>
                        <option className={styles.inp} value="espada">Espadas</option>
                    </select>
                </div>
                <div className={styles.equipamentosCriados}>
                    {
                        dados.length ? (
                            dados.map((equipamento) => (
                                <div key={equipamento.id} onClick={() => handleEquipamentoSelecionado(equipamento)}  className={`${styles.itemArmadura}`}>
                                    <img style={{ backgroundColor: equipamento.cor }} src={`inventory/${equipamento.tipo}Final.png`} alt="" />
                                </div>
                            ))
                        ) : (
                            <p className={styles.nenhumEquip}>Nenhum equipamento adicionado :( <Link className={styles.linkEquipamento} href={'../equipamentos'}>Adicione!</Link></p>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default EscolhaEquipamento
