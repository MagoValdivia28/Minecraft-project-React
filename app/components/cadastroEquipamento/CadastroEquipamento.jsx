import axios from "axios";
import { useEffect, useState } from 'react';
import styles from './cadastroEquipamento.module.css';
import { useRouter } from "next/navigation";
import verificacoesEquipamentos from "../verifications/Verifications.js";

const CadastroEquipamento = ({ equipamento, funcCorEquipamento, setDados, value, dados }) => {

    const [nameEquipamento, setNameEquipamento] = useState('');
    const [descriptionEquipamento, setDescriptionEquipamento] = useState('');
    const [materialEquipamento, setMaterialEquipamento] = useState('');
    const [defesaEquipamento, setDefesaEquipamento] = useState(null);
    const [danoEquipamento, setDanoEquipamento] = useState(null);
    const [errors, setErrors] = useState([]);
    const router = useRouter();

    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            let errorsArray = [];
            verificacoesEquipamentos(nameEquipamento, descriptionEquipamento, materialEquipamento, tipo, danoEquipamento, defesaEquipamento, value, errorsArray);
            if (errorsArray.length > 0) {
                setErrors(errorsArray);
            } else {
                await axios.post("/api/equipamentos", { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: value });
                setNameEquipamento('');
                setDescriptionEquipamento('');
                setMaterialEquipamento('');
                setDefesaEquipamento('');
                setDanoEquipamento('');
                console.log(value);
                router.push(`/equipamentos/`);
                setDados([...dados, { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: value }]);
            }
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <form className={styles.formEquipamento} onSubmit={(e) => handleSend(e, equipamento)}>
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
                <input value={value} type="color" onChange={funcCorEquipamento} />
            </div>
            {
                errors.some(erro => erro === "Cor não informada") ? (
                    <span className={styles.errorMsg}>Cor não informada</span>
                ) : null
            }
            <button type="submit" className={styles.buttonSend}>Cadastrar {equipamento}</button>
        </form>
    )
}

export default CadastroEquipamento