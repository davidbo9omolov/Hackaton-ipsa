import styles from '../../../components/sponsors/Sponsors.module.css';

const SponsorBlocks = ({props}) => {
    const elem = props.map((item, index) => {
        return (
            <div className={`${styles.sponsorBlock} p-10`} key={index}>
                {
                    item.subtitle ? (
                        <>
                            <p className={`text-white border rounded-full p-2  ${styles.subtitle}`}>{item.subtitle}</p>
                        </>
                    ) : null
                }
                {
                    item.subtitleTab ? (
                        <>
                            <p className={`text-white border rounded-full p-2  ${styles.subtitleTab}`}>{item.subtitleTab}</p>
                        </>
                    ):null
                }
                <div className={styles.imageWrapper}>
                    <a href={item.link} >
                        <div className={styles.image} style={{backgroundImage: `url(${item.img})`}}
                             alt="sponsor img"></div>
                    </a>
                </div>
                <p className={styles.description}>{item.description}</p>
            </div>
        )
    })

    return elem

}

export default SponsorBlocks;