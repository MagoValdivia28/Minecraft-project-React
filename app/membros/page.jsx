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
    const [popUp , setPopUp] = useState(false);

    // postar
    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            await axios.post("/api/membros", { nome, idade, descricao, imagem, cargo, cor: corCard });
            setNome('');
            setIdade('');
            setDescricao('');
            setUrlImagem('');
            setCargo('');
            router.push(`/membros/`);
            setDados([...dados, { nome, idade, descricao, imagem, cargo, cor: corCard }]);
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
                const response = await axios.get("/api/membro");
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
                    <p>Teste</p>
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
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine1.webp" />
                        <h2 className={styles.pessoa}>Felipe Pedro</h2>
                        <p>Tech Lead/Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button onClick={() => handlePopUpDescricao()} className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine2.jpeg" />
                        <h2 className={styles.pessoa}>Guilherme Rocha</h2>
                        <p>Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine3.png" />
                        <h2 className={styles.pessoa}>Matheus Coco</h2>
                        <p>Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine4.png" />
                        <h2 className={styles.pessoa}>Matheus Gomes</h2>
                        <p>Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine5.png" />
                        <h2 className={styles.pessoa}>Pedro Isac</h2>
                        <p>Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>
                    <div className={styles.cardPessoa}>
                        <img className={styles.imgPessoa} src="/imagemfacemine6.png" />
                        <h2 className={styles.pessoa}>Thayna Vazzoler</h2>
                        <p>Desenvolvedor</p>
                        <div className={styles.botaoVM}>
                            <button onClick={() => teste()} className={styles.botaoVermais}>Detalhes</button>
                        </div>
                    </div>

                    <div className={styles.cardCriarMembro}>
                        <button className={styles.botaoAdd} >+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default membroPage;