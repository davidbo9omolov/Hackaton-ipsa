import logo from '../../assets/images/Logo.svg';

import NavBar from "../ui/navbar/NavBar";

import styles from './Header.module.css';
import BurgerMenu from "../ui/burger-menu/BurgerMenu";
import Button from "../ui/button /Button";

const Header = () => {

    return (
        <header className={styles.header}>
            <NavBar>
                <a href='/'> <img src={logo} alt="logo" className={styles.logo} /></a>
                <div className={styles.navElem}>
                    <a href="#about" className={styles.navLinks}>Опис змагання</a>
                    <a href="#conditions" className={styles.navLinks}>Умови</a>
                    <a href="#timeline" className={styles.navLinks}>Timeline</a>
                    <a href="#sponsors" className={styles.navLinks}>Спонсори</a>
                    <a href="#speakers" className={styles.navLinks}>Спікери</a>
                    <a href="#partners" className={styles.navLinks}>Партнери</a>
                    <Button className={'relative m-0 text-sm mr-4 '}/>
                </div>
            </NavBar>
            <BurgerMenu/>
        </header>
    )
}

export default Header