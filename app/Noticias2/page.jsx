import styles from "../Noticias2/page.module.css";
const Noticia2 = () => {
    return (
        <>
            <div className={styles.main}>
                <img className={styles.img1} src="https://www.minecraft.net/content/dam/games/badger/key-art/TheArrival_1170x500.png.transform/minecraft-image-large/image.png" />
                <div className={styles.article1}>
                    <div className={styles.article2}>
                        <p className={styles.news}>News</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.article3}>
                        <h1 className={styles.tituloHeader}>AS LENDAS DO MINECRAFT ESTÃO AQUI</h1>
                        <p className={styles.fraseHeader}>É hora de unir o Overworld!</p>
                        <p className={styles.textos}>Você está pronto para levantar sua bandeira no Minecraft Legends? Claro que estou. Estou me preparando há meses, correndo pelo escritório montado em um esfregão e agitando uma bandeira improvisada para as pessoas. Acontece que os funcionários da Mojang não estão tão ansiosos para se juntar à luta quanto os bravos mobs e golems de Minecraft Legends! Mas eles com certeza dão um olhar mortal.</p>
                        <p className={styles.textos}>Felizmente, meus dias de ser expulso do escritório acabaram, porque Minecraft Legends já está disponível no Nintendo Switch, PlayStation 5|4, Steam, Windows 11|10, PC Game Pass, Xbox Game Pass, Xbox Series X|S, Xbox Um e Xbox Cloud Gaming! Na verdade, você poderia estar jogando este incrível jogo de ação e estratégia agora mesmo, em vez de ler este post. Como escritor, meu ego sobreviverá se você clicar agora, porque sei que o mundo superior precisa de você!</p>
                    </div>
                    <iframe className={styles.video} src="https://www.youtube.com/embed/oh2pvWTSJp0?si=nKJ2q6JLaK_uR35f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <p className={styles.tituloHeader}>HISTÓRIA DE LENDAS DE MINECRAFT</p>
                    <div className={styles.article4}>
                        <div className={styles.textos}>
                            <p className={styles.texto}>O mundo do Minecraft é sempre enriquecido por novos mobs como o <strong>camelo</strong>, que fornece transporte incrivelmente alto para dois. Ou o <strong>farejador</strong>, que já foi extinto, mas graças a você florescerá novamente. Por favor, não me fale sobre filhotes de camelo e fungadelas, porque vou ser prejudicado pela fofura que é francamente criminosa.</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.texto}>Para não ficar para trás, os blocos de Trails & Tales mudarão a paisagem do Overworld para sempre. O raro bioma cerejeira não adiciona apenas um lindo oásis rosa, mas também um conjunto completo de madeira rosa. O bambu também está disponível como um conjunto de madeira, incluindo uma jangada exclusiva que pode conter um baú ou mob de sua escolha. Tenha em mente que multidões hostis ainda atacarão, mesmo no meio de um mar tranquilo.</p>
                        </div>
                        <div className={styles.textos}>
                            <p className={styles.tituloHeader}>JOGABILIDADE DO MINECRAFT LEGENDS</p>  
                            <p className={styles.texto}>Em Minecraft Legends, você joga como herói! Você pode pensar que isso significa que você estará fazendo todas as lutas, mas na verdade: você estará liderando. Em Legends você não é o único lutador e, na verdade, seus aliados estão mais bem equipados do que você para lidar com os porquinhos. Sua tarefa é convocar novos amigos e liderá-los na batalha para derrotar os porquinhos furiosos. Você terá que defender aldeias, destruir bases de piglins e muito mais para impedir a corrupção Nether dos piglins. Diferentes aliados têm diferentes pontos fortes e fracos, que quando usados ​​com sabedoria podem lhe dar vantagem na batalha.</p>
                            <p className={styles.texto}>No verdadeiro estilo do Minecraft, você também deve se certificar de não ficar sem recursos, para poder continuar gerando aliados e construindo estruturas defensivas ou ofensivas. Explorar o mundo superior também é importante: é como você conhece novos amigos e descobre novos recursos e até tesouros! Além disso, você experimentará um novo mundo superior cada vez que jogar a campanha, porque cada jogada gera um mapa único.</p>
                        </div>

                        <div className={styles.textos}>
                            <p className={styles.tituloHeader}>PLATAFORMAS DE LENDAS DE MINECRAFT</p>
                            <p className={styles.texto}>Minecraft Legends já está disponível no Nintendo Switch, PlayStation 5|4, Steam, Windows 11|10, PC Game Pass, Xbox Game Pass, Xbox Series X|S, Xbox One e Xbox Cloud Gaming. Se você for assinante do Game Pass, poderá jogar o jogo básico imediatamente, sem nenhum custo adicional!
</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Noticia2;
