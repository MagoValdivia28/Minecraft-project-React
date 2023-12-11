import styles from './header.module.css';
import Link from 'next/link';

const Header = () => (
    <header className={styles.header_main}>
        <div className={styles.links_container}>
            <Link className={styles.link} href={'/membros'}><p>sobre nos</p></Link>
            <Link className={styles.link} href={'/equipamentos'}><p>equipamentos</p></Link>
            <Link className={styles.link} href={'/encantamentos'}><p>encantamentos</p></Link>
            <Link className={styles.link} href={'/mobs'}><p>mobs</p></Link>
            <Link className={styles.link} href={'/feedback'}><p>feedback</p></Link>
        </div>
        <Link href={'/'}><img className={styles.logo} src="/logo-minecraft.svg" alt="logo" width={175} height={40} />
        </Link>
        <div className={styles.teste}>
            <Link className={styles.battle} href={'/batalha'}><span className={styles.battle_tittle}>
                Batalhe agora
                </span></Link>
        </div>

    </header>
);

export default Header;