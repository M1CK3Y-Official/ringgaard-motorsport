'use client';
import styles from './car.module.css';
import React, { useState, useEffect } from 'react';
import { getCars } from '@/services/data.service';
import Image from "next/image"
import Spinner from '@/components/(site)/spinner/spinner';
import { FaWeightHanging, FaClock, FaBolt } from 'react-icons/fa6';
import { FaTachometerAlt, FaCar } from 'react-icons/fa';
import { PiEngineFill, PiSpeedometerFill  } from "react-icons/pi";



const Car = () => {

    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(() => {

        const fetchCars = async () => {
            try {
                setIsLoading(true);
                const fetchedCars = await getCars();
                console.log("Fetched Cars:", fetchedCars);
                setCars(fetchedCars);
                setIsLoading(false);
            } catch (error) {
                setError('Kunne ikke hente biler'); 
            }
        }

        fetchCars();


    }, []);

    if (error) {
        return <p>{error}</p>
    }


  return (
    <div className={styles.container}>
        {isLoading ? (
            <Spinner />
        ) : (

            <> {cars
                .filter(car => car.attributes.active === true).map((car) => (

                <div key={car.id} className={styles.carContainer}>

                    {car.attributes.image.data ? ( 
                        <div className={styles.carImage}>
                            <Image 
                                src={car.attributes.image.data.attributes.url} 
                                width={car.attributes.image.data.attributes.width} 
                                height={car.attributes.image.data.attributes.height} 
                                alt={car.attributes.name}
                            />
                            <div className={styles.imageOverlay}></div>
                            <div className={styles.carLabel}>Primary Car</div>
                            <div className={styles.carStatus}>
                                
                                <div className={`${styles.dot} ${car.attributes.active === true ? '' : styles.inactive}`}></div>
                                <span>{car.attributes.active ? "AKTIV" : "INAKTIV"}</span>
                            
                            </div>
                        </div>) 
                    : ''}


                    <div className={styles.carInfo}>

                        <div className={styles.carTitle}>
                            <h3>
                                <span className={styles.firstWord}>
                                    {car.attributes.name.split(' ')[0]}
                                </span>
                                {" "}
                                {car.attributes.name.split(' ').slice(1).join(' ')}
                            </h3>   
                        </div>

                        <div className={styles.description}>
                            <span className={styles.carDescription}>
                                Our primary racing machine, this 1934 Ford Coupe replica delivers exceptional performance with its high power-to-weight ratio and responsive handling.
                            </span>
                        </div>


                        <div className={styles.carSpecs}>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <FaCar />
                                </div>
                                <div>
                                    <p>Model</p>
                                    <p>{car.attributes.model}</p>
                                </div>
                            </div>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <FaWeightHanging />
                                </div>
                                <div>
                                    <p>Vægt</p>
                                    <p>{car.attributes.weight} kg</p>
                                </div>
                            </div>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <PiEngineFill />
                                </div>
                                <div>
                                    <p>Motor</p>
                                    <p>{car.attributes.engine}</p>
                                </div>
                            </div>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <FaBolt />
                                </div>
                                <div>
                                    <p>Hestekræfter</p>
                                    <p>{car.attributes.horsepower} HK</p>
                                </div>
                            </div>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <PiSpeedometerFill />
                                </div>
                                <div>
                                    <p>Tophastighed</p>
                                    <p>{car.attributes.topspeed} km/t</p>
                                </div>
                            </div>

                            <div className={styles.carSpec}>
                                <div className={styles.icon}>
                                    <FaClock />
                                </div>
                                <div>
                                    <p>0-100</p>
                                    <p>{car.attributes.acceleration} Sek</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    
                </div>
            ))}
            </>
        )}
    </div>
  )
};

export default Car
