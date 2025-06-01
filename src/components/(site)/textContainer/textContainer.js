"use client";
import styles from './textContainer.module.css';
import Label from '@/components/(site)/label/label';
import { useState, useEffect } from 'react';
import { getTestData } from '@/services/data.service';
import AOS from 'aos';
import 'aos/dist/aos.css';



const TextContainer = () => {

    const [testData, setTestData] = useState([]);
    
    useEffect(() => {
        const fetchTestData = async () => {
          try {
            const fetchedTestData = await getTestData();
            console.log("Test Data fetched:", fetchedTestData);
            const textData = fetchedTestData?.data?.[0]?.attributes?.text || []; // Check if data exists and extract the text array
            setTestData(textData); // Extract the content array
          } catch (error) {
            console.log("Error fetching test data:", error);
          }
        };
        fetchTestData();
      }, []);
    useEffect(() => {
        AOS.init({
          duration: 500,
        });
      }, []);


  return ( 
    <div className={styles.textContainer}>
    <Label>OM KØRETØJET</Label>
    <h2 data-aos="fade-right" data-aos-once="true" data-aos-offset="150">Legend Car</h2>

    {testData.length > 0 ? (
      testData.map((testItem, index) => (
        <div key={index} className={styles.body}>
          {testItem.type === "paragraph" &&
            testItem.children.map((child, childIndex) => (
              <p key={childIndex}>{child.text}</p>
            ))}
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
};

export default TextContainer
