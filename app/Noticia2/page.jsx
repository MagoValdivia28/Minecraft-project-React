// Importa estilos CSS module para esta página
import styles from "../Noticia2/page.module.css";

// Importa componentes Header e Footer
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// Componente React que representa a página de notícias específica
const Noticia2 = () => {
    return (
        <>
            {/* Renderiza o componente Header */}
            <Header />

            {/* Início da seção principal da página usando estilos do CSS module */}
            <div className={styles.main}>
                {/* Imagem principal da notícia */}
                <img className={styles.img1} src="https://www.minecraft.net/content/dam/games/badger/key-art/TheArrival_1170x500.png.transform/minecraft-image-large/image.png" />

                {/* Seção de artigo com informações sobre a notícia */}
                <div className={styles.article1}>
                    <div className={styles.article2}>
                        {/* Parágrafo indicando a categoria da notícia (News) */}
                        <p className={styles.news}>News</p>
                    </div>
                </div>

                {/* Seção principal da notícia */}
                <div className={styles.section}>
                    {/* Artigo com título, frase de cabeçalho e parágrafos de texto */}
                    <div className={styles.article3}>
                        <h1 className={styles.tituloHeader}>AS LENDAS DO MINECRAFT ESTÃO AQUI</h1>
                        <p className={styles.fraseHeader}>É hora de unir o Overworld!</p>
                        {/* Parágrafos de texto sobre a notícia */}
                        <p className={styles.textos}>Você está pronto para levantar sua bandeira no Minecraft Legends? ...</p>
                        <p className={styles.textos}>Felizmente, meus dias de ser expulso do escritório acabaram, porque Minecraft Legends já está disponível...</p>
                    </div>

                    {/* Inserção de vídeo do YouTube */}
                    <iframe className={styles.video} src="https://www.youtube.com/embed/oh2pvWTSJp0?si=nKJ2q6JLaK_uR35f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    {/* Título relacionado à história de Minecraft Legends */}
                    <p className={styles.tituloHeader}>HISTÓRIA DE LENDAS DE MINECRAFT</p>

                    {/* Artigo com parágrafos de texto sobre a história */}
                    <div className={styles.article4}>
                        <div className={styles.textos}>
                            <p className={styles.texto}>O mundo do Minecraft é sempre enriquecido por novos mobs como o <strong>camelo</strong>, que fornece transporte incrivelmente alto para dois...</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>Para não ficar para trás, os blocos de Trails & Tales mudarão a paisagem do Overworld para sempre...</p>
                        </div>

                        {/* Título relacionado à jogabilidade de Minecraft Legends */}
                        <p className={styles.tituloHeader}>JOGABILIDADE DO MINECRAFT LEGENDS</p>

                        {/* Parágrafos de texto sobre a jogabilidade */}
                        <p className={styles.texto}>Em Minecraft Legends, você joga como herói! Você pode pensar que isso significa que você estará fazendo todas as lutas...</p>
                        <p className={styles.texto}>No verdadeiro estilo do Minecraft, você também deve se certificar de não ficar sem recursos...</p>

                        {/* Outros parágrafos relacionados a plataformas, edições e modos de jogo */}
                        {/* ... */}

                        {/* Inserção de outro vídeo do YouTube */}
                        <iframe className={styles.video} src="https://www.youtube.com/embed/lw6f-tJKoao?si=iMsnDFKAgngqLfqC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        {/* Outros parágrafos relacionados a "Lost Legends", mercado e conclusão */}
                        {/* ... */}
                    </div>
                </div>

                {/* Renderiza o componente Footer */}
                <Footer />
            </div>
        </>
    );
}

// Exporta o componente Noticia2 como padrão
export default Noticia2;
