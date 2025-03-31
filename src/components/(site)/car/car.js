'use client';
import styles from './car.module.css';
import React, { useState, useEffect } from 'react';
import { getCars } from '@/services/data.service';
import Image from "next/image"


const Car = () => {

    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCars = async () => {
            try {
                const fetchedCars = await getCars();
                console.log("Fetched Cars:", fetchedCars);
                setCars(fetchedCars);
            } catch (error) {
                setError('Kunne ikke hente biler'); 
            }

            console.log("Cars fetched:", fetchCars);
        }

        fetchCars();

        console.log("Cars:", cars.attributes);

    }, []);

    if (error) {
        return <p>{error}</p>
    }

  return (
    <div className={styles.container}>

        {cars.map((car) => (

            <div key={car.id} className={styles.carContainer}>

                <div className={styles.carImage}>

                    {car.attributes.image.data ? ( <div className={styles.columnImage}>
                        <Image src={car.attributes.image.data.attributes.url} width={car.attributes.image.data.attributes.width} height={car.attributes.image.data.attributes.height} alt={car.attributes.name} />
                    </div>) : ''}

                </div>

                <div className={styles.carInfo}>

                    <span className={styles.carTitle}>{car.attributes.name}</span>

                    <div className={styles.column}>
                        <p>Model:</p>
                        <p>{car.attributes.model}</p>
                    </div>

                    <div className={styles.column}>
                        <p>Vægt:</p>
                        <p>{car.attributes.weight} kg</p>
                    </div>

                    <div className={styles.column}>
                        <p>Motor:</p>
                        <p>{car.attributes.engine}</p>
                    </div>

                    <div className={styles.column}>
                        <p>Hestekræfter:</p>
                        <p>{car.attributes.horsepower} HK</p>
                    </div>

                    <div className={styles.column}>
                        <p>Tophastighed:</p>
                        <p>{car.attributes.topspeed} km/t</p>
                    </div>

                    <div className={styles.column}>
                        <p>0-100:</p>
                        <p>{car.attributes.acceleration} Sek</p>
                    </div>

                </div>

                {/* {car.image ? ( <div className={styles.columnImage}>
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
                </div> */}


                
            </div>
        ))}
    </div>
  )
};

export default Car
