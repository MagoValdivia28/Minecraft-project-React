import stlyes from './bookpopup.module.css';

const BookPopUp = ({ handleBookPopUp }) => {
    return (
        <div className={stlyes.main_container}>
            <div className={stlyes.book_container}>

            </div>
            <button onClick={() => handleBookPopUp()} className={stlyes.exitButton}>
                <p className={stlyes.textButton}>Feito</p>
            </button>
        </div>
    )
}

export default BookPopUp