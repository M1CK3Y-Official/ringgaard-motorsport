import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import TimeLine from '@/components/(site)/timeline/timeline';
import Team from '@/components/(site)/team/team';
import TeamIntro from '@/components/(site)/team/teamIntro';
import TeamOwner from '@/components/(site)/team/teamOwner';

export const metadata = {
    title: "Om Os",
}

export default function Page() {

    const subheroConfig = {
        title: 'Om Os',
        subtitle: 'Om Os',
        image: '/Heros/Om-os.jpg'
    }

    return (
        <>
            <SubHero config={subheroConfig} />

            <TeamIntro></TeamIntro>
            <TeamOwner></TeamOwner>
            <TimeLine></TimeLine>
            <Team></Team>
            

            

        </>

    )
}