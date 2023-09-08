

import styles from "../../partners/Partners.module.css";

const PartnerBlock = ({props}) => {

    const elem = props.map((item) => {
        return (
            <div className={styles.partner}>
                <img src={item.img} alt="partner" className={styles.partnerImg}/>
                <p className={styles.partnerText}>{item.text}</p>
            </div>
        )
    })
    return elem
}

export default PartnerBlock;