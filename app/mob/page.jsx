import Header from '../components/header/header';
import styles from './page.module.css';

const Mobs = () => {
    return (
        <>

            <Header />
            <div className={styles.main}>
                <div className={styles.divs} >
                    <p className={styles.hometitle}>Cuidado Mobs Perigosos no local ⚠</p>
                </div>

                <div className={styles.divs}>
                    <ul className={styles.cardlist}>
                        <li><a className={styles.cardbox} href='https://help.minecraft.net/hc/en-us/categories/12617297898381'>Mineee</a></li>
                        <li><a className={styles.cardbox} href='https://help.minecraft.net/hc/en-us/categories/12617297898381'>Mineee</a></li>
                        <li><a className={styles.cardbox} href='https://help.minecraft.net/hc/en-us/categories/12617297898381'>Mineee</a></li>
                    </ul>
                </div>
            </div>

        </>
    );
};

export default Mobs;