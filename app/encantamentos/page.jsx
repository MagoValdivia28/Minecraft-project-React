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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let flag = 0;


const Page_de_encantamentos = () => {

    const router = useRouter();

    const [bookPopUp, setBookPopUp] = useState(null);
    const [bookInfo, setBookInfo] = useState({});

    // encantamentos em si

    const [popUpOpenBook, setPopUpOpenBook] = useState(null);

    const [dados, setDados] = useState([]);
    const [encantamentos, setEncantamentos] = useState([]);
    const [encantamento, setEncantamento] = useState({});

    const [editEncantamento, setEditEncantamento] = useState(null);

    // erros

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

    const [editing, setEditing] = useState(null);

    function sendErrorMsg(msg) {
        setErrorMSG(msg);
        setTimeout(function () {
            setErrorMSG('');
            setErrorType('');
        }, 5000);
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

        if (!titulo) {
            errors.push("Título não informado");
        }
        if (!descricao) {
            errors.push("Descrição não informada");
        }
        if (!tipoEncanto) {
            errors.push("Tipo de encanto não informado");
        }
        if (tipoEncanto !== "espada" && tipoEncanto !== "capacete" && tipoEncanto !== "peitoral" && tipoEncanto !== "calca" && tipoEncanto !== "bota") {
            errors.push("Tipo deve ser espada, capacete, peitoral, calça ou bota");
        }
        if (!dano && !defesa) {
            errors.push("O valor do dano ou da defesa tem que ser informado");
        }
        if (!nivel) {
            errors.push("Nível não informado");
        }
        if (isNaN(dano) || isNaN(defesa) || isNaN(nivel)) {
            errors.push("Dano, defesa e nivel devem ser um número");
        }
        if (dano > 20 || dano < 0) {
            errors.push("Dano deve ser entre 0 e 20");
        }
        if (defesa > 20 || defesa < 0) {
            errors.push("Defesa deve ser entre 0 e 20");
        }



        if (errors.length > 0) {
            sendErrorMsg(errors.join(", "));
            sendType("error");
            return true;
        } else {
            sendType("success");
            return false;
        }
    }




    const handleSend = async () => {
        try {
            if (validation() == false) {
                sendErrorMsg();
            }
            if (flag == 0) {
                const response = await axios.post("/api/encantamentos", {
                    titulo,
                    descricao,
                    tipoEncanto,
                    dano,
                    defesa,
                    nivel
                });
                sendErrorMsg("Encantamento criado com sucesso");
                setDados([...dados, response.data]);

            }
            else if (flag == 1) {
                const response = await axios.put(`/api/encantamentos/${editEncantamento.id}`, {
                    titulo,
                    descricao,
                    tipoEncanto,
                    dano,
                    defesa,
                    nivel
                });
                sendErrorMsg("Encantamento atualizado com sucesso");
                setDados([...dados, response.data]);
                flag = 0;
            }

            router.push("/encantamentos");
            const response = await axios.get("/api/encantamentos");
            setDados(response.data);
            setTitulo("");
            setDescricao("");
            setTipoEncanto("");
            setDano("");
            setDefesa("");
            setNivel("");
            sendErrorMsg("Encantamento criado com sucesso");
            sendType("success");
        }
        catch (error) {
            console.log(error);
        }
    }

    const editarEncantamento = (encantamento) => {
        setTitulo(encantamento.titulo);
        setDescricao(encantamento.descricao);
        setTipoEncanto(encantamento.tipoEncanto);
        setDano(encantamento.dano);
        setDefesa(encantamento.defesa);
        setNivel(encantamento.nivel);
        setEditing(encantamento);
        setPopUpOpenBook(null);
    }

    const handleEdit = async () => {
        await axios.put(`/api/encantamentos/${editing.id}`, {
            titulo,
            descricao,
            tipoEncanto,
            dano,
            defesa,
            nivel
        });
        setEditing(null);
        setTitulo("");
        setDescricao("");
        setTipoEncanto("");
        setDano("");
        setDefesa("");
        setNivel("");
        const response = await axios.get('/api/encantamentos');
        setDados(response.data);

    }

    useEffect(() => {
        async function fetchEncantamentos() {
            try {
                const response = await axios.get("/api/encantamentos");
                setEncantamentos(response.data);
                setDados(response.data);
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
            sendErrorMsg("Encantamento deletado com sucesso");
            setPopUpOpenBook(null)
        } catch (error) {
            console.log(error);
        }
    }

    const pages = Math.ceil(dados.length / 3);




    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.titles_container}>
                <h1 className={styles.titles}>Encantamentos</h1>
            </div>
            <div className={styles.main_container}>
                {
                    popUpOpenBook ? (
                        dados.map((encantamentoMap) => (
                            encantamentoMap.id == popUpOpenBook ? (
                                <BookPopUp handleBookPopUp={() => setPopUpOpenBook(null)} handleDelete={() => deleteEncantamento(encantamentoMap.id)} encantamento={encantamentoMap} handleEditar={() => editarEncantamento(encantamentoMap)} />
                            ) : null
                        ))
                    ) : (
                        <>
                            <div className={styles.encantamentoCreate}>
                                <input className={styles.inputs} value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" placeholder='Titulo' />
                                <input className={styles.inputs} value={descricao} onChange={(e) => setDescricao(e.target.value)} type="text" placeholder='Descricao' />
                                <select className={styles.select} value={tipoEncanto} onChange={(e) => setTipoEncanto(e.target.value)} type="text" placeholder='Tipo de encantamento' >
                                    <option className={styles.options} value="espada">Espada</option>
                                    <option className={styles.options} value="capacete">Capacete</option>
                                    <option className={styles.options} value="peitoral">Peitoral</option>
                                    <option className={styles.options} value="calca">Calça</option>
                                    <option className={styles.options} value="bota">Bota</option>
                                </select>
                                <input className={styles.inputs} value={dano} onChange={(e) => setDano(e.target.value)} type="number" placeholder='Dano' />
                                <input className={styles.inputs} value={defesa} onChange={(e) => setDefesa(e.target.value)} type="number" placeholder='Defesa' />
                                <input className={styles.inputs} value={nivel} onChange={(e) => setNivel(e.target.value)} type="number" placeholder='Nivel' />
                                {
                                    editing ? (
                                        <button onClick={() => handleEdit()} className={styles.createButton}>Atualizar</button>
                                    ) : (
                                        <button onClick={() => handleSend()} className={styles.createButton}>Criar</button>
                                    )
                                }
                            </div>

                            <div className={styles.errors_container}>
                                <p>{errorMSG}</p>
                            </div>
                            <div className={styles.books_list}>
                                <nav className={styles.encantamentos_container}>
                                    <img className={styles.encantamentos_img} src="/Book_29.webp" alt="encantamento1" width={96} height={96} />
                                    <Carousel>
                                        {[...Array(pages)].map((_, pageIndex) => (
                                            <div key={pageIndex}>
                                                <ul className={styles.encantamentos_list}>
                                                    {dados.slice(pageIndex * 3, (pageIndex + 1) * 3).map((encantamento) => (

                                                        <li key={encantamento.id} className={styles.encantamento}>
                                                            <div onClick={() => setPopUpOpenBook(encantamento.id)} className={styles.book}>
                                                                <div className={styles.pageImg}>
                                                                    <img className={styles.bookImg} src="/Enchanted_Book.webp" alt="encantamento1" width={
                                                                        64
                                                                    } height={
                                                                        64
                                                                    } />
                                                                </div>
                                                                <p>{encantamento.titulo}</p>
                                                            </div>
                                                        </li>
                                                    ))

                                                    }

                                                </ul>
                                            </div>
                                        ))}
                                    </Carousel>
                                </nav>
                            </div>
                        </>
                    )
                }


            </div>
        </main>

    )
}

export default Page_de_encantamentos;