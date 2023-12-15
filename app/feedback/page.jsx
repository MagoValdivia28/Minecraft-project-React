/* Importa o cliente Axios para fazer requisições HTTP */
'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header/header.jsx";
import styles from "./feedback.module.css";
import { useRouter } from "next/navigation";
import Footer from "../components/footer/footer.jsx";

const feedbackPage = () => {

    const [errorShow, setErrorShow] = useState(null);
    /* Estado para armazenar os dados dos feedbacks */
    const [dados, setDados] = useState([]);

    /* Estado para armazenar o ID do feedback que está sendo editado */
    const [edit, setEdit] = useState(null);

    /* Hook useEffect para carregar os dados dos feedbacks quando o componente for montado */
    useEffect(() => {
        async function fetchFeedback() {
            try {
                /* Faz uma requisição GET para a API de feedbacks */
                const response = await axios.get("/api/feedback");
                console.log(response);
                /* Atualiza o estado com os dados obtidos da API */
                setDados(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchFeedback();
    }, []);

    // Enviar Inputs

    /* Estados para armazenar os valores dos inputs do formulário */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Apagar feedback

    /* Função para lidar com a exclusão de um feedback */
    const handleDelete = async (id) => {
        console.log('clicou em apagar ' + id);
        const url = `/api/feedback/${id}`;
        try {
            /* Faz uma requisição DELETE para a API de feedbacks */
            await axios.delete(url);
            /* Atualiza o estado removendo o feedback excluído */
            const updatedFeedback = dados.filter((feedback) => feedback.id !== id);
            setDados(updatedFeedback);
        } catch (error) {
            console.log("Entrou aqui no page")
            console.error('Error deleting data:', error);
        }
    };

    /* Função para preparar o formulário para edição ao clicar no botão Editar */
    const handleEdit = (element) => {
        setEdit(element.id);
        setName(element.nome);
        setEmail(element.email);
        setMessage(element.mensagem);
    };

    /* Função para lidar com a edição de um feedback */
    const handleEditar = async () => {
        await axios.put(`/api/feedback/${edit}`, { nome: name, email, mensagem: message });
        setEdit(null);
        setName('');
        setEmail('');
        setMessage('');
        /* Atualiza os dados após a edição */
        const response = await axios.get('/api/feedback');
        setDados(response.data);
    };



    /* Função para lidar com o envio ou edição de um feedback */
    const handleEnviar = async () => {
        if (name === '' || email === '' || message === '') {
            setErrorShow('Preencha todos os campos');
        } else {
            try {
                /* Faz uma requisição POST para a API de feedbacks */
                await axios.post('/api/feedback', { nome: name, email, message: message });
                /* Limpa os valores dos inputs após o envio */
                setName('');
                setEmail('');
                setMessage('');
                const response = await axios.get('/api/feedback');
                setDados(response.data);
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        }
    };

    return (
        <>
            {/* Corpo da página */}
            <body className={styles.body}>
                {/* Componente de cabeçalho */}
                <Header />

                {/* Seção principal da página */}
                <main className={styles.main}>
                    <div className={styles.titles_container}>
                        {/* Título e subtítulo da seção */}
                        <h2 className={styles.titles}>FEEDBACK!</h2>
                        <p className={styles.subTitles}>Adoramos ouvir seus comentários – veja o que foi sugerido ou poste suas ideias agora. Ajude suas grandes ideias a se tornarem parte do Minecraft! Analisamos suas ideias e comentários todos os dias.</p>
                        {/* Degrade na imagem */}
                        <div className={styles.imgDegrade}> <br /></div>
                    </div>
                    <div className={styles.form_container}>
                        {/* Formulário de feedback */}
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
                        {/* Botão de enviar ou editar, dependendo do modo */}
                        {
                            edit ? (
                                <button onClick={() => handleEditar()} className={styles.enviar}>Editar</button>
                            ) : (
                                <button onClick={() => handleEnviar()} className={styles.enviar}>Adicionar</button>
                            )
                        }
                        <p className={styles.errorkk}>{errorShow}</p>

                    </div>

                    <div className={styles.main_container}>
                        {/* Navegação da lista de feedbacks */}
                        <nav className={styles.feedback_container}>
                            <ul className={styles.feedback_list}>
                                <div className={styles.container}>
                                    {/* Degrade na imagem 2 */}
                                    <div className={styles.imgDegrade2}> <br /></div>
                                    {/* Exibição da lista de feedbacks */}
                                    <div className={styles.cntn}>
                                        {dados.map((feedback) => (
                                            <div className={styles.card}>
                                                <li className={styles.feedback_item} key={feedback.id}>
                                                    <p className={styles.feedback_name}><strong>Nome:</strong> {feedback.nome}</p>
                                                    <p className={styles.feedback_email}><strong>Email:</strong> {feedback.email}</p>
                                                    <br />
                                                    <p className={styles.feedback_text}><strong>Mensagem:</strong> {feedback.mensagem}</p>
                                                    {/* Botões de exclusão e edição */}
                                                    <div className={styles.container_button}>
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
                                                    </div>
                                                </li>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </main>

                {/* Componente de rodapé */}
                <Footer />
            </body>
        </>
    );
};

export default feedbackPage;
