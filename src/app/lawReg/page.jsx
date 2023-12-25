import React from 'react';
import styles from './page.module.css';

const Form = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <label htmlFor="title" className={styles.title}>JOIN US</label>
                <div className={styles.inputs}>
                    <input type="text" name="text" className={styles.input} placeholder="Name" required="" />
                    <input type="text" name="text" className={styles.input} placeholder="Your court" required="" />
                    <input type="text" name="text" className={styles.input} placeholder="College name" required="" />
                    <input type="number" name="text" className={styles.input} placeholder="Year of practice" required="" />
                    <input type="email" name="text" className={styles.input} placeholder=" email" required="" />
                    <input type="mobile" name="text" className={styles.input} placeholder="Your phone number" required="" />

                </div>
                <div className="btncontainer">
                    <button className={styles.button}>
                        Apply Now
                        <svg fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
                            <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;