import styles from "../../conditions/Conditions.module.css";


const ConditionBlock =({props})=>{

    const elem = props.map((item)=>{

        return(
            <div className={`${styles.wrapperCondotion} ${styles[item.margin]}`}>
                <p className={styles.conditionNum}>{item.num}</p>
                <div>
                    <p className={`${styles.conditionText} font-semibold`}>{item.title}</p>
                    <p className={`${styles.conditionText} opacity-80`}>{item.description}</p>
                </div>
            </div>
        )
    })


    return elem
}

export default ConditionBlock;