// Import React and any other necessary dependencies
import React from 'react';
import styles from './page.module.css';

// Create a functional component for your form page
const FormPage = () => {
  return (
    <div className={styles.box}>
      <h1>Form Page</h1>
      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="name">Name</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="number" required autoComplete="off" />
        <label htmlFor="age">Age</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="school">School Name</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="10thMark">10th Mark</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="12thMark">12th Mark</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="college">College Name</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="course">Course Name</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="cgpa">Overall CGPA</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="achievements">Achievements</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="skills">Skills</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="text" required autoComplete="off" />
        <label htmlFor="project">Project Brief</label>
      </div>

      <div className={styles.inputGroup}>
        <input type="file" accept="image/jpeg" />
        <label htmlFor="photo">
          
        </label>
      </div>

      <div className={styles.buttonborders}>
        <button className="primary-button" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormPage;
