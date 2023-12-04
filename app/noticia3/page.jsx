import Styles from "./page.module.css";
import Header from "../components/header/header";

export default function NoticiaPage() {
    return (
        <>
            <Header />

            <div className={Styles.main}>
                <img className={Styles.img} src="https://img.olhardigital.com.br/uploads/acervo_imagens/2020/06/20200605062817.jpg" alt="Imagem do Minecraft" />

                <div className={Styles.div2}>
                    <img src="https://www.minecraft.net/content/dam/games/dungeons/background-images/foreground.png" alt="" className={Styles.img2} />
                    <div className={Styles.h2}>
                        <h2>Descobre o</h2>
                        <h2>Minecraft Dungeons</h2>
                    </div>

                    <div className={Styles.p}>
                        <p>Um jogo de ação e aventura inspirado nos clássicos jogos de exploração de </p>
                        <p>masmorras e passado no universo Minecraft.</p>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/watch?v=BUv-V5ixPE8"><img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/UltimateEdition.jpeg" alt="" className={Styles.img3} /></a>
                    </div>

                    <div className={Styles.descriptionimg}>
                        <p>Combate criaturas icónicas, embarca em missões recheadas de </p>
                        <p>tesouros e coleciona itens lendários, tudo isto no Ultimate Edition.</p>
                    </div>

                </div>

                <img src="https://www.minecraft.net/content/dam/games/dungeons/background-images/foreground.png" alt="" className={Styles.img2} />

                <div className={Styles.divh1}>

                    <div className={Styles.h1}>
                        <h2>Como Funciona</h2>
                    </div>

                    <div className={Styles.divs}>

                        <div>
                            <img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/MinecraftDungeon_Unite_600x800.png" alt="" />
                            <h3>Alia-te</h3>
                            <p>Enfrenta as masmorras sozinho ou junta-te aos teus amigos! Forma uma equipa de até quatro jogadores para combaterem online ou em ecrã dividido.</p>
                        </div>

                        <div>
                            <img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/MinecraftDungeon_Fight_600x800.png" alt="" />
                            <h3>Luta</h3>
                            <p>Utiliza ataques corpo a corpo, descansa na retaguarda com ataques à distância ou usa a tua energia imensa para atravessar os inimigos protegido por uma armadura poderosa! Personaliza o teu personagem e descobre itens e encantamentos de armas únicos que te darão o poder de ataques devastadores.</p>
                        </div>

                        <div>
                            <img src="https://www.minecraft.net/content/dam/games/dungeons/key-art/MinecraftDungeon_Survive_600x800.png" alt="" />
                            <h3>Luta</h3>
                            <p>Explora níveis repletos de ação e tesouros. Tudo isto enquanto partes numa demanda épica para salvar os aldeões e derrotar o terrível Arch-Illager!</p>
                        </div>

                    </div>
                </div>

                <img src="https://www.minecraft.net/content/dam/games/dungeons/background-images/foreground.png" alt="" className={Styles.img2} />
                
            </div>



        </>
    );
}
