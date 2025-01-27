'use client';
import styles from './car.module.css';
import { useState, useEffect } from 'react';


const Car = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {

        const getCars = async () => {
            const response = await fetch('/api/cars');
            const data = await response.json();
            setCars(data);
        }

        getCars();

    }, []);

  return (
    <div className={styles.container}>

        {cars.map((car) => (

            <div key={car.id} className={styles.carContainer}>
                <h1>{car.name}</h1>
                <div className={styles.column}>
                    <p>Motor:</p>
                    <p>{car.engine_type}</p>
                </div>
                <div className={styles.column}>
                    <p>HK:</p>
                    <p>{car.horsepower}</p>
                </div>
                <div className={styles.column}>
                    <p>Vægt:</p>
                    <p>{car.weight} kg</p>
                </div>
            </div>
        ))}
    </div>
  )
};

export default Car
