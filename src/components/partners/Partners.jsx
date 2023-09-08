import {useState,useEffect} from "react";
import ParntersLorem from "../../assets/images/InfoPartnersLorem.png";

import styles from './Partners.module.css';

import {Carousel} from "flowbite-react";


const partners=[
    {
        img: ParntersLorem,
        text: 'Lorem',
    },
    {
        img: ParntersLorem,
        text: 'Lorem',
    },
    {
        img: ParntersLorem,
        text: 'Lorem',
    },
    {
        img: ParntersLorem,
        text: 'Lorem',
    },
    {
        img: ParntersLorem,
        text: 'Lorem',
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

    return(
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
                                            <div className={styles.partner} >
                                                <img src={partners[0].img} alt="partner" className={styles.partnerImg}/>
                                                <p className={styles.partnerText}>{partners[0].text}</p>
                                            </div>
                                            <div className={styles.partner} >
                                                <img src={partners[1].img} alt="partner" className={styles.partnerImg}/>
                                                <p className={styles.partnerText}>{partners[1].text}</p>
                                            </div>
                                            <div className={styles.partner} >
                                                <img src={partners[2].img} alt="partner" className={styles.partnerImg}/>
                                                <p className={styles.partnerText}>{partners[2].text}</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-full flex justify-center'>
                                            <div className={styles.partner}>
                                                <img src={partners[3].img} alt="partner" className={styles.partnerImg}/>
                                                <p className={styles.partnerText}>{partners[3].text}</p>
                                            </div>
                                            <div className={styles.partner}>
                                                <img src={partners[4].img} alt="partner" className={styles.partnerImg}/>
                                                <p className={styles.partnerText}>{partners[4].text}</p>
                                            </div>
                                        </div>
                                    </Carousel>
                                ) : (
                                    <div className='w-full h-full flex justify-between'>
                                        <div className={styles.partner} >
                                            <img src={partners[0].img} alt="partner" className={styles.partnerImg}/>
                                            <p className={styles.partnerText}>{partners[0].text}</p>
                                        </div>
                                        <div className={styles.partner} >
                                            <img src={partners[1].img} alt="partner" className={styles.partnerImg}/>
                                            <p className={styles.partnerText}>{partners[1].text}</p>
                                        </div>
                                        <div className={styles.partner} >
                                            <img src={partners[2].img} alt="partner" className={styles.partnerImg}/>
                                            <p className={styles.partnerText}>{partners[2].text}</p>
                                        </div>
                                        <div className={styles.partner}>
                                            <img src={partners[3].img} alt="partner" className={styles.partnerImg}/>
                                            <p className={styles.partnerText}>{partners[3].text}</p>
                                        </div>
                                        <div className={styles.partner}>
                                            <img src={partners[4].img} alt="partner" className={styles.partnerImg}/>
                                            <p className={styles.partnerText}>{partners[4].text}</p>
                                        </div>
                                    </div>
                                )


                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Pertners;