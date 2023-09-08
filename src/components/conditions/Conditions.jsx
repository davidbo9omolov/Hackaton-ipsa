import ConditionBlock from "../ui/condition-blocks/ConditionBlock";

import styles from './Conditions.module.css';

const conditionData=[
    {
        num:1,
        title:'Участь командами від 1 до 4 людей',
        description:'Хоч одинакам і не заборонено приєднатися до змагання, зважаючи на навантаження й рівень складності завдань, має сенс знайти підтримку у вигляді товаришів або в нашому телеграм-чаті пошуку команд.',
        margin:'Margin1'
    },
    {
        num:2,
        title:'Усі члени команди повинні бути студентами українських ЗВО протягом хакатону',
        description:'Захід проводиться за ініціативою студентів для студентів. Ми хочемо, аби всі команди були в рівних умовах. Під час реєстрації учасники мають надати фотографії студентських квитків.',
        margin:'Margin2'
    },
    {
        num:3,
        title:'Реєстрація в гугл-формі',
        description:'Для участі в хакатоні, кожен член команди має заповнити гугл-форму до вказаного дедлайну. Посилання на неї є на початковій сторінці сайту та в телеграм-каналі чемпіонату.',
        margin:'Margin3'
    },
]
const Conditions = () => {
     return(
         <section className={styles.conditions} id='conditions'>
             <div className='flex justify-around py-20'>
                 <div className='flex  w-10/12  flex-col justify-center relative'>
              <h1 className={styles.title}>Умови Участі</h1>
                   <ConditionBlock props={conditionData}/>
                 </div>
             </div>
         </section>
     )
}

export default Conditions;