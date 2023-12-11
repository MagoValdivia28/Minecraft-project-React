"use client"
import axios from 'axios'
import styles from './mobs.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Mobs = () => {


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/mobs');
                setMobs(response.data);
                setDados(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchMobs();
    }, []);

    const handleMob = async (tipo) => {
        let tipoMob = document.getElementById(`${tipo}Img`);
        tipoMob.classList.remove(`${styles.hidden}`);
        setMobs(tipo);
    } 

    return (
        <>
        
        </>

    )

}