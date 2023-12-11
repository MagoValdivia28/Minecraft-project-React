import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footerMain}>
        <div className={styles.widthImg}>
            <img className={styles.footerImg} src="/minefooter.jpg" />
        </div>
    </footer>
);

export default Footer;