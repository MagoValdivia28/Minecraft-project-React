import styles from './detalhesMembroPopUp.module.css'


const DetalhesMembroPopUp = ({ idKey, membroArray, funcEdit, funcDel, popUP }) => {
    return (
        <div>
            <div key={idKey} className={styles.containerPopUp}>
                <p onClick={() => popUP(null)} className={styles.x}>X</p>
                <div className={styles.imgMembro}>
                    <img src={membroArray.imagem} alt="membro" />
                </div>

                
                <div className={styles.itens}>
                    <div>
                        <div className={styles.item}>
                            <label>Nome:</label>
                            <h1>{membroArray.nome}</h1>
                        </div>
                        <div className={styles.item}>
                            <label>Idade:</label>
                            <h1>{membroArray.idade}</h1>
                        </div>
                    </div>
                    <div>
                        <div className={styles.item}>
                            <label>Descrição:</label>
                            <h1>{membroArray.descricao}</h1>
                        </div>
                        <div className={styles.item}>
                            <label>Cargo:</label>
                            <h1>{membroArray.cargo}</h1>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.buttons}>
                    <button className={styles.rmv} onClick={funcDel}>Remover</button>
                    <button className={styles.edit} onClick={funcEdit}>Editar</button>
                </div>
            </div>
        </div>
    )
}

export default DetalhesMembroPopUp
