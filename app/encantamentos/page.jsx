
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Header from '../components/header/header';
import styles from './page.module.css';



const Page_de_encantamentos = () => {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.titles_container}>
                <h1 className={styles.titles}>Encantamentos</h1>
                <h2 className={styles.subTitles}>Encantamentos</h2>
            </div>
            <div className={styles.main_container}>
                <nav className={styles.encantamentos_container}>
                    <ul className={styles.encantamentos_list}>
                        Centro
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book1} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book2} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book3} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book4} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span>
                                <img className={styles.book5} src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>

                    </ul>
                    <button className={styles.arrows}>
                        <MdArrowForwardIos />
                    </button>
                    <button className={styles.arrows}>
                        <MdArrowBackIos />
                    </button>
                </nav>
            </div>
        </main>

    )
}

export default Page_de_encantamentos;