import Header from '../components/header/header';
import styles from './page.module.css';

const Mobs = () => {
    return (
        <main className={styles.main}>
            <div className={styles.opacidade}>
                <Header />
                <div className={styles.titulo}>
                    <h1>Mobs</h1>
                </div>

                <div className={styles.containerMob}>
                    <div className={styles.mob}><img src={"/mobs.webp"} /></div>
                    <div className={styles.tituloText}>
                        <p>
                            Em Minecraft, "mobs" refere-se a criaturas móveis encontradas no jogo. Existem diferentes tipos de mobs,
                            incluindo animais pacíficos como vacas e porcos, assim como criaturas hostis como zumbis e esqueletos.
                             Mobs desempenham papéis diversos, alguns fornecem recursos, enquanto outros representam 
                             desafios para os jogadores. O termo "mobs" é uma abreviação de "mobile entities" (entidades móveis).</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Mobs;