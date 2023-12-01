import stlyes from './bookpopup.module.css';

const BookPopUp = ({ handleBookPopUp }) => {
    return (
        <div className={stlyes.book_main_container}>
            <button onClick={() => handleBookPopUp()} className={stlyes.book_close_button}>X</button>
            <p>Vc foi para a pag de PopUp :D</p>
        </div>
    )
}

export default BookPopUp