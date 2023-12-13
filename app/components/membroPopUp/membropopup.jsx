import React from 'react';
import styles from './membropopup.module.css'; // Substitua pelo caminho correto para o seu arquivo CSS

function MembroPopUp({ handleClose, handleSend, setNome, setIdade, setDescricao, setCargo, setUrlImagem, setCorCard }) {
    return (
        <div className={styles.containerPopUp}>
            <div className={styles.opacidadeImg}>
                <p onClick={handleClose} className={styles.botaoRemover}>X</p>
                <form className={styles.formInputs}>
                    <input onChange={(e) => setNome(e.target.value)} placeholder="Nome:" type="text" name="nome" />
                    <input onChange={(e) => setIdade(e.target.value)} placeholder="Idade:" type="number" name="idade" />
                    <input onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição sobre você:" type="text" name="descricao" />
                    <input onChange={(e) => setCargo(e.target.value)} placeholder="Cargo:" type="text" name="cargo" />
                    <input onChange={(e) => setUrlImagem(e.target.value)} placeholder="Insira o URL da imagem:" type="text" name="urlImagem" />
                    <input onChange={(e) => setCorCard(e.target.value)} placeholder="Escolha a cor do card de fundo:" type="color" name="backgrouCor" />
                </form>
                <input type="submit" value="Criar" className={styles.enviar} onClick={handleSend} />
            </div>
        </div>
    )
};

export default MembroPopUp;