"use client"
import React, {useState} from 'react';
import styles from './page.module.css';

const LawyersPage = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        date: '',
        phonenumber: ''
    })

    const lawyersData = [
        {
          id: 1,
          name: 'John Doe',
          location: 'Mumbai',
          description: 'Experienced civil lawyer specializing in property disputes.',
          casesAppeared: 75,
          casesWon: 65,
          rating: 4.9,
          experience: 20,
          image: '/lawyer1.jpeg',
        },
        {
          id: 2,
          name: 'Jane Smith',
          location: 'Delhi',
          description: 'Criminal defense attorney with a strong track record in high-profile cases.',
          casesAppeared: 50,
          casesWon: 40,
          rating: 4.8,
          experience: 10,
          image: '/lawyer2.jpeg',
        },
        {
          id: 3,
          name: 'Amit Patel',
          location: 'Mumbai',
          description: 'Family law expert known for successful divorce settlements.',
          casesAppeared: 60,
          casesWon: 55,
          rating: 4.7,
          experience: 18,
          image: '/lawyer4.jpeg',
        },
        {
          id: 4,
          name: 'Priya Sharma',
          location: 'Delhi',
          description: 'Corporate lawyer specializing in mergers and acquisitions.',
          casesAppeared: 80,
          casesWon: 70,
          rating: 4.9,
          experience: 15,
          image: '/lawyer3.jpeg',
        },
      
        {
          id: 6,
          name: 'Neha Verma',
          location: 'Mumbai',
          description: 'Real estate lawyer assisting clients in property transactions.',
          casesAppeared: 70,
          casesWon: 60,
          rating: 4.8,
          experience: 18,
          image: '/lawyer5.jpeg',
        },
     
      ];

      const ToggleEvent = () => {
        setIsFormActive(!isFormActive);
      }

      const handleSubmit = () => {
        setIsFormActive(!isFormActive);
        console.log({formData}); onChange={handleChange}
      }
const handleChange = (event) => {
        setFormData((prevData)=>{
            return ({
                ...prevData,
                [event.target.name]: [event.target.value]
            })

        })
      }

      const lawyerCards = lawyersData.map((lawyers)=>{
        return (
            <div className={styles.card} key={lawyers.id}>
              <div className={styles.powr}>
              <img src={lawyers.image} alt="" className={styles.lawyerimg} />
                <div className={styles.content}>
                    <h1 className={styles.name}>{lawyers.name}</h1>
                    <p className={styles.description}>{lawyers.description}</p>
                    <div className={styles.ratingandbutton}>
                        <div className={styles.location}>
                            <img src="./pin.png" alt="" className={styles.locationimage}/>
                            <span>{lawyers.location}</span>
                            <img src="./bag.jpeg" alt="" className={styles.locationimage} style={{marginLeft:'5px'}}/>
                            <span>{lawyers.experience} years expirience</span>
                            <span style={{marginLeft:'5px'}}>Rating:{lawyers.rating}</span>
                        </div>
              </div>
                        {/* <button className={styles.btn} onClick={ToggleEvent}>Book Appointment</button> */}
                    </div>
                    {/* <button className={styles.btn} onClick={ToggleEvent}>Book Appointment</button> */}

                </div>
                <button className={styles.btn} onClick={ToggleEvent}>Book Appointment</button> 
            </div>
        )
      })

      return (
        <>
        <div className={(!isFormActive)?styles.cardscontainer:styles.blur}>
            {lawyerCards}
        </div>
        {(isFormActive)&&
            <div className={styles.form}>
                <h1 className={styles.head}>Book Appointment</h1>
                <form className={styles.formcontent}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='name' className={styles.inputboxes} onChange={handleChange}/>
                <label htmlFor="email">email</label>
                <input type="text" name='email' placeholder='email' className={styles.inputboxes} onChange={handleChange}/>
                <label htmlFor="phoneno">Phone Number</label>
                <input type="text" name='phonenumber' placeholder='phone number' className={styles.inputboxes} onChange={handleChange}/>
                <label htmlFor="date">Choose Date</label>
                <input type="date" name='date' className={styles.inputboxes} onChange={handleChange}/>
                <button className={styles.submitbtn} onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        }
        </>
      )
  };
  
  export default LawyersPage;