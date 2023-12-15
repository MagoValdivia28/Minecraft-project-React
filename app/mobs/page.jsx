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
    const [editing, setEditing] = useState(null);


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

    const handleMob = async () => {
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
            const response = await axios.get(`/api/mobs`);
            setMob(response.data);
            setDados(response.data);
            setNome("");
            setDescricao("");
            setTipo("");
            setDano("");
            setDefesa("");
            setImg("");
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

    const editMob = async (mob) => {
        setNome(mob.nome);
        setDescricao(mob.descricao);
        setTipo(mob.tipo);
        setDano(mob.dano);
        setDefesa(mob.defesa);
        setImg(mob.img);
        setMob(mob);
        setEditing(mob);
    }

    const handleEditar = async () => {
        try {
            await axios.put(`/api/mobs/${id}`,
                {
                    nome: nome,
                    descricao: descricao,
                    tipo: tipo,
                    dano: dano,
                    defesa: defesa,
                    img: img
                }
            );
            const response = await axios.get(`/api/mobs`);
            setDados(response.data);
            setNome("");
            setDescricao("");
            setTipo("");
            setDano("");
            setDefesa("");
            setImg("");
            setEditing(null);
        } catch (error) {
            console.log(error);
        }
    }

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

            <div>
                <h1 className={styles.tituloCards1}>crie seu proprio mob</h1>
            </div>

            <div className={styles.createCont}>
                <div className={styles.form_ip}>
                    <input className={styles.inputs} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Nome' />
                    <input className={styles.inputs} value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder='Descricao' />
                    <select className={styles.select} value={tipo} onChange={(e) => setTipo(e.target.value)} type="text" placeholder='Tipo' >
                        <option value="passivo">Passivo</option>
                        <option value="hostil">Hostil</option>
                        <option value="neutro">Neutro</option>
                    </select>

                    <input className={styles.inputs} value={dano} onChange={(e) => setDano(e.target.value)} type="number" placeholder='Ataque' />
                    <input className={styles.inputs} value={defesa} onChange={(e) => setDefesa(e.target.value)} type="number" placeholder='Defesa' />
                    <input className={styles.inputs} value={img} onChange={(e) => setImg(e.target.value)} type="text" placeholder='Imagem' />

                    {
                        editing ? (
                            <button className={styles.create} onClick={() => handleEditar()}>Editar</button>
                        ) : (
                            <button className={styles.create} onClick={() => handleMob()}>Criar</button>

                        )
                    }
                    <div className={styles.errorCont}><p>{errorMSG}</p></div>
                </div>
            </div>


            <div className={styles.mobsList}>
                <div className={styles.mobsList}>
                    {
                        dados.length ? (
                            dados.map((mob, index) => (
                                <div className={styles.mobCard} key={index}>

                                    <div className={styles.cardTitle}>
                                        <img src={mob.img} className={styles.mobImg} width={128} height={228} />
                                        <h3 className={styles.mobName}>{mob.nome}</h3>
                                        <div className={styles.titleEffect}></div>
                                    </div>
                                    <h4>Descrição :</h4>
                                    <p className={styles.mobDesc}>{mob.descricao}</p>
                                    <p className={styles.mobType}>Tipo : {mob.tipo}</p>
                                    <p className={styles.mobDmg}>Dano : {mob.dano}</p>
                                    <p className={styles.mobDef}>Defesa : {mob.defesa}</p>

                                    <div className={styles.cardButtonContainer}>
                                        <button className={styles.deleteMob} onClick={() => deleteMob(mob.id)}>Deletar</button>
                                        <button className={styles.editMob} onClick={() => editMob(mob)}>Editar</button>
                                    </div>

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