"use client"
import Header from '../components/header/header';
import styles from './membros.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const membroPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>Membros</h1>
            </div>
        </div>
    )
}

export default membroPage;