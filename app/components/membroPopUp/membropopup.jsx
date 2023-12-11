import React, { useState } from 'react';
import styles from './membropopup.module.css'; // Substitua pelo caminho correto para o seu arquivo CSS

function MembroPopUp({handleClose}) {
    return (
        <div className={styles.containerPopUp}>
             <p onClick={handleClose} className={styles.x}>X</p>
            <div className={styles.imgMembro}>
                <form>
                    <label>
                        Nome:
                        <input type="text" name="nome" />
                    </label>
                    <label>
                        Idade:
                        <input type="number" name="idade" />
                    </label>
                    <label>
                        Descrição:
                        <input type="text" name="descricao" />
                    </label>
                    <label>
                        Cargo na equipe:
                        <input type="text" name="cargo" />
                    </label>
                    <input type="submit" value="Criar" />
                </form>
            </div>
        </div>
    )
};

export default MembroPopUp;