// Importa o componente Header de './components/header/header'
import Header from './components/header/header';

// Importa o arquivo de estilos CSS para esta página
import styles from './page.module.css';

// Importa o componente de Link do Next.js para navegação entre páginas
import Link from 'next/link';

// Define a função do componente Home
export default function Home() {
  return (
    <>
      {/* Renderiza o componente Header */}
      <Header />

      {/* Estrutura principal da página */}
      <div className={styles.back}>
        <div className={styles.container1}>

          {/* Cabeçalho da página */}
          <div className={styles.divHeader}>
            <h1 className={styles.tituloHeader}>Minecraft news</h1>
          </div>

          {/* Seção de imagens do cabeçalho */}
          <div>
            <img className={styles.imagemHeader} src="" />
            <img className={styles.img12} src="traçadoQuadriculado.png" alt="" />
          </div>

          {/* Título da seção "Featured" */}
          <div className={styles.divHeader2}>
            <h1 className={styles.tituloCards}>Featured</h1>
          </div>

          {/* Container para notícias principais */}
          <div className={styles.container_mainNews}>

            {/* Link para a primeira notícia */}
            <Link className={styles.mainCard} href={"noticia1"}>
              <div className={styles.textMainCard}>
                <h1>Atualização Trails & Tales está no ar!</h1>
              </div>
            </Link>

            {/* Link para a segunda notícia */}
            <Link className={styles.mainCard} href={"Noticia2"}>
              <div className={styles.textMainCard}>
                <h1>Novidade! Minecraft Legends lançou!</h1>
              </div>
            </Link>

          </div>
        </div>

        {/* Container para os cards de notícias adicionais */}
        <div className={styles.cardContainer}>

          {/* Link para a terceira notícia */}
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

          {/* Link para a página "equipamentos" */}
          <Link className={styles.card} href={"equipamentos"}>
            <div className={styles.backcard}>
              <div className={styles.textCard}>
                <div className={styles.newsTitle}>
                  <p>NEWS</p>
                </div>
                <h2>VEJA TODOS OS ARMAMENTOS DO MINECRAFT AGORA MESMO!!</h2>
                <div className={styles.subTitle_card}>
                  <p>Segunda desc</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Link para a página "encantamentos" */}
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

        {/* Imagem do rodapé */}
        <img className={styles.footerimg} src="minefooter.jpg" alt="" />
      </div>
    </>
  );
}