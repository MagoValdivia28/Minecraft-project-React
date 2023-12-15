// Importações dos componentes e estilos
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from "./noticia1.module.css";

// Definição do componente Noticia1
const Noticia1 = () => {
    return (
        // Estrutura principal da página
        <>
            {/* Componente do cabeçalho */}
            <Header />

            {/* Conteúdo da notícia */}
            <div className={styles.main}>
                {/* Imagem de destaque */}
                <img className={styles.img1} src="https://www.minecraft.net/content/dam/games/minecraft/key-art/highlight-tails.jpg" />

                {/* Divisão para estilizar o indicador de notícia */}
                <div className={styles.article1}>
                    <div className={styles.article2}>
                        {/* Indicador de "News" */}
                        <p className={styles.news}>News</p>
                    </div>
                </div>

                {/* Seção principal */}
                <div className={styles.section}>
                    {/* Informações sobre o autor e data */}
                    <div className={styles.quemFez}>
                        <p className={styles.texto}>Escrito por: Pedro Isac</p>
                        <p className={styles.texto}>Publicada em: 01/12/2023</p>
                    </div>

                    <div className={styles.paddingDiv}>
                        {/* Título da notícia e frase de destaque */}
                        <div className={styles.article3}>
                            <h1 className={styles.tituloHeader}>A ATUALIZAÇÃO DE TRILHAS E CONTOS ESTÁ AQUI</h1>
                            <p className={styles.fraseHeader}>Compartilhe suas histórias, grandes e pequenas</p>

                            {/* Parágrafo inicial da notícia */}
                            <div className={styles.textos}>
                                <p className={styles.texto}><strong>A atualização de Trilhas e Contos está aqui!</strong> Leve sua narrativa para o próximo nível com todos os novos recursos que irão inspirar você a entrar no mundo Minecraft e compartilhar as histórias de suas viagens quando retornar...</p>
                            </div>
                        </div>

                        {/* Vídeo incorporado */}
                        <iframe className={styles.video} src="https://www.youtube.com/embed/Rla3FUlxJdE?si=JDShXpF9tdAcjNnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        {/* Outras seções da notícia */}
                        <div className={styles.article4}>
                            {/* Outros parágrafos da notícia */}
                            {/* ... */}

                            {/* Último parágrafo e chamada para ação */}
                            <div className={styles.textos}>
                                <p className={styles.texto}>Agora apresse-se, <strong>o mundo do Minecraft está esperando por você para compartilhar suas histórias, grandes e pequenas</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Componente do rodapé */}
            <Footer />
        </>
    );
}

// Exporta o componente Noticia1
export default Noticia1;