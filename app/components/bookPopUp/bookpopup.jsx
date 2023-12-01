import stlyes from './bookpopup.module.css';

const BookPopUp = ({ handleBookPopUp }) => {
    return (
        <div className={stlyes.main_container}>
            <div className={stlyes.book_container}>

            </div>
            <button onClick={() => handleBookPopUp()} className={stlyes.exitButton}>Feito</button>
        </div>
    )
}

export default BookPopUp