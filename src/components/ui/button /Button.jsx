import styles from "./Button.module.css";

const link = '#'
const Button=({className})=>{
    return(
        <a href={link} className={`${styles.registration} ${className}`} >
            Зареєструватися
        </a>
    )
}

export default Button;