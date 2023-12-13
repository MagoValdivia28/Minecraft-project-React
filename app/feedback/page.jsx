
'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header/header.jsx";
import styles from "./feedback.module.css";
import { useRouter } from "next/navigation";

const feedbackPage = () => {

    const [dados, setDados] = useState([]);

    const [edit, setEdit] = useState(null);


    useEffect(() => {
        async function fetchFeedback() {
            try {
                const response = await axios.get("/api/feedback");
                console.log(response);
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchFeedback();
    }, []);

    // Enviar Inputs

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFeedback = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/feedback', { name, email, message });
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    //apagar feedback

    const handleDelete = async (id) => {
        console.log('clicou em apagar ' + id);
        const url = `/api/feedback/${id}`;
        try {
            await axios.delete(url);
            const updatedFeedback = dados.filter((feedback) => feedback.id !== id);
            setDados(updatedFeedback);
        } catch (error) {
            console.log("Entrou aqui no page")
            console.error('Error deleting data:', error);
        }
    };

    const handleEdit = (element) => {
        setEdit(element.id);
        setName(element.nome);
        setEmail(element.email);
        setMessage(element.mensagem);
    };

    const handleEditar = async () => {
        await axios.put(`/api/feedback/${edit}`, { nome: name, email, mensagem: message });
        setEdit(null);
        setName('');
        setEmail('');
        setMessage('');
        const response = await axios.get('/api/feedback');
        setDados(response.data);
    };

    const handleEnviar = async () => {
        try {
            await axios.post('/api/feedback', { nome: name, email, mensagem: message });
            setName('');
            setEmail('');
            setMessage('');
            const response = await axios.get('/api/feedback');
            setDados(response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };


    return (
        <>
            <Header />

            <main className={styles.main}>
                <div className={styles.titles_container}>
                    <h2 className={styles.titles}>FEEDBACK!</h2>
                    <p className={styles.subTitles}>Adoramos ouvir seus comentários – veja o que foi sugerido ou poste suas ideias agora. Ajude suas grandes ideias a se tornarem parte do Minecraft! Analisamos suas ideias e comentários todos os dias.</p>
                    <div className={styles.imgDegrade}> <br /></div>
                </div>
                <div className={styles.form_container}>
                    <label className={styles.label} htmlFor="nome">Nome:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className={styles.label1} htmlFor="email">Email:</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={styles.label1} htmlFor="mensagem">Mensagem:</label>
                    <input
                        className={styles.input}
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {
                        edit ? (
                            <button onClick={handleEditar}>Editar</button>
                        ) : (
                            <button onClick={handleEnviar} className={styles.enviar}>Enviar</button>
                        )
                    }
                </div>
                <div className={styles.main_container}>
                    <nav className={styles.feedback_container}>
                        <ul className={styles.feedback_list}>
                            {dados.map((feedback) => (
                                <li className={styles.feedback_item} key={feedback.id}>
                                    <p className={styles.feedback_text}>{feedback.mensagem}</p>
                                    <p className={styles.feedback_name}>{feedback.nome}</p>
                                    <p className={styles.feedback_email}>{feedback.email}</p>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => handleDelete(feedback.id)}
                                    >
                                        Apagar
                                    </button>

                                    <button
                                        className={styles.editButton}
                                        onClick={() => handleEdit(feedback)}
                                    >
                                        Editar
                                    </button>







                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>



            </main>
        </>

    );
};

export default feedbackPage;

