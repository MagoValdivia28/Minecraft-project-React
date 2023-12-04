import axios from "axios";
import { useEffect, useState } from 'react';
import styles from './cadastroEquipamento.module.css';
import { useRouter } from "next/navigation";

const CadastroEquipamento = ({ equipamento, funcCorEquipamento, setDados }) => {

    const [nameEquipamento, setNameEquipamento] = useState('');
    const [descriptionEquipamento, setDescriptionEquipamento] = useState('');
    const [materialEquipamento, setMaterialEquipamento] = useState('');
    const [defesaEquipamento, setDefesaEquipamento] = useState(0);
    const [danoEquipamento, setDanoEquipamento] = useState(0);
    const [showCor, setShowCor] = useState(null);
    const router = useRouter();


    useEffect(() => {
        if (equipamento == 'capacete') {
            setShowCor('corCapacete');
        } else if (equipamento == 'peitoral') {
            setShowCor('corPeitoral');
        } else if (equipamento == 'calca') {
            setShowCor('corCalca');
        } else if (equipamento == 'bota') {
            setShowCor('corBota');
        } else if (equipamento == 'espada') {
            setShowCor('corEspada');
        } else {
            console.log('Não foi possível definir a cor do equipamento');
        }
    }, [equipamento])

    const handleSend = async (e, tipo) => {
        e.preventDefault();
        try {
            await axios.post("/api/equipamentos", { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: showCor });
            setNameEquipamento('');
            setDescriptionEquipamento('');
            setMaterialEquipamento('');
            setDefesaEquipamento('');
            setDanoEquipamento('');
            console.log(showCor);
            router.push(`/equipamentos/`);
            setDados([...dados, { nome: nameEquipamento, descricao: descriptionEquipamento, material: materialEquipamento, tipo, dano: danoEquipamento, defesa: defesaEquipamento, cor: showCor }]);
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
            <input value={showCor} type="color" onChange={funcCorEquipamento} />
            <button type="submit" className={styles.buttonSend}>Cadastrar {equipamento}</button>
        </form>
    )
}

export default CadastroEquipamento