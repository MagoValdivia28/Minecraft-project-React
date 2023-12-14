"use client"

import styles from './header.module.css';
import Link from 'next/link';
import { LiaBarsSolid } from "react-icons/lia";
import { useState } from 'react';

const Header = () => {
    const [headerResponsive, setHeaderResponsive] = useState(false);
    return (
        <header className={styles.header_main}>
            <i onClick={() => setHeaderResponsive(!headerResponsive)} className={styles.treeBars}><LiaBarsSolid /></i>

            {
                headerResponsive && (
                    <div className={styles.containerResponsive}>
                        <Link className={styles.linkResponsive} href={'/equipamentos'}><p>EQUIPAMENTOS</p></Link>
                        <Link className={styles.linkResponsive} href={'/encantamentos'}><p>ENCANTAMENTOS</p></Link>
                        <Link className={styles.linkResponsive} href={'/mobs'}><p>MOBS</p></Link>
                        <Link className={styles.linkResponsive} href={'/feedback'}><p>FEEDBACK</p></Link>
                        <Link className={styles.linkResponsive} href={'/membros'}><p>CRIADORES</p></Link>
                        <Link className={`${styles.linkResponsive} ${styles.battleNow}`} href={'/batalha'}><span className={styles.battle_tittle}>Batalhe agora</span></Link>
                    </div>
                )
            }

            <div className={styles.links_container}>
                <Link className={styles.link} href={'/equipamentos'}><p>EQUIPAMENTOS</p></Link>
                <Link className={styles.link} href={'/encantamentos'}><p>ENCANTAMENTOS</p></Link>
                <Link className={styles.link} href={'/mobs'}><p>MOBS</p></Link>
                <Link className={styles.link} href={'/feedback'}><p>FEEDBACK</p></Link>
                <Link className={styles.link} href={'/membros'}><p>CRIADORES</p></Link>
            </div>
            <Link className={styles.logoAii} href={'/'}><img className={styles.logo} src="/logo-minecraft.svg" alt="logo" width={175} height={40} /></Link>
            <div className={styles.teste}>
                <Link className={styles.battle} href={'/batalha'}><span className={styles.battle_tittle}>Batalhe agora</span></Link>
            </div>

        </header>
    )
};

export default Header;