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





const Page_de_encantamentos = () => {

    const router = useRouter();

    const [bookPopUp, setBookPopUp] = useState(false);
    const [styleBooks, setStyleBooks] = useState(styles.book);

    // encantamentos em si

    const [dados , setDados] = useState([]);
    const [encantamentos, setEncantamentos] = useState([]);
    const [encantamento, setEncantamento] = useState({});

    // inputs 

    const [titulo , setTitulo] = useState("");
    const [descricao , setDescricao] = useState("");
    const [tipoEncanto , setTipoEncanto] = useState("");
    const [dano , setDano] = useState("");
    const [defesa , setDefesa] = useState("");

    let bookStyles = 0;
    
    console.log(bookStyles);


    const handleBookPopUp = () => {
        setBookPopUp(!bookPopUp);
        console.log("clicou");
    }

    useEffect(() => {
        async function fetchEncantamentos() {
            try {
                const response = await axios.get("/api/encantamentos");
                setEncantamentos(response.data);
                setDados(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchEncantamentos();
    } , []);


    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.titles_container}>
                <h1 className={styles.titles}>Encantamentos</h1>
                <h2 className={styles.subTitles}>Encantamentos</h2>
            </div>
            <div className={styles.main_container}>

                {
                    bookPopUp == false ? (
                        <div className={styles.books_list}>
                            <nav className={styles.encantamentos_container}>
                                <img className={styles.encantamentos_img} src="/Book_29.webp" alt="encantamento1" width={96} height={96} />
                                <ul className={styles.encantamentos_list}>
                                    {
                                        dados.length ? (
                                            encantamentos ? (
                                                encantamentos.map((encantamento) => (
                                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                                        <span className={styles.book}>
                                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                                            <p className={styles.book_name}>{encantamento.titulo}</p>
                                                        </span>
                                                    </li>
                                                ))
                                            ) : (
                                                <p>Carregando...</p>
                                            )
                                        ) : (
                                            <p>Nenhum encantamento econtrado</p>
                                        )
                                    }


                                    {/* <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>inquebravel</p>
                                        </span>
                                    </li>

                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book1}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>protecao</p>
                                        </span>
                                    </li>

                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book2}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>inquebravel</p>
                                        </span>
                                    </li>
                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book3}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>inquebravel</p>
                                        </span>
                                    </li>
                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book4}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>inquebravel</p>
                                        </span>
                                    </li>
                                    <li onClick={() => handleBookPopUp()} className={styles.encantamento}>
                                        <span className={styles.book5}>
                                            <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                            <p className={styles.book_name}>Respiracao aquatica</p>
                                        </span>
                                    </li> */}


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