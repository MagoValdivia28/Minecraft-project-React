import React from 'react';
import styles from './membropopup.module.css'; // Substitua pelo caminho correto para o seu arquivo CSS

function MembroPopUp({ handleClose, handleSend, setNome, setIdade, setDescricao, setCargo, setUrlImagem, nome, idade, descricao, cargo, urlimagem, edited, handleEditar }) {
    return (
        <div className={styles.containerPopUp}>
            <div className={styles.opacidadeImg}>
                <p onClick={handleClose} className={styles.botaoRemover}>X</p>
                <form className={styles.formInputs}>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome:" type="text" name="nome" />
                    <input value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Idade:" type="number" name="idade" />
                    <input value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição sobre você:" type="text" name="descricao" />
                    <input value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Cargo:" type="text" name="cargo" />
                    <input value={urlimagem} onChange={(e) => setUrlImagem(e.target.value)} placeholder="Insira o URL da imagem:" type="text" name="urlImagem" />
                </form>
                {
                    edited ? (
                        <input type="submit" value="Editar" className={styles.enviar} onClick={handleEditar} />
                    ) : (
                        <input type="submit" value="Criar" className={styles.enviar} onClick={handleSend} />
                    )
                }
            </div>
        </div>
    )
};

export default MembroPopUp;