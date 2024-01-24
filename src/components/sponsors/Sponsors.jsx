import {useEffect, useState} from "react";
import SponsorSoftServe from '../../assets/images/softserve_logo.png';
import SponsorSolidGate from '../../assets/images/solidgate_logo.png';
import SponsorLifecell from '../../assets/images/lifecell_logo.png';
import SponsorAIHouse from '../../assets/images/aihouse_logo.png';
import SponsorSQUAD from '../../assets/images/squad_logo.png';
import SponsorMacPaw from '../../assets/images/macpaw_logo.png';

import styles from './Sponsors.module.css';
import SponsorBlocks from "../ui/sponsor-blocks/SponsorBlocks";


const sponsorDataFirst = [

    {
        subtitle: 'Data Science',
        subtitleTab: 'Data Science',
        img: SponsorMacPaw,
        size: ' h-[60px]',
        link: 'https://macpaw.com/',
        description: 'Українська IT-компанія, яка розробляє та розповсюджує програмне забезпечення для macOS та iOS.<br><br> MacPaw є розробником CleanMyMac X, Setapp, ClearVPN та інших застосунків. <br><br> Сьогодні продукти MacPaw мають понад 30 мільйонів користувачів по всьому світу. Кожен п\'ятий Mac на планеті має принаймні одну програму MacPaw. <br><br>MacPaw родом з України та пишається цим.'
    },
    {
        img: SponsorAIHouse,
        size: ' h-[100px]',
        link: 'https://aihouse.org.ua/',
        description: 'AI HOUSE — це найбільше та найпотужніше АІ-комʼюніті в Україні, в якому учасники обмінюються досвідом і знаннями, здобувають навички, реалізовують нові технологічні та бізнесові ідеї, розвивають AI-індустрію та сприяють народженню продуктових AI-стартапів.'
    },
    {
        img: SponsorSQUAD,
        size: ' h-[60px]',
        link: 'https://squad.ua/',
        description: 'Український R&D центр, який працює з найсучаснішими системами безпеки розумного дому та Інтернету речей. <br><br> Компанія об\'єднує понад 1000 професіоналів різних напрямів та має власні лабораторії, оснащені провідним тестовим та оптичним обладнанням.'
    },
]

const sponsorDataSecond = [
    {
        subtitle: 'Software Engineering',
        subtitleTab: 'Software Engineering',
        img: SponsorSolidGate,
        size: ' h-[60px]',
        link: 'https://solidgate.com/',
        description: 'Компанія створює надсучасний фінтех-продукт у сфері онлайн-платежів.<br>Solidgate допомагає інтернет-бізнесам приймати платежі та забезпечувати безперебійну роботу для своїх клієнтів по всьому світу: від Європи до ЛАТАМу, від США до Азії, загалом у 150+ країнах і 150+ валютах.<br><br>Партнери компанії - це понад 200 продуктових бізнесів у всьому світі.<br><br>Solidgate є ТОП-5 компанією-роботодавцем в Україні, тому що потужна команда і якісний продукт завжди у ТОП-і.'
    },
    {
        img: SponsorSoftServe,
        size: ' h-[60px]',
        link: 'https://www.softserveinc.com/uk-ua',
        description: 'Найбільша глобальна ІТ-компанія з українським корінням, що з року в рік входить до переліку найкращих ІТ-роботодавців України. <br><br> Компанія надає можливість отримати всі job ready skills завдяки навчальним рішенням від SoftServe Academy та розпочати свою роботу, навіть будучи ще студентом.'
    },
    {
        img: SponsorLifecell,
        size: ' h-[60px]',
        link: 'https://www.lifecell.ua/uk/',
        description: 'Український оператор електронних комунікацій, що надає послуги мобільного зв’язку та передачі даних на базі швидкісного інтернету. <br><br> Компанія розвиває інноваційну екосистему електронної комунікаційної галузі, реалізовуючи проєкти, спрямовані на розвиток «розумного міста», «розумного регіону», покращення безпеки громадян і розгортання мережі IoT (інтернету речей).'
    },
    {
        img: SponsorMacPaw,
        size: ' h-[60px]',
        link: 'https://macpaw.com/',
        description: 'Українська IT-компанія, яка розробляє та розповсюджує програмне забезпечення для macOS та iOS.<br><br> MacPaw є розробником CleanMyMac X, Setapp, ClearVPN та інших застосунків. <br><br> Сьогодні продукти MacPaw мають понад 30 мільйонів користувачів по всьому світу. Кожен п\'ятий Mac на планеті має принаймні одну програму MacPaw. <br><br>MacPaw родом з України та пишається цим.'
    },
]

const Sponsors = () => {
    const [selected, setSelected] = useState(sponsorDataFirst[0].subtitle);
    const [ballPosition, setBallPosition] = useState({x: 0, y: 0});
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onClicked = (event) => {
        if (event.target) {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            setBallPosition({x, y});
            setSelected(event.target.textContent);
        }

        // switch (selected) {
        //     case 'Data Science':
        //         setSelected('first')
        //         break;
        //     case 'Software Engineering':
        //         setSelected('second')
        //         break;
        // }
    }
    return (
        //eslint-ignore-next-line
        <section className={styles.sponsors} id='sponsors'>
            <div className='flex justify-around py-20'>
                <div className='flex  w-10/12  flex-col justify-center items-center relative'>
                    <div className='w-full'>
                        <h1 className={styles.title}>Партнери</h1>
                    </div>
                    <div className={'flex justify-between w-full'}>

                        <div className={` border rounded-full p-2 relative overflow-hidden w-fit ${styles.subtitleTab}`}>
                            <button
                                className={`text-white `}
                                onClick={onClicked}>
                                {sponsorDataFirst[0].subtitle}
                            </button>
                            <div
                                className={`absolute bg-white  rounded-full duration-500 ${selected === sponsorDataFirst[0].subtitle ? 'w-[30px] h-[30px] scale-[7.5]' : ' w-[0px] h-[0px]'}`}
                                style={{left: `${ballPosition.x}px`, top: `${ballPosition.y}px`}}>
                            </div>
                            <p className={` z-10 duration-500 absolute text-black pointer-events-none ${selected === sponsorDataFirst[0].subtitle ? ' translate-y-[0%] ' : 'translate-y-[200%] '}`}>{sponsorDataFirst[0].subtitle}</p>
                        </div>


                        <div className={` border rounded-full p-2 relative overflow-hidden w-fit ${styles.subtitleTab}`}>
                            <button className={`text-white `}
                                    onClick={onClicked}>
                                {sponsorDataSecond[0].subtitle}
                            </button>
                            <div
                                className={`absolute bg-white z-10  rounded-full duration-500 ${selected === sponsorDataSecond[0].subtitle ? 'w-[30px] h-[30px] scale-[12]' : ' w-[0px] h-[0px]'}`}
                                style={{left: `${ballPosition.x}px`, top: `${ballPosition.y}px`}}
                            >
                            </div>
                            <p className={` z-10 duration-500 absolute text-black pointer-events-none ${selected === sponsorDataSecond[0].subtitle ? ' translate-y-[0%] ' : 'translate-y-[200%] '}`}>{sponsorDataSecond[0].subtitle}</p>
                        </div>


                    </div>
                    <span className={styles.centerLine}></span>
                    <div className={styles.sponsorWrap}>
                        <div className='flex justify-center flex-wrap'>
                            {mobile ? (
                                selected === sponsorDataFirst[0].subtitle ? (
                                    <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                        <SponsorBlocks props={sponsorDataFirst} />
                                    </div>
                                ) : (
                                    <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                        <SponsorBlocks props={sponsorDataSecond} />
                                    </div>
                                )
                            ) : (
                                <>
                                    <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                        <SponsorBlocks props={sponsorDataFirst} />
                                    </div>
                                    <div className={'flex flex-col items-center w-1/2 min-w-[410px]'}>
                                        <SponsorBlocks props={sponsorDataSecond} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;