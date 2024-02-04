import styles from '../../speakers/Speakers.module.css';

const SpeakersBlock = ({props}) => {

    const elem = props.map((item) => {
      return(
            <div className={`${styles.speakersWrapp} ${styles[item.direction]}`}>
                <a href={item.link} className={styles.speakersImage}>
                    <img src={item.img} alt={item.name} />
                </a>
                <div className={`${styles[item.flex]} ${styles.wrapper}`}>
                    <h1 className={styles.speakerName}>{item.name}</h1>
                    <h2 className={`${styles.speakerName} mb-10`}>{item.speciality}</h2>
                    <p className={styles.speakerDescription}>{item.description}</p>
                </div>

            </div>
      )
    })

    return(
   elem
    )
}

export default SpeakersBlock