import CadastroEquipamento from "../cadastroEquipamento/CadastroEquipamento"
import styles from './containerEquipamento.module.css'

const ContainerEquipmento = ({dados, setDados, equipamento, handleCorEquipamentos, corEquipamento, editEquipamento, setEditEquipamento, setCorEquipamento, setMoreInfo}) => {
    return (
        <>
            <div className={`${styles.containerCreation} ${styles[`${equipamento}Creation`]} `}>
                {dados.length > 0 ? (
                    <div className={styles.equipamentosPredefinidos}>
                        {
                            dados.map((equipamentoMap) => (
                                <div onClick={() => setMoreInfo(equipamentoMap.id)} className={`${styles.itemArmadura} ${styles[`item${equipamento}`]}`} key={equipamentoMap.id}>
                                    <img style={{ backgroundColor: equipamentoMap.cor }} id={`${equipamento}Img`} className={`${styles.itemDoItem}`} src={`inventory/${equipamento}Final.png`} alt={equipamento} />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>Não há {equipamento}s cadastrados</p>
                )}
            </div>
            <CadastroEquipamento equipamento={equipamento} funcCorEquipamento={(e) => handleCorEquipamentos(e)} setDados={setDados} corEquipamento={corEquipamento} edited={editEquipamento} setEdit={setEditEquipamento} setarCor={setCorEquipamento} fechar={() => setMoreInfo(null)} />
        </>
    )
}

export default ContainerEquipmento