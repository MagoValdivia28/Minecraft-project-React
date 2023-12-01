
import Styles from "./page.module.css";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiLinktree } from "react-icons/si"; 

export default function NoticiaPage() {
    return (
        <>
          
            <div className={Styles.main}>
                <img className={Styles.img} src="https://www.minecraft.net/content/dam/games/dungeons/key-art/md25-header.jpg.transform/minecraft-image-medium/image.jpg" alt="Imagem do Minecraft"/>

                <div className={Styles.news}>
                    <p>News</p>
                </div>
                <div className={Styles.text}>
                    <h1>MASMORRAS DO MINECRAFT: 25</h1>
                    <h1>MILHÕES DE JOGADORES</h1>
                    <h1>CONTANDO A SUA HISTÓRIA</h1>

                    <p className={Styles.description}>Um sincero ‘Obrigado!’!</p>
                </div>

                <div className={Styles.text2}>
                    <p className={Styles.description2}>O tempo voa quando você está se divertindo. Antes que você perceba, seu jogo já está crescido e andando com suas próprias perninhas. Hoje, no dia do anúncio do Minecraft Dungeons há cinco anos, temos orgulho de compartilhar que nosso joguinho atingiu um marco e ultrapassou 25 milhões de jogadores únicos!</p>
                    <p className={Styles.description2}>Não é apenas um número com o qual nem mesmo as pessoas mais brilhantes do Mojang Studios podem contar - também é muito humilhante ver que tantos heróis pegaram o manto para livrar o Mundo Superior da influência do Orbe da Dominância. Esta jornada tem sido incrível e convidamos você a relembrar conosco.</p>
                </div>

                <div>
                    <a href="https://www.youtube.com/watch?v=M3V-NMwaPiM"><img src="https://i.ytimg.com/vi/M3V-NMwaPiM/maxresdefault.jpg" alt="Imagem do Minecraft" className={Styles.img2} /></a>
                    
                </div>
                <div className={Styles.text2}>
                    <p className={Styles.description2}>Minecraft Dungeons começou como um projeto apaixonante, inspirado em nosso amor pelos jogos clássicos de dungeon crawler e reimaginado como uma experiência Minecraft completamente nova. Mas foi o amor dos nossos jogadores que o fez crescer e prosperar, permitindo-nos continuar a aventura e aventurar-nos ainda mais no Nether, no Fim e, eventualmente, na misteriosa Torre. Superou nossos sonhos mais loucos e nos deixa orgulhosos e gratos por termos tido o prazer de construir um jogo junto com uma comunidade como esta.</p>
                </div>

                <div><img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/md25-1.jpg" alt="Imagem do Minecraft" className={Styles.img2}/></div>

                <div className={Styles.text2}>
                    <p className={Styles.description2}>Porém, toda jornada tem um fim. Como a versão 1.17 foi a atualização final do Minecraft Dungeons, nossa equipe agora avançou para novos projetos que continuam a explorar experiências no universo Minecraft. Isso significa que não há novos recursos ou atualizações de conteúdo planejadas para o jogo. Pretendemos continuar trazendo novas experiências para o universo Minecraft e dar à nossa equipe a liberdade de continuar explorando os tipos de jogos pelos quais são apaixonados – assim como fizeram com Dungeons!</p>
                    <p className={Styles.description2}>Não pense por um segundo que isso significa que suas aventuras terminaram! Ainda há muitas aventuras para viver junto com seus amigos; masmorras para explorar, caçadas antigas para conquistar e derrubar uma torre cujo layout continuará girando. E embora a história de Dungeons possa ter chegado ao fim, nossa comunidade continua a construir suas próprias histórias. Estamos felizes que tantos novos jogadores descubram e aproveitem o jogo em uma variedade crescente de plataformas e, por fim, se tornem parte da família de heróis de Dungeons.
</p>
                    <p className={Styles.description2}>Vocês são todos maravilhosos. Obrigado por todo o seu apoio e nos vemos nas masmorras! </p>
                </div>
                

                <div className={Styles.text3}>
                    <img src="https://s-trojmiasto.pl/zdj/c/n/9/2703/597x0/2703588-Oto-postac-z-gry-ktora-synowi-naszej-czytelniczki-kojarzy-sie-z-wieza.jpg" alt="Villager do minecraft" className={Styles.img3} />
                <p className={Styles.description3}>Escrio por: Thayná</p>
                <p className={Styles.description3}>Publicada 01/12/2023</p>
                </div>

                <div>
                <h3>Nossas Redes Sociais</h3>
                </div>


                <div className={Styles.icons}>
                <a href="https://github.com/MagoValdivia28/Minecraft-project-React" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linktr.ee/admin" target="_blank" rel="noopener noreferrer"><SiLinktree /></a>
                </div>

               
            </div>
         
        </>
    );
}