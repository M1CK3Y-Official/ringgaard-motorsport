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

            console.log("Cars fetched:", data);
        }

        getCars();

    }, []);

  return (
    <div className={styles.container}>

        {cars.map((car) => (

            <div key={car.id} className={styles.carContainer}>

                {car.image ? ( <div className={styles.columnImage}>
                    <img src={car.image} alt={car.name} />
                </div>) : ''}

                <h1>{car.name}</h1>

                <div className={styles.column}>
                    <p>Model:</p>
                    <p>{car.model}</p>
                </div>

                <div className={styles.column}>
                    <p>Vægt:</p>
                    <p>{car.weight} kg</p>
                </div>

                <div className={styles.column}>
                    <p>Motor:</p>
                    <p>{car.engine}</p>
                </div>

                <div className={styles.column}>
                    <p>Hestekræfter:</p>
                    <p>{car.horsepower} HK</p>
                </div>

                <div className={styles.column}>
                    <p>Tophastighed:</p>
                    <p>{car.topspeed} km/t</p>
                </div>

                <div className={styles.column}>
                    <p>0-100:</p>
                    <p>{car.acceleration} Sek</p>
                </div>

                
            </div>
        ))}
    </div>
  )
};

export default Car
