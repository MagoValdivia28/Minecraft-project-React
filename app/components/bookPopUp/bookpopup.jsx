import stlyes from './bookpopup.module.css';

const BookPopUp = ({ handleBookPopUp, handleDelete }) => {
    return (
        <div className={stlyes.main_container}>
            <div className={stlyes.book_container}>

            </div>
            <button onClick={() => handleBookPopUp()} className={stlyes.exitButton}>
                <p className={stlyes.textButton}>Feito</p>
            </button>
            <button onClick={() => handleDelete} className={stlyes.deleteButton}>
                <p className={stlyes.textButton}>Deletar</p>
            </button>
            
        </div>
    )
}

export default BookPopUp