import axios from "axios";
import { useEffect, useState } from 'react';
import styles from './cadastroEquipamento.module.css';
import { useRouter } from "next/navigation";

const CadastroEquipamento = ({ equipamento, funcCorEquipamento, setDados, value, dados }) => {

    const [nameEquipamento, setNameEquipamento] = useState('');
    const [descriptionEquipamento, setDescriptionEquipamento] = useState('');
    const [materialEquipamento, setMaterialEquipamento] = useState('');
    const [defesaEquipamento, setDefesaEquipamento] = useState(null);
    const [danoEquipamento, setDanoEquipamento] = useState(null);
    const router = useRouter();

    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            await axios.post("/api/equipamentos", { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: value });
            setNameEquipamento('');
            setDescriptionEquipamento('');
            setMaterialEquipamento('');
            setDefesaEquipamento('');
            setDanoEquipamento('');
            console.log(value);
            router.push(`/equipamentos/`);
            setDados([...dados, { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: value }]);
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <form className={styles.formEquipamento} onSubmit={(e) => handleSend(e, equipamento)}>
            <input value={nameEquipamento} onChange={(e) => setNameEquipamento(e.target.value)} type="text" placeholder='Nome do equipamento' />
            <input value={descriptionEquipamento} onChange={(e) => setDescriptionEquipamento(e.target.value)} type="text" placeholder='Descrição do equipamento' />
            <input value={materialEquipamento} onChange={(e) => setMaterialEquipamento(e.target.value)} type="text" placeholder='Material do equipamento' />
            {
                equipamento == "espada" ? (
                    <input value={danoEquipamento} onChange={(e) => setDanoEquipamento(Number(e.target.value))} type="number" placeholder='Valor do dano' />
                ) : (
                    <input value={defesaEquipamento} onChange={(e) => setDefesaEquipamento(Number(e.target.value))} type="number" placeholder='Valor da defesa' />
                )
            }
            <input value={value} type="color" onChange={funcCorEquipamento} />
            <button type="submit" className={styles.buttonSend}>Cadastrar {equipamento}</button>
        </form>
    )
}

export default CadastroEquipamento