import {useState, useEffect} from "react";
import PartnersLorem from "../../assets/images/InfoPartnersLorem.png";
import sr_kpi from "../../assets/images/partners/sr_kpi.jpg"
import fict_online from "../../assets/images/partners/fict_online.jpg"
import fmf from "../../assets/images/partners/fmf.jpg"
import nn_fti from "../../assets/images/partners/nn_fti.jpg"
import sr_iate from "../../assets/images/partners/sr_iate.jpg"
import kubik from "../../assets/images/partners/kubik.jpg"
import fait_info from "../../assets/images/partners/fait_info.jpg"
import it_news_ua from "../../assets/images/partners/it_news_ua.jpg"
import odesa_it_family from "../../assets/images/partners/odesa_it_family.jpg"
import hackathon_expert from "../../assets/images/partners/hackathon_expert.jpg"
import inomniaparatus from "../../assets/images/partners/inomniaparatus.jpg"
import uit from "../../assets/images/partners/uit.jpg"
import start_v_it from "../../assets/images/partners/start_v_it.jpg"
import tsikavi_events from "../../assets/images/partners/tsikavi_events.jpg"
import it_events_in_ua from "../../assets/images/partners/it_events_in_ua.jpg"
import {Carousel} from "flowbite-react";

import styles from './Partners.module.css';


const partners = [
    {
        img: sr_kpi,
        href: 'https://t.me/sr_kpi',
        text: 'СР КПІ',
    },
    {
        img: fict_online,
        href: 'https://t.me/kpi_fict',
        text: 'ФІОТonline',
    },
    {
        img: fmf,
        href: 'https://t.me/kpi_fmf',
        text: '🇺🇦ФМФ | КПІ🇺🇦',
    },
    {
        img: nn_fti,
        href: 'https://t.me/iptkpiguild',
        text: 'НН ФТІ | КПІ',
    },
    {
        img: sr_iate,
        href: 'https://t.me/kpi_tef',
        text: 'Студрада ІАТЕ',
    },
    {
        img: kubik,
        href: 'https://t.me/cyberknu',
        text: 'КУБІК : твій СПФ',
    },
    {
        img: fait_info,
        href: 'https://t.me/faitinfo',
        text: 'ФАІТ ІНФО',
    },
    {
        img: it_news_ua,
        href: 'https://t.me/kharkivitcluster',
        text: 'IT News UA',
    },
    {
        img: odesa_it_family,
        href: 'https://t.me/Odesa_IT_Family_events',
        text: 'IT-івенти в Одесі',
    },
    {
        img: hackathon_expert,
        href: 'https://t.me/HackathonExpert',
        text: 'Hackathon Expert',
    },
    {
        img: inomniaparatus,
        href: 'https://t.me/alwaysinomniaparatus',
        text: 'IN OMNIA PARATUS',
    },
    {
        img: uit,
        href: 'https://t.me/UITua',
        text: 'UIT | Робота, заходи і новини в ІТ',
    },
    {
        img: start_v_it,
        href: 'https://t.me/start_v_IT',
        text: 'Старт в ІТ 🚀',
    },
    {
        img: tsikavi_events,
        href: 'https://t.me/events_ua',
        text: 'Цікаві Онлайн Івенти ▶️',
    },
    {
        img: it_events_in_ua,
        href: 'https://t.me/IT_v_UA',
        text: 'IT івенти в Україні 🧑‍💻',
    },
]

const Pertners = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldDisplayCarousel = screenWidth < 1000;

    return (
        <section className={styles.partners} id='partners'>
            <div className='flex justify-around py-20'>
                <div className='flex  w-10/12  flex-col justify-center'>
                    <h1 className={styles.title}>Інформаційні партнери</h1>
                    <div className='flex justify-around w-full h-80'>
                        {
                            shouldDisplayCarousel ?
                                (
                                    <Carousel className='w-full h-full select-none ' indicators={false}
                                              leftControl={screenWidth < 1000 ? true : true}
                                              rightControl={screenWidth < 1000 ? true : true}>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <a href={partners[0].href}>
                                                    <img src={partners[0].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[0].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[1].href}>
                                                    <img src={partners[1].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[1].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[2].href}>
                                                    <img src={partners[2].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[2].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <a href={partners[3].href}>
                                                    <img src={partners[3].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[3].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[4].href}>
                                                    <img src={partners[4].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[4].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[5].href}>
                                                    <img src={partners[5].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[5].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <a href={partners[6].href}>
                                                    <img src={partners[6].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[6].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[7].href}>
                                                    <img src={partners[7].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[7].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[8].href}>
                                                    <img src={partners[8].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[8].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <a href={partners[9].href}>
                                                    <img src={partners[9].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[9].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[10].href}>
                                                    <img src={partners[10].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[10].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[11].href}>
                                                    <img src={partners[11].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[11].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <a href={partners[12].href}>
                                                    <img src={partners[12].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[12].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[13].href}>
                                                    <img src={partners[13].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[13].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[14].href}>
                                                    <img src={partners[14].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[14].text}</p>
                                            </div>
                                        </div>
                                    </Carousel>
                                ) : (
                                    <Carousel className='w-full h-full select-none ' indicators={false}

                                              leftControl={screenWidth > 1000 ? true : true}
                                              rightControl={screenWidth > 1000 ? true : true}>
                                        <div className='w-full h-full flex justify-between'>
                                            <div className={styles.partner}>
                                                <a href={partners[0].href}>
                                                    <img src={partners[0].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[0].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[1].href}>
                                                    <img src={partners[1].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[1].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[2].href}>
                                                    <img src={partners[2].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[2].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[3].href}>
                                                    <img src={partners[3].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[3].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[4].href}>
                                                    <img src={partners[4].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[4].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-between'>
                                            <div className={styles.partner}>
                                                <a href={partners[5].href}>
                                                    <img src={partners[5].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[5].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[6].href}>
                                                    <img src={partners[6].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[6].text}</p>
                                            </div>

                                            <div className={styles.partner}>
                                                <a href={partners[7].href}>
                                                    <img src={partners[7].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[7].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[8].href}>
                                                    <img src={partners[8].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[8].text}</p>
                                            </div>

                                            <div className={styles.partner}>
                                                <a href={partners[9].href}>
                                                    <img src={partners[9].img} alt="partner" className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[9].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-between'>
                                            <div className={styles.partner}>
                                                <a href={partners[10].href}>
                                                    <img src={partners[10].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[10].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[11].href}>
                                                    <img src={partners[11].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[11].text}</p>
                                            </div>

                                            <div className={styles.partner}>
                                                <a href={partners[12].href}>
                                                    <img src={partners[12].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[12].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <a href={partners[13].href}>
                                                    <img src={partners[13].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[13].text}</p>
                                            </div>

                                            <div className={styles.partner}>
                                                <a href={partners[14].href}>
                                                    <img src={partners[14].img} alt="partner"
                                                         className={styles.partnerImg}/>
                                                </a>
                                                <p className={styles.partnerText}>{partners[14].text}</p>
                                            </div>
                                        </div>
                                    </Carousel>
                                )


                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Pertners;