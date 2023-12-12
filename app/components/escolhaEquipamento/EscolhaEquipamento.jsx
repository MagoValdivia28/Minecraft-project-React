import styles from './escolhaEquipamento.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSolidChevronLeft } from "react-icons/bi";

const EscolhaEquipamento = ({ dados, fecharPopUp }) => {
    // variaveis de selecao
    const [selecionarCapacete, setSelecionarCapacete] = useState(null);
    const [selecionarPeitoral, setSelecionarPeitoral] = useState(null);
    const [selecionarCalca, setSelecionarCalca] = useState(null);
    const [selecionarBota, setSelecionarBota] = useState(null);
    const [selecionarEspada, setSelecionarEspada] = useState(null);


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


    return (
        <div className={styles.containerModal}>
            <p onClick={fecharPopUp} className={styles.x}> x </p>
            <div className={styles.containerEquipamentos}>
                <div className={styles.filtragem}>
                    <input onChange={(e) => setFiltragemNome(e.target.value)} type="text" placeholder='Buscar Equipamento' />
                    <select onChange={(e) => setFiltragemTipo(e.target.value)}  >
                        <option value="">Todos</option>
                        <option value="capacete">Capacetes</option>
                        <option value="peitoral">Peitorais</option>
                        <option value="calca">Calças</option>
                        <option value="bota">Botas</option>
                        <option value="espada">Espadas</option>
                    </select>
                </div>
                <div className={styles.equipamentosCriados}>
                    {
                        dados.length ? (
                            dados.map((equipamento) => (
                                <div onClick={() => handleEquipamentoSelecionado(equipamento)} className={styles.itemArmadura}>
                                    <img style={{ backgroundColor: equipamento.cor }} src={`inventory/${equipamento.tipo}Final.png`} alt="" />
                                </div>
                            ))
                        ) : (
                            <p>Nenhum equipamento adicionado :( <Link className={styles.linkEquipamento} href={'../equipamentos'}>Adicione!</Link></p>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default EscolhaEquipamento
