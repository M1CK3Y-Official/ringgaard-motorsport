import Link from 'next/link';
import styles from './team.module.css';

const Team = () => {
  return (
    <section className={styles.team}>
      Team

      <div className="buttonGroup">
        <Link href={'/'} className='button'>Gå videre til bilen</Link>
        <Link href={'/'} className='button'>Om os siden</Link>
      </div>
    </section>
  )
};

export default Team;
