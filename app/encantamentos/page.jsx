
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
                            <span className={styles.book}>
                                <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                <p className={styles.book_name}>afiacao</p>
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span className={styles.book1}>
                                <img  src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                <p className={styles.book_name}>protecao</p>
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span className={styles.book2}>
                                <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                                <p className={styles.book_name}>inquebravel</p>
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span className={styles.book3}>
                                <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span className={styles.book4}>
                                <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
                            </span>
                        </li>
                        <li className={styles.encantamento}>
                            <span className={styles.book5}>
                                <img src="/Enchanted_Book.webp" alt="encantamento1" width={64} height={64} />
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