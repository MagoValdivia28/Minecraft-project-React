import React, { useState } from 'react';
import styles from './membropopup.module.css'; // Substitua pelo caminho correto para o seu arquivo CSS

function MembroPopUp({ handleClose }) {
    return (
        <div className={styles.containerPopUp}>
            <p onClick={handleClose} className={styles.x}>X</p>
            <form>
                    <input placeholder="Nome:"type="text" name="nome" />
                    <input placeholder="Idade:"type="number" name="idade" />
                    <input placeholder="Descrição sobre você:"type="text" name="descricao" />
                    <input placeholder="Cargo:"type="text" name="cargo" />
                <input type="submit" value="Criar" className={styles.enviar} /* onClick={} *//>
            </form>
        </div>
    )
};

export default MembroPopUp;