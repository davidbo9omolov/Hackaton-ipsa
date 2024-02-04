import SpeakerLorem from '../../assets/images/SpeakerLorem.png';
import Kate from '../../assets/images/speakers/Life Kate 1.png';
import Max from '../../assets/images/speakers/Life Max 2.png';
import Marina from '../../assets/images/speakers/SoftServe Marina 3.png';
import Tanya from '../../assets/images/speakers/MacPaw Tanya 4.png';
import Dany from '../../assets/images/speakers/Solid Dany 5.png';
import Anton from '../../assets/images/speakers/Solid Anton 6.png';
import SpeakersBlock from "../ui/speakers-block/SpeakersBlock";
import Circle from '../../assets/images/circle.png';

import styles from './Speakers.module.css';
import circle from "../../assets/images/circle.png";


const speakerData = [
    {
        img: Kate,
        name: 'Катерина Дрюк',
        speciality: 'Head of Project Management and System Analysis Unit at lifecell',
        description: 'Понад 13 років в IT. Пройшла кар’єрний шлях від бізнес-аналітикині до проджект-менеджерки. Пофесійний Сертифікований Scrum Master (CSP-SM), засновниця lifecell СoP Scrum Masters. Успішно запустила 70+ стратегічних проєктів і навчила інших як це робити.',
        link: 'https://www.linkedin.com/in/edriuk/'
    },
    {
        img: Max,
        name: 'Максим Гавлович',
        speciality: 'Team Lead, Solution Implementation services at lifecell',
        description: 'Керую командою впровадження програмних рішень у lifecell. Фахівці в Enterprise Solutions Architecture. Проєктуємо, розробляємо та запускаємо технологічні рішення для 9 мільйонів українців.',
        link: 'https://www.linkedin.com/in/gavlovych/',
        direction: 'Reverse',
        flex: 'Justify'
    },
    {
        img: Tanya,
        name: 'Марина Бойко',
        speciality: 'Project Manager at SoftServe',
        description: 'Я — менеджер-світчер, почала з менеджменту в сфері освіти, і зараз третій рік працюю PM-ом у SoftServe. Дуже люблю те, чим займаюсь і коли мій кіт влазить у камеру на мітингах.',
        link: 'https://www.linkedin.com/in/marina-boiko-38312815a'
    },
    {
        img: Marina,
        name: 'Тетяна Соловйова',
        speciality: 'Internal Communication Specialist at MacPaw',
        description: 'Спеціаліст з внутрішньої комунікації з досвідом розробки та впровадження стратегій комунікації. Керую внутрішніми каналами та створюю цікавий контент, щоб кожен у MacPaw знав, що відбувається в компанії.',
        link: 'https://www.linkedin.com/in/tania-soloviova-a7aa6423a/',
        direction: 'Reverse',
        flex: 'Justify'
    },
    {
        img: Dany,
        name: 'Даниіл Яремчук',
        speciality: 'Product Analyst | Legal and Compliance at Solidgate',
        description: 'Випускник ІПСА, у Solidgate відповідаю за аналітику ризикових метрик клієнтів та очолюю напрямок боротьби з шахрайством. Побудував моніторингу транзакцій.',
        link: 'https://www.linkedin.com/in/danyil-yaremchuk/'
    },
    {
        img: Anton,
        name: 'Антон Цислицький',
        speciality: 'Product Owner | Integrations at Solidgate',
        description: 'Розбудовую напрям продуктових інтеграцій в Solidgate. Роблю так, щоб наші клієнти вчасно отримували якісні платіжні рішення. Також маю досвід запуску аналітики для продуктів в сферах cybersecurity та fintech.',
        link: 'https://www.linkedin.com/in/anton-t-311b93100/',
        direction: 'Reverse',
        flex: 'Justify'
    }
]

const Speakers = () => {
    return (
        //eslint-ignore-next-line
        <section className={styles.speakers} id='speakers'>
            <img src={Circle} alt='circle' className={styles.circleOne}/>
            <div className='flex justify-around relative py-20'>
                <div className='flex  w-10/12  flex-col justify-center'>
                    <h1 className={styles.title}>Спікери</h1>
                    <div className='my-20'>
                        <SpeakersBlock props={speakerData}/>
                    </div>
                </div>
                <img src={Circle} alt='circle' className={styles.circleSecond}/>
                <img src={circle} alt="circle" className={styles.circleThird}/>
            </div>
        </section>
    )
}

export default Speakers;