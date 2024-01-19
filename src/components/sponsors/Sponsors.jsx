import SponsorLorem from '../../assets/images/LoremLogo.png';
import SponsorSoftServe from '../../assets/images/softserve_logo.png';
import SponsorSolidGate from '../../assets/images/solidgate_logo.png';
import SponsorLifecell from '../../assets/images/lifecell_logo.png';
import SponsorAIHouse from '../../assets/images/aihouse_logo.png';
import SponsorMacPaw from '../../assets/images/macpaw_logo.png';

import styles from './Sponsors.module.css';
import SponsorBlocks from "../ui/sponsor-blocks/SponsorBlocks";


const sponsorDataFirst = [
    {
        img: SponsorMacPaw,
        size: ' h-[60px]',
        link: 'https://macpaw.com/',
        subtitle:'Data Science',
        subtitleTab:'Data Science',
        description:'Українська IT-компанія, яка розробляє та розповсюджує програмне забезпечення для macOS та iOS.<br><br> MacPaw є розробником CleanMyMac X, Setapp, ClearVPN та інших застосунків. <br><br> Сьогодні продукти MacPaw мають понад 30 мільйонів користувачів по всьому світу. Кожен п\'ятий Mac на планеті має принаймні одну програму MacPaw. <br><br>MacPaw родом з України та пишається цим.'
    },
    {
        img: SponsorAIHouse,
        size: ' h-[100px]',
        link: 'https://aihouse.org.ua/',
        description: 'AI HOUSE — це найбільше та найпотужніше АІ-комʼюніті в Україні, в якому учасники обмінюються досвідом і знаннями, здобувають навички, реалізовують нові технологічні та бізнесові ідеї, розвивають AI-індустрію та сприяють народженню продуктових AI-стартапів.'
    },
]

const sponsorDataSecond = [
    {
        img: SponsorSolidGate,
        size: ' h-[60px]',
        link: 'https://solidgate.com/',
        subtitle:'Software Engineering',
        subtitleTab:'Software Engineering',
        description:'Компанія допомагає інтернет-бізнесам приймати платежі та забезпечувати безперебійну роботу для своїх клієнтів по всьому світу: від Європи до ЛАТАМу, від США до Азії, загалом у 150+ країнах і 150+ валютах. <br><br> Платіжна платформа Solidgate підтримує понад 100 платіжних методів, щоб партнери могли пропонувати зручні платежі для своїх клієнтів. Серед партнерів компанії понад 200 продуктових бізнесів у всьому світі.'
    },
    {
        img: SponsorSoftServe,
        size: ' h-[60px]',
        link: 'https://www.softserveinc.com/uk-ua',
        description:'Найбільша глобальна ІТ-компанія з українським корінням, що з року в рік входить до переліку найкращих ІТ-роботодавців України. <br><br> Компанія надає можливість отримати всі job ready skills завдяки навчальним рішенням від SoftServe Academy та розпочати свою роботу, навіть будучи ще студентом.'
    },
    {
        img: SponsorLifecell,
        size: ' h-[60px]',
        link: 'https://www.lifecell.ua/uk/',
        description:'Український оператор електронних комунікацій, що надає послуги мобільного зв’язку та передачі даних на базі швидкісного інтернету. <br><br> Компанія розвиває інноваційну екосистему електронної комунікаційної галузі, реалізовуючи проєкти, спрямовані на розвиток «розумного міста», «розумного регіону», покращення безпеки громадян і розгортання мережі IoT (інтернету речей).'
    },
    {
        img: SponsorMacPaw,
        size: ' h-[60px]',
        link: 'https://macpaw.com/',
        description:'Українська IT-компанія, яка розробляє та розповсюджує програмне забезпечення для macOS та iOS.<br><br> MacPaw є розробником CleanMyMac X, Setapp, ClearVPN та інших застосунків. <br><br> Сьогодні продукти MacPaw мають понад 30 мільйонів користувачів по всьому світу. Кожен п\'ятий Mac на планеті має принаймні одну програму MacPaw. <br><br>MacPaw родом з України та пишається цим.'
    },
    ]

const Sponsors = () => {
    return (
        //eslint-ignore-next-line
        <section className={styles.sponsors} id='sponsors'>
            <div className='flex justify-around py-20'>
                <div className='flex  w-10/12  flex-col justify-center items-center relative'>
                    <div className='w-full'>
                        <h1 className={styles.title}>Партнери</h1>
                    </div>
                    <span className={styles.centerLine}></span>
                    <div className={styles.sponsorWrap}>
                        <div className='flex justify-center flex-wrap'>
                            <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                <SponsorBlocks props={sponsorDataFirst} />
                            </div>
                            <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                <SponsorBlocks props={sponsorDataSecond}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;