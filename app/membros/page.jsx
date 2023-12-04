"use client"
import Header from '../components/header/header';
import styles from './membros.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const membroPage = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>

                <h1 className={styles.textoHeader}>Membros</h1>
                <div className={styles.sobreEquipe}>
                    <div className={styles.imgEquipe}>
                        <img className={styles.img1} src="/enigma.jpg" />
                    </div>
                    <div className={styles.textoEquipe}>
                        <p>É com grande satisfação que apresentamos a equipe de desenvolvimento de sistemas ENIGMA, dedicada e altamente desenvolvida na concepção e implementação de soluções tecnológicas inovadoras. Nossa equipe é composta por profissionais especializados, cujo comprometimento e expertise são fundamentais para o sucesso de nossos projetos.
                            A ENIGMA se destaca pela abordagem colaborativa e multidisciplinar de seus membros, reunindo talentos em áreas como análise de sistemas, programação, design de interfaces e gerenciamento de projetos. Cada membro possui vasta experiência no desenvolvimento de soluções personalizadas, adaptadas às necessidades específicas de nossos clientes.
                        </p>
                    </div>
                </div>
                <div className={styles.equipe}>
                    <div className={styles.umAoTres}>
                        <div className={styles.cardPessoa1}>
                            <img className={styles.imgPessoa} src="/imagemfacemine1.webp" />
                            <h2 className={styles.pessoa}>Felipe Pedro</h2>
                            <p>Tech Lead/Desenvolvedor</p>
                        </div>
                        <div className={styles.cardPessoa2}>
                            <img className={styles.imgPessoa} src="/imagemfacemine2.jpeg" />
                            <h2 className={styles.pessoa}>Guilherme Rocha</h2>
                            <p>Desenvolvedor</p>
                        </div>
                        <div className={styles.cardPessoa3}>
                            <img className={styles.imgPessoa} src="/imagemfacemine3.png" />
                            <h2 className={styles.pessoa}>Matheus Coco</h2>
                            <p>Desenvolvedor</p>
                        </div>
                    </div>
                    <div className={styles.quatroAoSeis}>
                        <div className={styles.cardPessoa4}>
                            <img className={styles.imgPessoa} src="/imagemfacemine4.png" />
                            <h2 className={styles.pessoa}>Matheus Gomes</h2>
                            <p>Desenvolvedor</p>
                        </div>
                        <div className={styles.cardPessoa5}>
                            <img className={styles.imgPessoa} src="/imagemfacemine5.png" />
                            <h2 className={styles.pessoa}>Pedro Isac</h2>
                            <p>Desenvolvedor</p>
                        </div>
                        <div className={styles.cardPessoa6}>
                            <img className={styles.imgPessoa} src="/imagemfacemine6.png" />
                            <h2 className={styles.pessoa}>Thayna Vazzoler</h2>
                            <p>Desenvolvedor</p>
                        </div>

                    </div>
                    <div className={styles.cardCriarMembro}>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default membroPage;