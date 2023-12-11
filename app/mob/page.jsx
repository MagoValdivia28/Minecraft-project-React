"use client"
import Header from '../components/header/header';
import styles from '../mob/page.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Mobs = () => {

    const router = useRouter();

    const [dados, setDados] = useState([]);
    const [mobs, setMobs] = useState([]);
    const [mob, setMob] = useState([]);


    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [dano, setDano] = useState(null);
    const [defesa, setDefesa] = useState(null);
    const { id } = mob;

    useEffect(() => {
        async function fetchMobs() {
            try {
                const response = await axios.get('/api/mobs');
                setDados(response.data);
                setMobs(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMobs();
    }, []);

    const handleMob = async (e, tipoE) => {
        e.preventDefault();
        try {
            const responseLog = await axios.post(`/api/mobs`,
                {
                    nome: nome,
                    descricao: descricao,
                    tipo: tipo,
                    dano: dano,
                    defesa: defesa
                }
            );
            router
            const response = await axios.get(`/api/mobs`);
            setMob(response.data);
        } catch (error) {
            console.log(error);
        }

    }



    console.log(dados);

    return (
        <>
            <Header />
            <div className={styles.back}>



                <div className={styles.divtext}>
                    <h2 className={styles.textitle}>MOBS</h2>
                </div>

                <div className={styles.container1}>

                </div>

                <div className={styles.containerMobspac}>
                    <h3 className={styles.titlemob}>O que são os Mobs</h3>
                    <div className={styles.Cardmobs}>
                        <p className={styles.descmob}>Os mobs são cruciais para o aspecto de sobrevivência do jogo, pois adicionam desafios aos jogadores. Eles incentivam a exploração do mundo, a busca por recursos e a criação de estratégias de defesa para enfrentar as ameaças noturnas. Além disso, alguns mobs têm características únicas, como o Wither e o Ender Dragon, que representam desafios mais avançados no jogo. A interação com mobs é parte integrante da experiência diversificada oferecida por Minecraft.</p>
                    </div>

                    <div className={styles.createCont}>
                        <form className={styles.form_ip} onSubmit={(e) => handleMob(e, 'dano')}>
                            <input className={styles.inputs} value={nome} onChange={(e) => setNome (e.target.value)} type="text" placeholder='Nome'/>
                            <input className={styles.inputs} value={descricao} onChange={(e) => setDescricao (e.target.value)} type="text" placeholder='Descrição'/>
                            <input className={styles.inputs} value={tipo} onChange={(e) => setTipo (e.target.value)} type="text" placeholder='Tipo'/>
                            <input className={styles.inputs} value={dano} onChange={(e) => setDano (e.target.value)} type="number" placeholder='Ataque'/>
                            <input className={styles.inputs} value={defesa} onChange={(e) => setDefesa (e.target.value)} type="number" placeholder='Defesa'/>

                            <button className={styles.createMob} type="submit">Criar</button>
                        </form>

                    </div>
                </div>

            </div>
        </>

    );
};

export default Mobs;