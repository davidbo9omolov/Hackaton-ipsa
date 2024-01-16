import Arrow from '../../assets/images/Arrow.svg';
import styles from './Home.module.css';
import Button from "../ui/button /Button";


const Home = () => {

    const data = new Date;
    const year = data.getFullYear();
    const slicedYear = year.toString().slice(2, 4);
    return (
        <section className={styles.home} id='home'>
            <div className={styles.mobileTransitionBlock}>
                <div className={styles.wrapper}>
                    <div className={styles.blockTextWrapper}>
                        <div className='flex'>
                            <p className={styles.title}>IASA</p>
                            <img src={Arrow} alt="arrow" className={styles.arrowMobile}/>
                        </div>
                        <p className={styles.title}>Champ</p>
                        <img src={Arrow} alt="arrow" className={styles.arrow}/>
                    </div>
                    <span className={`${styles.year} ${styles.title}`}>'{slicedYear}</span>
                </div>
                <Button className={`absolute ${styles.registration}`}/>
                <div className={`flex w-[45%] justify-center flex-col ${styles.marginWrapperMobile}`}>
                    <p className={styles.authors}>made by IASA Student Council</p>
                        <p className={`${styles.authors} mb-20`}>hosted by Igor Sikorsky Kyiv Polytechnic Institute</p>
                </div>
            </div>
        </section>
    )
}
export default Home;