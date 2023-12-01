import Header from './components/header/header'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.back}>
        <div className={styles.container1}>
          <div className={styles.divHeader}>
            <h1 className={styles.tituloHeader}>Minecraft news</h1>
          </div>
          <div>

            <img className={styles.imagemHeader} src="" />
            <img className={styles.img12} src="traçadoQuadriculado.png" alt="" />
          </div>
          <div className={styles.divHeader2}>
            <h1 className={styles.tituloCards}>Featured</h1>
          </div>





          <div className={styles.container_mainNews}>

            <Link className={styles.mainCard} href={"noticia1"}>
              <div className={styles.textMainCard}>
                <h1>Atualização Trails & Tales está no ar!</h1>
              </div>
            </Link>

            <Link className={styles.mainCard} href={"noticia2"}>
              <div className={styles.textMainCard}>
                <h1>Minecraft Legends lançou!</h1>
              </div>
            </Link>

          </div>


        </div>


        <div className={styles.cardContainer}>
          <Link className={styles.card} href={"noticia3"}>

            <div className={styles.textCard}>
              <div className={styles.newsTitle}>
                <p>NEWS</p>
              </div>
              <h2> MINECRAFT DUNGEONS PASSA DE 25 MILHÕES DE JOGADORES</h2>
              <div className={styles.subTitle_card}>
                <p>Segunda desc</p>
              </div>
            </div>
          </Link>

          <Link className={styles.card} href={"equipamentos"}>



            <div className={styles.textCard}>
              <div className={styles.newsTitle}>
                <p>NEWS</p>
              </div>
              <h2>VEJA TODOS OS ARMAMENTOS DO MINECRAFT AGORA MESMO!!</h2>
              <div className={styles.subTitle_card}>
                <p>Segunda desc</p>
              </div>
            </div>

          </Link>
          <Link className={styles.card} href={"encantamentos"}>

            <div className={styles.textCard}>
              <div className={styles.newsTitle}>
                <p>NEWS</p>
              </div>
              <h2>VEJA TODOS OS ENCANTAMENTOS DO MINECRAFT AGORA MESMO!!</h2>
              <div className={styles.subTitle_card}>
                <p>Segunda desc</p>
              </div>
            </div>
          </Link>
        </div>

        <img className={styles.footerimg} src="minefooter.jpg" alt="" />
      </div>
    </>
  )
}