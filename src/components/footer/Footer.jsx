import {Navbar} from "flowbite-react";
import NavBar from "../ui/navbar/NavBar";
import Footer1 from "../../assets/images/Footer1.svg";
import Footer2 from "../../assets/images/Footer2.png";
import Footer3 from "../../assets/images/Footer3.svg";
import circle from "../../assets/images/circle.png";
import {BiLogoFacebook,BiLogoTelegram,BiLogoYoutube,BiLogoInstagram} from "react-icons/bi";


import styles from "../footer/Footer.module.css";


const Footer = () => {
    return (
        <footer className='flex flex-col h-48 relative '>
            <div className={styles.customHeight}>
                <img src={circle} alt="circle" className={styles.circle}/>
            </div>
            <NavBar>
                <div className={styles.navElem}>
                    <a href="#about" className={styles.navLinks}>Опис змагання</a>
                    <a href="#conditions" className={styles.navLinks}>Умови</a>
                    <a href="#timeline" className={styles.navLinks}>Timeline</a>
                    <a href="#sponsors" className={styles.navLinks}>Партнери</a>
                    {/* <a href="#speakers" className={styles.navLinks}>Спікери</a> */}
                    <a href="#partners" className={styles.navLinks}>Інфопартнери</a>
                </div>
            </NavBar>
            <div className={styles.mobileWrapperBlock}>
                <div className={styles.mobileIcons}>
                    <a href="https://t.me/IASA_Student_Council"> <img src={Footer3} alt="footer3" className={styles.footerIcon}/></a>
                    <a href="https://iasa.kpi.ua/"><img src={Footer1} alt="footer1" className={styles.footerIcon}/></a>
                </div>
                <div className={styles.mobileSocials}>
                   <a href='https://t.me/iasa_champ_24' className='z-10 relative mx-2'><BiLogoTelegram className={styles.footerSocial} /></a>
                    <a href='https://www.youtube.com/@IASAChannel' className='z-10 relative mx-2'><BiLogoYoutube className={styles.footerSocial}/></a>
                    <a href='https://www.instagram.com/studrada_iasa/' className='z-10 relative mx-2'><BiLogoInstagram className={styles.footerSocial}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer