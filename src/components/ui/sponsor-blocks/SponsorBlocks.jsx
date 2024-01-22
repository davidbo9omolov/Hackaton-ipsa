import styles from '../../../components/sponsors/Sponsors.module.css';


const SponsorBlocks = ({props}) => {
    const elem = props.map((item, index) => {

        return (
            <div className={`${styles.sponsorBlock} p-10`} key={index}>
                {
                    item.subtitle && (
                        <>
                            <p className={`text-white border rounded-full p-2  ${styles.subtitle}`}>{item.subtitle}</p>
                        </>
                    )
                }
                <div className={`${styles.imageWrapper} ${item.size}`} >
                    <a href={item.link} className={'w-fit'}>
                        <div className={styles.image} style={{backgroundImage: `url(${item.img})`}}
                             alt="sponsor img"></div>
                    </a>
                </div>
                <p className={styles.description} dangerouslySetInnerHTML={{ __html:item.description}} ></p>
            </div>
        )
    })

    return elem

}

export default SponsorBlocks;