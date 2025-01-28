'use client';
import styles from './carCreateForm.module.css';
import { useState } from 'react';

const CarCreateForm = () => {

    const [file, setFile] = useState(null);
  const [carData, setCarData] = useState({
    name: "",
    model: "",
    weight: "",
    engine: "",
    horsepower: "",
    topspeed: "",
    acceleration: "",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Upload billede til Cloudinary
    let imageUrl = "";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_upload_preset"); // Lav en upload preset i Cloudinary

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadData = await uploadRes.json();
      imageUrl = uploadData.secure_url;
    }

    // 2️⃣ Send bilens data til API'et
    const res = await fetch("/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...carData, image: imageUrl }),
    });

    const data = await res.json();
    console.log("Car created:", data);
  };

  return (
    <div>
      <h1 className={styles.title}>Opret ny bil</h1>

        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.inputGroup}>
                <label>Billede af bilen</label>
                <input placeholder="Vælg billedfil" type="file"  onChange={handleFileChange} required />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Navn</label>
                <input placeholder="Indtast navnet på bilen" type="text" name="name" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Model</label>
                <input placeholder="Indtast model på bilen" type="text" name="model" onChange={handleChange} required/>
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens Vægt i kg</label>
                <input placeholder="Indtast bilens vægt i kg" type="number" name="weight" onChange={handleChange} required/>
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens motor</label>
                <input placeholder="Indtast bilens motor" type="text" name="engine" onChange={handleChange} required />
            </div>
            
            <div className={styles.inputGroup}>
                <label>Bilens HK</label>
                <input placeholder="Indtast bilens HK" type="number" name="horsepower" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
                <label>Bilens topfart</label>
                <input placeholder="Indtast bilens topfart" type="number" name="topspeed" onChange={handleChange} required />
            </div>            

            <div className={styles.inputGroup}>
                <label>Bilens acceleration</label>
                <input placeholder="Indtast bilens acceleration" type="number" step="0.1" name="acceleration" onChange={handleChange} required />
            </div>            

            <button type="submit">Opret bil</button>

        </form>
    </div>
  )
};

export default CarCreateForm;
