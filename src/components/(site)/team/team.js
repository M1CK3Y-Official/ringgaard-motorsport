import Link from 'next/link';
import styles from './team.module.css';
import Image from 'next/image';

const Team = () => {
  return (
    <section className={styles.team}>
      <div className='sectionWrapper'>

        <div className={'textContainer'} >
          <h2 className={styles.title} data-aos="fade-right" data-aos-once="true"><span>Mød </span>Holdet</h2>
          <p data-aos="fade-right" data-aos-once="true" className={styles.intro} >Bag enhver successfuld kører er et dedikeret hold af professionelle som gør hver enkelt sejr mulig.</p>
        </div>


        <div className={styles.teamGrid}>

          <div className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <Image src="/People/Mathias2.jpg" alt='' width={3704} height={2470} />
            </div>

            <div className={styles.teamMemberInfo}>

              <div className={styles.teamMemberName}>
                <p>Mathias Ringgaard</p>  
              </div>
              <div className={styles.teamMemberRole}>
                <p>Driver</p>  
              </div>

              <div className={styles.teamMemberTags}>
                <span>Driver</span> <span>Race Strategy</span>  
              </div>

            </div>
          </div>
          <div className={styles.teamMember}>team member 2</div>
          <div className={styles.teamMember}>team member 3</div>

        </div>

      </div>
      
    </section>
  )
};

export default Team;
