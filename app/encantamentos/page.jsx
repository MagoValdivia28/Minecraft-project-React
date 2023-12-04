'use client';

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Header from '../components/header/header';
import styles from './page.module.css';
import { useState } from 'react';
import BookPopUp from '../components/bookPopUp/bookpopup';
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

let bookStyles = 0;



const Page_de_encantamentos = () => {

    const router = useRouter();

    const [bookPopUp, setBookPopUp] = useState(false);
    const [styleBooks, setStyleBooks] = useState(styles.book);

    // encantamentos em si

    const [dados, setDados] = useState([]);
    const [encantamentos, setEncantamentos] = useState([]);
    const [encantamento, setEncantamento] = useState({});

    const [errorMSG, setErrorMSG] = useState("");
    const [errorType, setErrorType] = useState("");

    // inputs 

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [tipoEncanto, setTipoEncanto] = useState("");
    const [dano, setDano] = useState("");
    const [defesa, setDefesa] = useState("");
    const [nivel, setNivel] = useState("");
    const { id } = encantamento;

    function sendErrorMsg(msg) {
        setErrorMSG(msg);
    }

    function sendType(type) {
        if (type === "error") {
            setErrorType('error');
        } else if (type === "success") {
            setErrorType('success');
        }
    }

    function validation() {

        let errors = [];

        if (titulo == "") {
            errors.push("Titulo não pode ser vazio");
        }

        if (descricao == "") {
            errors.push("Descricao não pode ser vazio");
        }

        if (tipoEncanto == "") {
            errors.push("Tipo de encanto não pode ser vazio");
        }

        if (dano == "") {
            errors.push("Dano não pode ser vazio");
        }

        if (defesa == "") {
            errors.push("Defesa não pode ser vazio");
        }

        if (nivel == "") {
            errors.push("Nivel não pode ser vazio");
        }

        if (errors.length > 0) {
            sendErrorMsg(errors);
            sendType("error");
            return true;
        } else {
            sendType("success");
            return false;
        }
    }




    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            // let errors = [];
            // verificacoesEncantamento(titulo, descricao, tipoEncanto, dano, defesa, nivel, errors);

            if (validation() == false) {
                sendErrorMsg();
            }
            const responseLog = await axios.post("/api/encantamentos", {
                titulo: titulo,
                descricao: descricao,
                tipoEncanto: tipoEncanto,
                dano: dano,
                defesa: defesa,
                nivel: nivel,

            });

            router.push("/encantamentos");
            const response = await axios.get("/api/encantamentos");
            setDados(response.data);
            setTitulo("");
            setDescricao("");
            setTipoEncanto("");
            setDano("");
            setDefesa("");
            setNivel("");
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleBookStyle = () => {
        if (bookStyles == 0) {
            setStyleBooks(styles.book);
            bookStyles = 1;
        } else if (bookStyles == 1) {
            setStyleBooks(styles.book1);
            bookStyles = 2;
        } else if (bookStyles == 2) {
            setStyleBooks(styles.book2);
            bookStyles = 3;
        } else if (bookStyles == 3) {
            setStyleBooks(styles.book3);
            bookStyles = 4;
        } else if (bookStyles == 4) {
            setStyleBooks(styles.book4);
            bookStyles = 5;
        } else if (bookStyles == 5) {
            setStyleBooks(styles.book5);
        }
    }

    const handleBookPopUp = () => {
        setBookPopUp(!bookPopUp);
        console.log("clicou");
    }

    const handleBook = (encantamento) => {
        setEncantamento(encantamento);
        console.log(encantamento);
    }


    useEffect(() => {
        async function fetchEncantamentos() {
            try {
                const response = await axios.get("/api/encantamentos");
                setEncantamentos(response.data);
                setDados(response.data);
                handleBookStyle();
            } catch (error) {
                console.log(error);
            }
        }
        fetchEncantamentos();
    }, []);

    useEffect(() => {
        async function fetchEncantamentosID() {
            try {
                const response = await axios.get(`/api/encantamentos/${id}`);
                setEncantamento(response.data);
            } catch (error) {
            }
        }
        if (id) {
            fetchEncantamentosID();
        }
    }, [id]);



    const deleteEncantamento = async (id) => {
        try {
            const response = await axios.delete(`/api/encantamentos/${id}`);
            router.push("/encantamentos");
            setDados(dados.filter((encantamento) => encantamento.id !== id));
        } catch (error) {
            console.log(error);
        }
    }


    console.log(bookStyles);


    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.titles_container}>
                <h1 className={styles.titles}>Encantamentos</h1>
                <h2 className={styles.subTitles}>Encantamentos</h2>
            </div>
            <div className={styles.main_container}>

                <div className={styles.encantamento_create}>
                    <form onSubmit={(e) => handleSend(e, 'dano')}>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder='Titulo' />
                        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder='Descrição' />
                        <input value={tipoEncanto} onChange={(e) => setTipoEncanto(e.target.value)} type="text" placeholder='Tipo de encantamento' />
                        <input value={dano} onChange={(e) => setDano(e.target.value)} type="number" placeholder='Dano' />
                        <input value={defesa} onChange={(e) => setDefesa(e.target.value)} type="number" placeholder='Defesa' />
                        <input value={nivel} onChange={(e) => setNivel(e.target.value)} type="number" placeholder='Nivel' />

                        <button type="submit">Enviar</button>
                    </form>
                    <div className={styles.errors_container}>
                        <p>{errorMSG}</p>
                    </div>
                </div>

                {
                    bookPopUp == false ? (
                        <div className={styles.books_list}>
                            <nav className={styles.encantamentos_container}>
                                <img className={styles.encantamentos_img} src="/Book_29.webp" alt="encantamento1" width={96} height={96} />
                                <ul className={styles.encantamentos_list}>
                                    {
                                        dados.length ? (
                                            encantamentos ? (
                                                dados.map((encantamento) =>
                                                (
                                                    <li className={styles.encantamento}>
                                                        <span onClick={() => handleBookPopUp()} className={styleBooks}>
                                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                                            <p className={styles.book_name}>{encantamento.titulo}</p>
                                                        </span>

                                                        <button onClick={() => deleteEncantamento(encantamento.id)} className={styles.delete_button}>
                                                            <p className={styles.delete_text}>Deletar</p>
                                                        </button>
                                                        <button onClick={() => updateEncantamento(encantamento)} className={styles.update_button}>
                                                            <p className={styles.update_text}>Atualizar</p>
                                                        </button>
                                                    </li>
                                                ))
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Nenhum encantamento econtrado</p>
                                        )
                                    }

                                </ul>
                            </nav>
                            <div className={styles.arrows_container}>
                                <button className={styles.arrows}>
                                    <MdArrowBackIos />

                                </button>
                                <h2>
                                    Pag 1 / 1
                                </h2>
                                <button className={styles.arrows}>
                                    <MdArrowForwardIos />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <BookPopUp handleBookPopUp={handleBookPopUp} />
                    )
                }


            </div>
        </main>

    )
}

export default Page_de_encantamentos;