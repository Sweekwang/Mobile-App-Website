import styles from './header.module.css';
import Image from 'next/image'

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logoBox}>
            <Image src='/1024.png' alt='Singapore Basic Theory Test BTT App' width="45" height="45" className={styles.logo}/>
        </div>

        <div className={styles.textBox}>
            <h1 className={styles.headingPrimary}>
                <span className={styles.headingPrimaryMain}>BTT Mobile App</span>
                <span className={styles.headingPrimarySub}>IS HOW YOU PASS YOUR TEST</span>
            </h1>

            <a href="#" className={[styles.btn, styles.btnWhite, styles.btnAnimated].join(' ')}>Download Now</a>
        </div>
    </header>
);

export default Header;