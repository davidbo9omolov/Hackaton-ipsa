import SpeakerLorem from '../../assets/images/SpeakerLorem.png';
import SpeakersBlock from "../ui/speakers-block/SpeakersBlock";
import Circle from '../../assets/images/circle.png';

import styles from './Speakers.module.css';
import circle from "../../assets/images/circle.png";


const speakerData = [
    {
        img: SpeakerLorem,
        name: 'Name',
        speciality: 'Ocupation',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. ',
    },
    {
        img: SpeakerLorem,
        name: 'Name',
        speciality: 'Ocupation',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. ',
        direction: 'Reverse',
        flex: 'Justify'
    },
    {
        img: SpeakerLorem,
        name: 'Name',
        speciality: 'Ocupation',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. ',
    },
    {
        img: SpeakerLorem,
        name: 'Name',
        speciality: 'Ocupation',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. ',
        direction: 'Reverse',
        flex: 'Justify'
    }
]

const Speakers = () => {
    return (
        //eslint-ignore-next-line
        <section className={styles.speakers} id='speakers'>
            <img src={Circle} alt='circle' className={styles.circleOne}/>
            <div className='flex justify-around relative py-20'>
                <div className='flex  w-10/12  flex-col justify-center'>
                    <h1 className={styles.title}>Спікери</h1>
                    <div className='my-20'>
                        <SpeakersBlock props={speakerData}/>
                    </div>
                </div>
                <img src={Circle} alt='circle' className={styles.circleSecond}/>
                <img src={circle} alt="circle" className={styles.circleThird}/>
            </div>
        </section>
    )
}

export default Speakers;