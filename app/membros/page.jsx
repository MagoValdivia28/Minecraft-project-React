"use client"
import axios from 'axios';
import Header from '../components/header/header';
import styles from './membros.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const membroPage = () => {
    const router = useRouter();
    const [dados, setDados] = useState([]);
    const [membros, setMembros] = useState([]);

    const [membro, setMembro] = useState(null);

    //cor do card da pessoa

    const [corCard, setCorCard] = useState(null);

    // inpts do card da pessoa

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [imagem, setUrlImagem] = useState('');
    const [cargo, setCargo] = useState('');
    const [popUp, setPopUp] = useState(false);

    // postar
    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            await axios.post("/api/membros", { nome, idade, descricao, imagem, cargo, backgroundcor: corCard });
            setNome('');
            setIdade('');
            setDescricao('');
            setUrlImagem('');
            setCargo('');
            router.push(`/membros/`);
            setDados([...dados, { nome, idade, descricao, imagem, cargo, backgroundcor: corCard }]);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    //Deletar
    const handleDeletar = async (id) => {
        const url = `/api/membros/id/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((membro) => membro.id !== id));
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

    const handlePopUpDescricao = () => {
        console.log("clicou");
        setPopUp(!popUp);


    }

    return (
        <>
            <Header />

            {
                popUp ? (
                    <div className={styles.containerPopUp}>
                        <p onClick={() => handlePopUpDescricao()} className={styles.x}>X</p>
                        <div className={styles.imgMembro}>
                            <img src="/imagemfacemine6.png" alt="membro" />
                        </div>
                        <div className={styles.itens}>
                            <div>
                                <div className={styles.item}>
                                    <label>Nome:</label>
                                    <h1></h1>
                                </div>
                                <div className={styles.item}>
                                    <label>Idade:</label>
                                    <h1>18</h1>
                                </div>
                            </div>
                            <div>
                                <div className={styles.item}>
                                    <label>Descrição:</label>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            <div className={styles.main}>

                <h1 className={styles.textoHeader}>Membros</h1>
                <div className={styles.sobreEquipe}>
                    <div className={styles.imgEquipe}>
                        <img className={styles.img1} src="/enigma.jpg" />
                    </div>
                    <div className={styles.textoEquipe}>
                        <p>É com grande satisfação que apresentamos a equipe de desenvolvimento de sistemas ENIGMA, dedicada e altamente desenvolvida na concepção e implementação de soluções tecnológicas inovadoras. Nossa equipe é composta por profissionais especializados, cujo comprometimento e expertise são fundamentais para o sucesso de nossos projetos.
                            A ENIGMA se destaca pela abordagem colaborativa e multidisciplinar de seus membros, reunindo talentos em áreas como análise de sistemas, programação, design de interfaces e gerenciamento de projetos. Cada membro possui vasta experiência no desenvolvimento de soluções personalizadas, adaptadas às necessidades específicas de nossos clientes.
                        </p>
                    </div>
                </div>
                <div className={styles.equipe}>
                    {
                        dados.map((membro) => (
                            <div key={membro.id} className={styles.cardPessoa} style={{ backgroundColor: membro.backgroundcor }}>
                                <div className={styles.imgMembro}>
                                    <img src={membro.imagem} alt="membro" />
                                </div>
                                <div className={styles.itens}>
                                    <div>
                                        <div className={styles.item}>
                                            <label>Nome:</label>
                                            <h1>{membro.nome}</h1>
                                        </div>
                                        <div className={styles.item}>
                                            <label>Idade:</label>
                                            <h1>{membro.idade}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.item}>
                                            <label>Descrição:</label>
                                            <h1>{membro.descricao}</h1>
                                        </div>
                                        <div className={styles.item}>
                                            <label>Cargo:</label>
                                            <h1>{membro.cargo}</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    <button className={styles.rmv} onClick={() => handleDeletar(membro.id)}>Remover</button>
                                    <button className={styles.edit} onClick={() => router.push(`/membros/edit/${membro.id}`)}>Editar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default membroPage;