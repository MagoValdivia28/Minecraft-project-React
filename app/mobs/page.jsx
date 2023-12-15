// Importação de módulos e estilos necessários
import Header from '../components/header/header';
import styles from '../mobs/page.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definição do componente Mobs
const Mobs = () => {

    // Inicialização de estados e variáveis
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

    // Função para exibir mensagem de erro por um período e limpar depois
    function sendError(msg) {
        setErrorMSG(msg);
        setTimeout(function () {
            setErrorMSG("");
            setErrorType("");
        }, 5000);
    }

    // Função para definir o tipo de mensagem (erro ou sucesso)
    function sendType(type) {
        if (type === "error") {
            setErrorType("error");
        } else if (type === "success") {
            setErrorType("success");
        }
    }

    // Função de validação dos campos do formulário
    function validation() {
        let errors = [];

        // Verificação de cada campo e construção da lista de erros
        // ...

        if (errors.length > 0) {
            setErrorType("error");
            sendError(errors.join(", "));
            return errors;
        } else {
            sendType("success");
            return true;
        }
    }

    // Efeito para buscar dados dos mobs ao carregar a página
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

    // Função para lidar com o cadastro de um novo mob
    const handleMob = async () => {
        try {
            if (validation() == false) {
                sendError(validation);
            }
            // Criação do novo mob via requisição POST
            // ...

        } catch (error) {
            console.log(error);
        }
    }

    // Efeito para buscar dados de um mob específico quando o ID muda
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

    // Função para deletar um mob
    const deleteMob = async (id) => {
        try {
            // Requisição DELETE para deletar um mob
            // ...

        } catch (error) {
            console.log(error);
        }
    }

    // Função para editar um mob
    const editMob = async (mob) => {
        // Preenchimento dos campos do formulário com os dados do mob selecionado
        // ...

        setEditing(mob);
    }

    // Função para lidar com a edição de um mob
    const handleEditar = async () => {
        try {
            // Requisição PUT para editar um mob
            // ...

            // Atualização dos dados após a edição
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

    // Renderização do componente
    return (
        <>
            {/* Componente do cabeçalho */}
            <Header />

            {/* Seção principal da página */}
            <div className={styles.back}>
                {/* Conteúdo específico da página */}
                {/* ... */}
            </div>

            {/* Formulário para criar ou editar mobs */}
            <div className={styles.createCont}>
                <div className={styles.form_ip}>
                    {/* Campos do formulário */}
                    {/* ... */}

                    {/* Botão para criar ou editar mob */}
                    {
                        editing ? (
                            <button className={styles.create} onClick={() => handleEditar()}>Editar</button>
                        ) : (
                            <button className={styles.create} onClick={() => handleMob()}>Criar</button>
                        )
                    }

                    {/* Exibição de mensagens de erro */}
                    <div className={styles.errorCont}><p>{errorMSG}</p></div>
                </div>
            </div>

            {/* Lista de mobs cadastrados */}
            <div className={styles.mobsList}>
                {/* Exibição dos cards de mobs */}
                {/* ... */}
            </div>
        </>
    );
};

// Exportação do componente Mobs
export default Mobs;
