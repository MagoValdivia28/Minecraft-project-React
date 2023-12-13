import axios from "axios";
import { useEffect, useState } from 'react';
import styles from './cadastroEquipamento.module.css';
import { useRouter } from "next/navigation";
import verificacoesEquipamentos from "../verifications/Verifications.js";

const CadastroEquipamento = ({ equipamento, funcCorEquipamento, setDados, corEquipamento, edited, setEdit, setarCor, fechar }) => {

    const [nameEquipamento, setNameEquipamento] = useState('');
    const [descriptionEquipamento, setDescriptionEquipamento] = useState('');
    const [materialEquipamento, setMaterialEquipamento] = useState('');
    const [defesaEquipamento, setDefesaEquipamento] = useState(null);
    const [danoEquipamento, setDanoEquipamento] = useState(null);
    const [errors, setErrors] = useState([]);
    const router = useRouter();


    const handleSendEdit = async (edited) => {
        try {
            let errorsArray = [];
            verificacoesEquipamentos(nameEquipamento, descriptionEquipamento, materialEquipamento, edited.tipo, danoEquipamento, defesaEquipamento, corEquipamento, errorsArray);
            if (errorsArray.length > 0) {
                setErrors(errorsArray);
            } else {
                await axios.put(`/api/equipamentos/id/${edited.id}`, { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo: edited.tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: corEquipamento });
                setNameEquipamento('');
                setDescriptionEquipamento('');
                setMaterialEquipamento('');
                setDefesaEquipamento('');
                setDanoEquipamento('');
                setarCor('#000000');
                router.push(`/equipamentos/`);
                const url = `/api/equipamentos?type=${edited.tipo}`;
                const response = await axios.get(url);
                setDados(response.data); // Update dados with the filtered data
                setEdit(null); // Clear the edited student
            }
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    const handleSend = async (tipo) => {
        try {
            let errorsArray = [];
            verificacoesEquipamentos(nameEquipamento, descriptionEquipamento, materialEquipamento, tipo, danoEquipamento, defesaEquipamento, corEquipamento, errorsArray);
            const url = `/api/equipamentos?type=${equipamento}`;
            if (errorsArray.length > 0) {
                setErrors(errorsArray);
            } else {
                await axios.post("/api/equipamentos", { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: corEquipamento });
                setNameEquipamento('');
                setDescriptionEquipamento('');
                setMaterialEquipamento('');
                setDefesaEquipamento('');
                setDanoEquipamento('');
                setarCor('#000000');
                router.push(`/equipamentos/`);
                const response = await axios.get(url);
                setDados(response.data);
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    useEffect(() => {
        if (edited) {
            setNameEquipamento(edited.nome);
            setDescriptionEquipamento(edited.descricao);
            setMaterialEquipamento(edited.material);
            setDefesaEquipamento(edited.defesa);
            setDanoEquipamento(edited.dano);
        }
    }, [edited])

    return (
        <div onClick={fechar} className={styles.formEquipamento}>
            <input value={nameEquipamento} onChange={(e) => setNameEquipamento(e.target.value)} type="text" placeholder='Nome do equipamento' />
            {
                errors.some(erro => erro === "Nome não informado") ? (
                    <span className={styles.errorMsg}>Nome não informado</span>
                ) : null
            }
            <input value={descriptionEquipamento} onChange={(e) => setDescriptionEquipamento(e.target.value)} type="text" placeholder='Descrição do equipamento' />
            {
                errors.some(erro => erro === "Descrição não informada") ? (
                    <span className={styles.errorMsg}>Descrição não informada</span>
                ) : null
            }
            <input value={materialEquipamento} onChange={(e) => setMaterialEquipamento(e.target.value)} type="text" placeholder='Material do equipamento' />
            {
                errors.some(erro => erro === "Material não informado") ? (
                    <span className={styles.errorMsg}>Material não informado</span>
                ) : null
            }
            {
                equipamento == "espada" ? (
                    <>
                        <input value={danoEquipamento} onChange={(e) => setDanoEquipamento(Number(e.target.value))} type="number" placeholder='Valor do dano' />
                        {
                            errors.some(erro => erro === "Dano deve ser entre 0 e 20") ? (
                                <span className={styles.errorMsg}>Dano deve ser entre 0 e 20</span>
                            ) : null
                        }
                    </>
                ) : (
                    <>
                        <input value={defesaEquipamento} onChange={(e) => setDefesaEquipamento(Number(e.target.value))} type="number" placeholder='Valor da defesa' />
                        {
                            errors.some(erro => erro === "Defesa deve ser entre 0 e 20") ? (
                                <span className={styles.errorMsg}>Defesa deve ser entre 0 e 20</span>
                            ) : null
                        }
                    </>
                )
            }
            {
                errors.some(erro => erro === "O valor do dano ou da defesa tem que ser informado") ? (
                    <span className={styles.errorMsg}>O valor do dano ou da defesa tem que ser informado</span>
                ) : null
            }
            {
                errors.some(erro => erro === "Dano e defesa devem ser um número") ? (
                    <span className={styles.errorMsg}>Dano e defesa devem ser um número</span>
                ) : null
            }
            <div className={styles.containerInputColor}>
                <label>Cor do equipamento: </label>
                <input value={corEquipamento} type="color" onChange={funcCorEquipamento} />
            </div>
            {
                errors.some(erro => erro === "Cor não informada") ? (
                    <span className={styles.errorMsg}>Cor não informada</span>
                ) : null
            }
            {
                edited ? (
                    <button onClick={(e) => handleSendEdit(edited)} type="submit" className={styles.buttonSend}>Editar {equipamento}</button>

                ) : (
                    <button onClick={(e) => handleSend(equipamento)} type="submit" className={styles.buttonSend}>Cadastrar {equipamento}</button>

                )
            }
        </div>

    )
}

export default CadastroEquipamento