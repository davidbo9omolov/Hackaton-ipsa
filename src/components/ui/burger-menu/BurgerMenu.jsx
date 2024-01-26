import {useState} from "react";
import styles from './BurgerMenu.module.css'

import {Navbar} from "flowbite-react";
import Button from "../button /Button";



const BurgerMenu = () => {
    const [toggle, setToggle] = useState(false)
    const onHandleClick = () => {
         setToggle(!toggle)
    }

    return(
        <>
                <div className={styles.burgerWrapper} onClick={onHandleClick}>
                    <span className= {`${styles.burgerElements}  ${toggle ? styles.firstElem : ''}`} ></span>
                    <span className={`${styles.burgerElements} ${ toggle ? styles.secondElem : ''} `}></span>
                    <span className={`${styles.burgerElements}  ${ toggle ? styles.thirdElem : ''}`}></span>
                </div>

            <div className={`${styles.dropBlock} ${toggle ? styles.dropDown : styles.dropUp}`}>
                    <div className='flex flex-col items-center justify-center h-full w-full relative '>
                        <div className={styles.navElem}>
                            <a onClick={onHandleClick} href="#about" className={styles.navLinks}  data-text="About">Опис змагання</a>
                            <a onClick={onHandleClick} href="#conditions" className={styles.navLinks}  data-text="Conditions">Умови</a>
                            <a onClick={onHandleClick} href="#timeline" className={styles.navLinks}  data-text="Timeline">Timeline</a>
                            <a onClick={onHandleClick} href="#sponsors" className={styles.navLinks}  data-text="Sponsors">Спонсори</a>
                            {/*<a onClick={onHandleClick} href="#speakers" className={styles.navLinks}  data-text="Speakers">Спікери</a>*/}
                            <a onClick={onHandleClick} href="#partners" className={styles.navLinks}  data-text="Partners">Партнери</a>
                            {/*<Button className={'relative m-0 text-sm mt-5'}/>*/}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default BurgerMenu