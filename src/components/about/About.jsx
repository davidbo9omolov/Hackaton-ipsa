import circle from "../../assets/images/circle.png";
import about from "../../assets/images/About.png";
import styles from "../about/About.module.css";


const About = () => {
    const data = new Date();
    const year = data.getFullYear().toString().slice(2, 4);

    return (
        <section className={styles.about} id='about'>
            <img src={circle} alt='circle' className={styles.circle}/>
            <div className='flex justify-around h-full '>
                <div className={styles.aboutWrapper}>
                    <div className={styles.aboutTextBlock}>
                        <h1 className={styles.title}>Опис змагання</h1>
                        <p className={styles.description}>
                            Студрада ІПСА в партнерстві з ІТ-компаніями проводить IASA Champ ‘{year}, онлайн-змагання для студентів, за двома напрямами: Data Science і Software Engineering.
                        </p>
                        <p className={styles.description}>
                            Чемпіонат проходить у два етапи. Перший — відбір, під час якого журі виберуть 15 кращих команд за результатами тестового завдання. Другий — виявить переможця змагання, власника найякіснішого розвʼязку фінальної задачі. Метою заходу є залучення ентузіастів до пошуку новаторського розв’язку наданих їм задач. Мотивація проведення хакатону — розкрити молоді таланти, які будуть корисними для відбудови країни.
                        </p>
                    </div>
                    <div className={styles.aboutImageBlock}>
                        <img src={about} alt='about'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;