import styles from './popUpBatalha.module.css'
const PopUpBatalha = ({ msg, fecharPopUp }) => {
    return (
        <div className={styles.containerMsg}>
            <div onClick={fecharPopUp} className={styles.boxClose}>
                <span>x</span>
            </div>
            <div className={styles.containerDiv}>
                <img src='https://www.minecraft.net//content/dam/games/minecraft/game-characters/MC-About_Key-Art_Survive_the_Night_600x800.png' alt="fundoMinecraft" />
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default PopUpBatalha
