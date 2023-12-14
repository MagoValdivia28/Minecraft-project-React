import stlyes from './bookpopup.module.css';

const BookPopUp = ({ handleBookPopUp, handleDelete, encantamento, handleEditar }) => {
    return (
        <div className={stlyes.main_container}>
            <div className={stlyes.book_container}>
                <div className={stlyes.book}>
                    <div className={stlyes.titleBookContainer}>
                        <h1 className={stlyes.titleBook}>{encantamento.titulo}</h1>
                        <h2 className={stlyes.subTitleBook}>{encantamento.titulo}</h2>
                    </div>
                    <div className={stlyes.descriptionBookContainer}>
                        <p className={stlyes.descriptionBook}>{encantamento.descricao}</p>

                        <div className={stlyes.informationContainer}>
                            <h3>Informacoes :</h3>
                            <p className={stlyes.info}>tipo: {encantamento.tipoEncanto}.</p>
                            <p className={stlyes.info}>Dano: {encantamento.dano}.</p>
                            <p className={stlyes.info}>Defesa: {encantamento.defesa}.</p>
                            <p className={stlyes.info}>nivel: {encantamento.nivel}.</p>
                            <p className={stlyes.info}>forca do encantamento: {encantamento.forcaEncantamento} de XP necessario.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className={stlyes.buttonContainer}>
                <button onClick={() => handleBookPopUp()} className={stlyes.exitButton}>
                    <p className={stlyes.textButton}>Feito</p>
                </button>
                <button onClick={handleDelete} className={stlyes.deleteButton}>
                    <p className={stlyes.textButton}>Deletar</p>
                </button>
                <button onClick={handleEditar} className={stlyes.editButton}>
                    <p className={stlyes.textButton}>Editar</p>
                </button>
            </div>
        </div>
    )
}

export default BookPopUp