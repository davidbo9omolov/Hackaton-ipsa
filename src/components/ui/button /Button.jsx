import styles from "./Button.module.css";

const link = 'https://bit.ly/48yhvyu'
const Button=({className})=>{
    return(
        <a href={link} className={`${styles.registration} ${className}`} >
            Зареєструватися
        </a>
    )
}

export default Button;