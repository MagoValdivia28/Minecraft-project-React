import styles from './moreInfoEquipamento.module.css'

const MoreInfoEquipamento = ({ idKey, equipamentoArray, funcEdit, funcDel, popUP }) => {
    return (
        <div key={idKey} className={styles.containerPopUp}>
            <p onClick={() => popUP(null)} className={styles.x}>X</p>
            <div className={styles.imgEquipamento}>
                {
                    equipamentoArray.tipo == 'capacete' ? (
                        <img style={{ backgroundColor: equipamentoArray.cor }} src={"inventory/capaceteFinal.png"} alt="capacete" />
                    ) : equipamentoArray.tipo == 'peitoral' ? (
                        <img style={{ backgroundColor: equipamentoArray.cor }} src={"inventory/peitoralFinal.png"} alt="peitoral" />
                    ) : equipamentoArray.tipo == 'calca' ? (
                        <img style={{ backgroundColor: equipamentoArray.cor }} src={"inventory/calcaFinal.png"} alt="calça" />
                    ) : equipamentoArray.tipo == 'bota' ? (
                        <img style={{ backgroundColor: equipamentoArray.cor }} src={"inventory/botaFinal.png"} alt="bota" />
                    ) : equipamentoArray.tipo == 'espada' ? (
                        <img style={{ backgroundColor: equipamentoArray.cor }} src={"inventory/espadaFinal.png"} alt="espada" />
                    ) : null

                }
            </div>
            <div className={styles.itens}>
                <div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }}>Nome:</label>
                        <h1>{equipamentoArray.nome}</h1>
                    </div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }} >Descrição:</label>
                        <h1>{equipamentoArray.descricao}</h1>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }}>Material:</label>
                        <h1>{equipamentoArray.material}</h1>
                    </div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }}>Tipo:</label>
                        <h1>{equipamentoArray.tipo}</h1>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }}>Dano:</label>
                        <h1>{equipamentoArray.dano}</h1>
                    </div>
                    <div className={styles.item}>
                        <label style={{ color: equipamentoArray.cor }}>Defesa:</label>
                        <h1>{equipamentoArray.defesa}</h1>
                    </div>
                </div>

            </div>
            <div className={styles.buttons}>

                <button className={styles.rmv} onClick={funcDel}>Remover</button>
                <button className={styles.edit} onClick={funcEdit}>Editar</button>

            </div>
        </div>
    )
}

export default MoreInfoEquipamento
