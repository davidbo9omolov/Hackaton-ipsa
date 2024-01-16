import SponsorLorem from '../../assets/images/LoremLogo.png';

import styles from './Sponsors.module.css';
import SponsorBlocks from "../ui/sponsor-blocks/SponsorBlocks";


const sponsorData = [
    {
        img: SponsorLorem,
       subtitle:'Data Science',
        subtitleTab:'Data Science',
        description:'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    },
    {
        img: SponsorLorem,
        subtitle:'Software Engineering',
        description:'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    },
    {
        img: SponsorLorem,
        subtitleTab:'Software Engineering',
        description: 'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    },
    {
        img: SponsorLorem,
        description:'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    }
]

const mainSponsor = [
    {
        img: SponsorLorem,
        description:'Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.'
    }
    ]
const Sponsors = () => {
    return (
        //eslint-ignore-next-line
        <section className={styles.sponsors} id='sponsors'>
            <div className='flex justify-around py-20'>
                <div className='flex  w-10/12  flex-col justify-center items-center relative'>
                    <div className='w-full'>
                        <h1 className={styles.title}>Спонсори</h1>
                    </div>
                    <div className={styles.sponsorWrap}>
                        <div className={'w-full mt-[50px]'}>
                            <img src={SponsorLorem} alt='sponsor'/>
                            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Orci consectetur vivamus iaculis suspendisse aliquet sodales. Pulvinar convallis magna volutpat cras posuere consectetur ut. Enim vulputate vitae iaculis urna. Laoreet cursus eu mattis cum dignissim. Massa at sed massa eu adipiscing erat tortor. Aenean a ut viverra purus.</p>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                            <SponsorBlocks props={sponsorData}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors;