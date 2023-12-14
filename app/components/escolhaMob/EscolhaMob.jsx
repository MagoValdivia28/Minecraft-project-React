import styles from './escolhaMob.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const EscolhaMob = ({ fecharPopUp, setSelecionarMob }) => {

  const [dados, setDados] = useState([]);

  const [filtragemNome, setFiltragemNome] = useState(null);
  const [filtragemTipo, setFiltragemTipo] = useState(null);

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
        const response = await axios.get(`/api/mobs${queryParams}`,);
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handleBusca();
  }, [filtragemNome, filtragemTipo]);

  useEffect(() => {
    async function fetchMobs() {
      try {
        const response = await axios.get("/api/mobs");
        setDados(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMobs();
  }, []);

  return (
    <div className={styles.containerModal}>
      <p onClick={fecharPopUp} className={styles.x}> x </p>
      <div className={styles.containerMobs}>
        <div className={styles.filtragem}>
          <div className={styles.divInput}>
            <input onChange={(e) => setFiltragemNome(e.target.value)} type="text" placeholder='Buscar Criatura' />
            <div className={styles.icon}>
              <img src="https://help.minecraft.net/hc/static/media/icon_search.62a7b5b663530e254bc6.svg" alt="imagemSearch" />
            </div>
          </div>
          <select onChange={(e) => setFiltragemTipo(e.target.value)}  >
            <option className={styles.inp} value="">Todos</option>
            <option className={styles.inp} value="passivo">Passivo</option>
            <option className={styles.inp} value="hostil">Hostil</option>
            <option className={styles.inp} value="neutro">Neutro</option>
          </select>
        </div>
        <div className={styles.mobsCriados}>
          {
            dados.length ? (
              dados.map((mob) => (
                <div onClick={() => setSelecionarMob(mob)} className={styles.mob}>
                  <img src={mob.img} alt={mob.nome} width={160} height={160} />
                </div>
              ))
            ) : (
              <p className={styles.nenhumMob}>Nenhum mob adicionado :( <Link className={styles.linkMob} href={'../mobs'}>Adicione!</Link></p>
            )
 
          }
        </div>
      </div>
    </div>
  )
}

export default EscolhaMob
