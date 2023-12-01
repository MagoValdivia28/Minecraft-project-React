import Header from "../components/header/header";
import styles from "./noticia1.module.css";
const Noticia1 = () => {
    return (
        <>
            <div className={styles.main}>
                <img className={styles.img1} src="https://www.minecraft.net/content/dam/games/minecraft/key-art/highlight-tails.jpg" />
                <div className={styles.article1}>
                    <div className={styles.article2}>
                        <p className={styles.news}>News</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.article3}>
                        <h1 className={styles.tituloHeader}>A ATUALIZAÇÃO DE TRILHAS E CONTOS ESTÁ AQUI</h1>
                        <p className={styles.fraseHeader}>Compartilhe suas histórias, grandes e pequenas</p>
                        <div className={styles.textos}>
                            <p className={styles.texto}><strong>A atualização de Trilhas e Contos está aqui!</strong> Leve sua narrativa para o próximo nível com todos os novos recursos que irão inspirar você a entrar no mundo Minecraft e compartilhar as histórias de suas viagens quando retornar. Se você aproveitar as vantagens dos novos acabamentos da armadura, algumas dessas histórias serão contadas simplesmente entrando em uma sala. Mas não se preocupe, você pode adotar uma abordagem mais clássica, escrevendo sua história em um livro que você mantém seguro e organizado em sua estante esculpida.</p>
                        </div>
                    </div>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/Rla3FUlxJdE?si=JDShXpF9tdAcjNnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.article4}>
                        <div className={styles.textos}>
                            <p className={styles.texto}>O mundo do Minecraft é sempre enriquecido por novos mobs como o <strong>camelo</strong>, que fornece transporte incrivelmente alto para dois. Ou o <strong>farejador</strong>, que já foi extinto, mas graças a você florescerá novamente. Por favor, não me fale sobre filhotes de camelo e fungadelas, porque vou ser prejudicado pela fofura que é francamente criminosa.</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>Para não ficar para trás, os blocos de Trails & Tales mudarão a paisagem do Overworld para sempre. O raro <strong>bioma cerejeira</strong> não adiciona apenas um lindo oásis rosa, mas também um conjunto completo de madeira rosa. O  <strong>bambu</strong> também está disponível como um conjunto de madeira, incluindo uma jangada exclusiva que pode conter um baú ou mob de sua escolha. Tenha em mente que multidões hostis ainda atacarão, mesmo no meio de um mar tranquilo.</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>Uma das muitas coisas que você pode fazer com madeira são as <strong>placas</strong>, que agora podem ser penduradas nas laterais ou embaixo dos blocos. Talvez você queira usá-los para apontar o caminho para algumas ruínas enterradas cheias de <strong>areia suspeita</strong>, ou para que os outros saibam que o assobio ali é apenas o seu creeper feito com sons de <strong>multidão tocáveis</strong>.</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>A partir de hoje, a atualização Trails & Tales estará disponível para download para <a className={styles.links} href="https://www.minecraft.net/en-us/download">Minecraft: Java Edition</a> no Windows, macOS e Linux; e <a className={styles.links} href="https://www.minecraft.net/en-us/download">Minecraft: Bedrock Edition</a> no Xbox, PlayStation, Nintendo Switch, iOS, Android, Windows e um novo dispositivo: <a className={styles.links} href="https://www.minecraft.net/pt-pt/article/minecraft-available-chromebook">Chromebook!</a></p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>Agora apresse-se,<strong> o mundo do Minecraft está esperando por você para compartilhar suas histórias, grandes e pequenas</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Noticia1;