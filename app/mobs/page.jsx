"use client"
import Header from '../components/header/header';
import styles from '../mobs/page.module.css';
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
    const [img, setImg] = useState(null);
    const { id } = mob;

    const [errorMSG, setErrorMSG] = useState("");
    const [errorType, setErrorType] = useState("");

    function sendError(msg) {
        setErrorMSG(msg);
        setTimeout(function () {
            setErrorMSG("");
            setErrorType("");
        }, 5000);

    }

    function sendType(type) {
        if (type === "error") {
            setErrorType("error");
        } else if (type === "success") {
            setErrorType("success");
        }
    }

    function validation() {
        let errors = [];

        if (!nome) {
            errors.push("Nome não informado");
        }
        if (!descricao) {
            errors.push("Descrição não informada");
        }
        if (!tipo) {
            errors.push("Tipo não informado");
        }
        if (!dano && !defesa) {
            errors.push("O valor do dano ou da defesa tem que ser informado");
        }
        if (tipo !== "passivo" && tipo !== "hostil" && tipo !== "neutro") {
            errors.push("Tipo deve ser passivo, hostil ou neutro");
        }
        if (isNaN(dano) || isNaN(defesa)) {
            errors.push("Dano e defesa devem ser um número");
        }
        if (dano > 20 || dano < 0) {
            errors.push("Dano deve ser entre 0 e 20");
        }
        if (defesa > 20 || defesa < 0) {
            errors.push("Defesa deve ser entre 0 e 20");
        }


        if (!img) {
            errors.push("Imagem não informada");
        } else {
            const imgSplit = img.split(".");
            const imgExt = imgSplit[imgSplit.length - 1];
            const imgExtValidas = ["jpg", "jpeg", "png", "gif", "https", "http"];
            if (!imgExtValidas.includes(imgExt)) {
                errors.push("Imagem inválida, extensões válidas: jpg, jpeg, png, gif");
            }
        }

        if (errors.length > 0) {
            setErrorType("error");
            sendError(errors.join(", "));
            return errors;
        } else {
            sendType("success");
            return true;
        }
    }

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
            if (validation() == false) {
                sendError(validation);
            }
            const responseLog = await axios.post(`/api/mobs`,
                {
                    nome: nome,
                    descricao: descricao,
                    tipo: tipo,
                    dano: dano,
                    defesa: defesa,
                    img: img
                }
            );
            router
            const response = await axios.get(`/api/mobs`);
            setMob(response.data);
            setDados(response.data)
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        async function fetchMobsID() {
            try {
                const response = await axios.get(`/api/mobs/${id}`);
                setMob(response.data);
                setDados(response.data);
            } catch (error) {
            }
        }
        if (id) {
            fetchMobsID();
        }
    }, [id])

    const deleteMob = async (id) => {
        try {
            await axios.delete(`/api/mobs/${id}`);
            setDados(dados.filter((mob) => mob.id !== id));
        } catch (error) {
            console.log(error);
        }
    }



    console.log(dados);

    return (
        <>
            <Header />
            <div className={styles.back}>
                <div className={styles.container1}>
                    <div className={styles.divHeader}>
                        <h1 className={styles.tituloHeader}>MOB PAGE</h1>
                    </div>
                    <div>

                        <img className={styles.imagemHeader} src="" />
                        <img className={styles.img12} src="traçadoQuadriculado.png" alt="" />
                    </div>
                    <div className={styles.divHeader2}>
                        <h1 className={styles.tituloCards}>o que e mob</h1>
                    </div>
                </div>
            </div>

            <div className={styles.Cardmobs}>
                <p className={styles.descmob}>Os mobs sao cruciais para o aspecto de sobrevivencia do jogo, pois adicionam desafios aos jogadores. Eles incentivam a exploracao do mundo, a busca por recursos e a criacao de estrategias de defesa para enfrentar as ameacas noturnas. Alem disso, alguns mobs tem caracteristicas unicas, como o Wither e o Ender Dragon, que representam desafios mais avançados no jogo. A interacao com mobs e parte integrante da experiencia diversificada oferecida por Minecraft.</p>
            </div>

            <div className={styles.createCont}>

                <form className={styles.form_ip} onSubmit={(e) => handleMob(e, 'dano')}>
                    <input className={styles.inputs} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Nome' />
                    <input className={styles.inputs} value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder='Descrição' />
                    <input className={styles.inputs} value={tipo} onChange={(e) => setTipo(e.target.value)} type="text" placeholder='Tipo' />
                    <input className={styles.inputs} value={dano} onChange={(e) => setDano(e.target.value)} type="number" placeholder='Ataque' />
                    <input className={styles.inputs} value={defesa} onChange={(e) => setDefesa(e.target.value)} type="number" placeholder='Defesa' />
                    <input className={styles.inputs} value={img} onChange={(e) => setImg(e.target.value)} type="text" placeholder='Imagem' />

                    <button className={styles.createMob} type="submit">Criar</button>
                    <div className={styles.errorCont}><p>{errorMSG}</p></div>
                </form>


            </div>


            <div className={styles.mobsList}>
                <div className={styles.teste}>
                    {
                        dados.length ? (
                            dados.map((mob, index) => (
                                <div className={styles.mobCard} key={index}>
                                    <h3 className={styles.mobName}>{mob.nome}</h3>
                                    <img src={mob.img} className={styles.mobImg} />
                                    <p className={styles.mobDesc}>{mob.descricao}</p>
                                    <p className={styles.mobType}>{mob.tipo}</p>
                                    <p className={styles.mobDmg}>{mob.dano}</p>
                                    <p className={styles.mobDef}>{mob.defesa}</p>

                                    <button className={styles.deleteMob} onClick={() => deleteMob(mob.id)}>Deletar</button>

                                </div>
                            )
                            )) : (
                            <p className={styles.noMobs}>Nenhum mob cadastrado</p>
                        )
                    }
                </div>

            </div>


        </>

    );
};

export default Mobs;