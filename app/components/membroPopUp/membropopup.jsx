import React from 'react';
import styles from './membropopup.module.css'; // Substitua pelo caminho correto para o seu arquivo CSS

function MembroPopUp({ handleClose, handleSend, setNome, setIdade, setDescricao, setCargo, setUrlImagem, nome, idade, descricao, cargo, urlimagem, edited, handleEditar }) {
    return (
        <div className={styles.containerPopUp}>
            <div className={styles.opacidadeImg}>

                <form className={styles.formInputs}>
                    <input className={styles.inpName} value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome:" type="text" name="nome" />
                    <input className={styles.imp} value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Idade:" type="number" name="idade" />
                    <input className={styles.imp} value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descricao sobre voce:" type="text" name="descricao" />
                    <input className={styles.imp} value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Cargo:" type="text" name="cargo" />
                    <input className={styles.imp} value={urlimagem} onChange={(e) => setUrlImagem(e.target.value)} placeholder="Insira o URL da imagem:" type="text" name="urlImagem" />
                </form>

                <div className={styles.buttonsContainer}>
                    {
                        edited ? (
                            <input type="submit" value="Editar membro" className={styles.enviar} onClick={handleEditar} />
                        ) : (
                            <input type="submit" value="Criar novo membro" className={styles.enviar} onClick={handleSend} />
                        )
                    }
                    <p onClick={handleClose} className={styles.botaoRemover}>Cancelar</p>
                </div>

            </div>
        </div>
    )
};

export default MembroPopUp;