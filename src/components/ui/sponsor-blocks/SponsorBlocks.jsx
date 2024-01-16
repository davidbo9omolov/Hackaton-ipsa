import styles from '../../../components/sponsors/Sponsors.module.css';

const SponsorBlocks = ({props}) => {
    const elem = props.map((item, index) => {
        return (
            <div className={`${styles.sponsorBlock} pt-10 pb-10 pr-[5rem]`} key={index}>
                <div className={styles.imageWrapper}>
                    <div className={styles.image} style={{backgroundImage: `url(${item.img})`}}
                         alt="sponsor img"></div>
                </div>
                <p className={styles.description}>{item.description}</p>
            </div>
        )
    })

    return elem

}

export default SponsorBlocks;