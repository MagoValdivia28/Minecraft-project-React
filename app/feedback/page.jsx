
'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header/header.jsx";
import styles from "./feedback.module.css";

const feedbackPage = () => {

    const [dados, setDados] = useState([]);

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
        try {
            await axios.delete(`/api/feedback/${id}`);
            const updatedFeedback = dados.filter((feedback) => feedback.id !== id);
            setDados(updatedFeedback);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    // Editar feedback

    const handleEdit = async (id, updatedFeedback) => {
        try {
            await axios.put(`/api/feedback/${id}`, updatedFeedback);
            const updatedFeedbacks = dados.map((feedback) => {
                if (feedback.id === id) {
                    return updatedFeedback;
                }
                return feedback;
            });
            setDados(updatedFeedbacks);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // Atualizar feedback

    const handleUpdate = async (id) => {
        const updatedFeedback = {
            name: name,
            email: email,
            message: message
        };
        await handleEdit(id, updatedFeedback);
    };



    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.titles_container}>
                <h1 className={styles.titles}>Feedbacks</h1>
                <h2 className={styles.subTitles}>Feedbacks</h2>
            </div>
            <div className={styles.main_container}>
                <nav className={styles.feedback_container}>
                    <ul className={styles.feedback_list}>
                        {dados.map((feedback) => (
                            <li className={styles.feedback_item} key={feedback.id}>
                                <p className={styles.feedback_text}>{feedback.mensagem}</p>
                                <p className={styles.feedback_name}>{feedback.name}</p>
                                <p className={styles.feedback_email}>{feedback.email}</p>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => handleDelete(feedback.id)}
                                >
                                    Apagar
                                </button>
                                <button
                                    className={styles.updateButton}
                                    onClick={() => handleUpdate(feedback.id)}
                                >
                                    Atualizar
                                </button>
                                <button
                                    className={styles.editButton}
                                    onClick={() => handleEdit(feedback.id)}
                                >
                                    Editar
                                </button>
                                
                              
                              

                              

                                
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>



        </main>
    );
};

export default feedbackPage;

