"use client"
import axios from 'axios';
import styles from './membros.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Corrigido aqui

//componentes
import MembroPopUp from '../components/membroPopUp/membropopup';
import Header from '../components/header/header';

const membroPage = () => {
    const router = useRouter();
    const [dados, setDados] = useState([]);
    const [membros, setMembros] = useState([]);

    const [membro, setMembro] = useState(null);

    const [msgError, setMsgError] = useState(null);

    const [editMembro, setEditMembro] = useState(null);

    //cor do card da pessoa
    const [corCard, setCorCard] = useState(null);

    // inpts do card da pessoa
    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(0);
    const [descricao, setDescricao] = useState(null);
    const [cargo, setCargo] = useState(null);
    const [imagem, setUrlImagem] = useState(null);
    const [popUp, setPopUp] = useState(false);

    // Estado para armazenar o ID do membro selecionado

    const [selectedMembroId, setSelectedMembroId] = useState(null);

    // Função para abrir o pop-up e definir o ID do membro selecionado

    const handleOpenDescricaoPopup = (id) => {
        setSelectedMembroId(id);
        setPopUp(true);
    };

    // Função para abrir o pop-up

    const handleOpenPopup = () => {
        setShowPopup(true);
    };
    const handleClose = () => {
        setShowPopup(false);
    }
    const [showPopup, setShowPopup] = useState(false);

    // Função para fechar o pop-up e limpar o ID do membro selecionado
    const handleClosePopup = () => {
        setSelectedMembroId(null);
        setPopUp(false);
    };


    // postar
    const handleSend = async () => {
        if (!nome || !idade || !descricao || !cargo || !imagem) {
            setMsgError('Preencha todos os campos');
        } else {
            try {
                await axios.post("/api/membros", { nome, idade, descricao, cargo, urlimagem: imagem });
                setNome('');
                setIdade('');
                setDescricao('');
                setCargo('');
                setUrlImagem('');
                setCorCard('');
                setShowPopup(false);
                // router.push(`/membros/`);
                const response = await axios.get("/api/membros");
                setDados(response.data);
            } catch (error) {
                console.error("Error submitting data:", error);
            }
        }
    }

    const handleEditar = async () => {
        console.log('teste');
        await axios.put(`/api/membros/id/${editMembro.id}`, { nome, idade, descricao, cargo, urlimagem: imagem });
        setEditMembro(null);
        setNome('');
        setIdade('');
        setDescricao('');
        setCargo('');
        setUrlImagem('');
        setPopUp(false);
        setShowPopup(false);
        // router.push(`/membros/`);
        const response = await axios.get("/api/membros");
        setDados(response.data);
    }

    // editar
    const handleEdit = (membro) => {
        setNome(membro.nome);
        setIdade(membro.idade);
        setDescricao(membro.descricao);
        setCargo(membro.cargo);
        setUrlImagem(membro.urlimagem);
        setEditMembro(membro);
        setShowPopup(true);
    };

    //Deletar
    const handleDeletar = async (id) => {
        const url = `/api/membros/id/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((membro) => membro.id !== id));
            setPopUp(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        async function fetchMembro() {
            try {
                const response = await axios.get("/api/membros");
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMembro();
    }, []);

    return (
        <>
            <Header />

            {
                popUp ? (
                    <>
                        <div className={styles.overlay}></div>
                        {dados.map((membro) => (
                            membro.id === selectedMembroId ? (
                                <div className={styles.containerPopUp}>
                                    <button onClick={handleClosePopup} className={styles.x}>X</button>
                                    <div className={styles.imgMembro} style={{ backgroundColor: membro.backgroundColor }}>
                                        <img src={membro.imagem} alt="membro" />
                                        <p><strong>nome:</strong>{membro.nome}</p>
                                        <p><strong>idade:</strong>{membro.idade}</p>
                                        <p><strong>descrição:</strong>{membro.descricao}</p>
                                        <p><strong>cargo na equipe:</strong>{membro.cargo}</p>
                                    </div>

                                    <div className={styles.botoesER}>
                                        <button onClick={() => handleEdit(membro)} className={styles.botaoEditar}>Editar</button>
                                        <button onClick={() => handleDeletar(membro.id)} className={styles.botaoDeletar}>Deletar</button>
                                    </div>
                                </div>
                            ) : null
                        ))}
                    </>
                ) : null
            }
            <div className={styles.main}>
                <div className={styles.sobreNosContainer}>
                    <p className={styles.center}><img className={styles.img2} src="/enigma.jpg" alt="enigma" /></p>
                    <div className={styles.containerTxt}>

                        <h1 className={`${styles.center} ${styles.txt}`}>SOBRE NOS</h1>
                        <p className={styles.center}>É com grande satisfação que apresentamos a equipe de desenvolvimento de sistemas ENIGMA, dedicada e altamente desenvolvida na concepção e implementação de soluções tecnológicas inovadoras. Nossa equipe é composta por profissionais especializados, cujo comprometimento e expertise são fundamentais para o sucesso de nossos projetos.
                            A ENIGMA se destaca pela abordagem colaborativa e multidisciplinar de seus membros, reunindo talentos em áreas como análise de sistemas, programação, design de interfaces e gerenciamento de projetos. Cada membro possui vasta experiência no desenvolvimento de soluções personalizadas, adaptadas às necessidades específicas de nossos clientes.
                        </p>
                    </div>

                </div>
                <div className={styles.containerCreationMembro}>
                    <div className={styles.sla}>
                        <h1 className={`${styles.center} ${styles.txt}`}>Criar novo membro</h1>
                        <p className={styles.center}><button className={styles.botaoAdd} onClick={handleOpenPopup}>+</button></p>
                    </div>

                    <div className={styles.cadastro}>
                        {
                            showPopup && <MembroPopUp handleClose={handleClose} handleSend={() => handleSend()} setNome={setNome} setIdade={setIdade} setDescricao={setDescricao} setCargo={setCargo} setUrlImagem={setUrlImagem} nome={nome} idade={idade} descricao={descricao} cargo={cargo} urlimagem={imagem} edited={editMembro} handleEditar={() => handleEditar()} errorInp={msgError} />
                        }
                    </div>
                    <div className={styles.boraBill}>

                        {
                            dados.map((membro) => (
                                <div key={membro.id} className={styles.cardPessoa} style={{ backgroundColor: membro.backgroundcor }}>
                                    <img src={membro.imagem} alt="membro" className={styles.imgPessoa} />
                                    <h2 className={styles.pessoa}>Nome: {membro.nome}</h2>
                                    <p>Cargo: {membro.cargo}</p>
                                    <div className={styles.botaoVM}>
                                        <button onClick={() => handleOpenDescricaoPopup(membro.id)} className={styles.botaoVermais}>Detalhes</button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default membroPage;