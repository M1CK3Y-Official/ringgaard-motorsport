'use client';
import styles from './carCreateForm.module.css';

const CarCreateForm = () => {
  return (
    <div>
      <h1 className={styles.title}>Opret ny bil</h1>

        <form className={styles.form}>

            <div className={styles.inputGroup}>
                <label>Billede af bilen</label>
                <input placeholder="Vælg billedfil" type="file" name="file" />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Navn</label>
                <input placeholder="Indtast navnet på bilen" type="name" name="name" />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Motor</label>
                <input placeholder="Indtast motoren på bilen" type="engine_type" name="engine_type" />
            </div>
            
            <div className={styles.inputGroup}>
                <label>Bilens HK</label>
                <input placeholder="Indtast bilens HK" type="horsepower" name="horsepower" />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Vægt i kg</label>
                <input placeholder="Indtast bilens vægt i kg" type="weight" name="weight" />
            </div>

            <button type="submit">Opret bil</button>

        </form>
    </div>
  )
};

export default CarCreateForm;
