import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const data = [
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png',
    name: 'Narendra Modi',
    position: 'Prime Minister of India',
  },
  {
    image:
      'https://odishabytes.com/wp-content/uploads/2023/06/JP-Nadda-e1687344493541-1200x883.jpeg',
    name: 'JP Nadda',
    position: 'President of the ruling Party',
  },
  {
    image:
      'https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/09/Dharmendra-Pradhan.png',
    name: 'Dharmendra Pradhan',
    position: 'Minister of Education',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRouwNu45sLyKiy8oKW54FYNuYKcIeAsn8CD1Hyo_3GC7K0KVBe9a0M9fOAvHmlJeNw4&usqp=CAU',
    name: 'TG Sitharam',
    position: 'Chairman, AICTE',
  },
];

const page = () => {
  return (
    <div className={styles.fullPage}>
      
     <div className={styles.heroSec}> 
     <div>
     <div className={styles.herosectext}>Your Future, Your Rights, <br></br>Our AI Expertise</div>
      <p>Say goodbye to expensive consultations, long waits for appointments, and confusing legal texts. AI-lawyer ready to give you expert legal help anytime, anywhere.</p>
      <div className={styles.linkContainer}>
        <Link href="/chat">Search Case</Link>
      </div>
      <div className={styles.linkContainer}>
        <Link href="/rights">Know Your Rights</Link>
      </div>
      </div>
      <div>
        <img src='https://assets.super.so/b9a6147f-080d-4048-8b84-3159a3bd3683/images/c26ce96a-a31c-4703-9416-016c4a881253/hero-illustration.svg'></img>
      </div>
      </div>

      <div className={styles.awesomeSec}>
        <div className={styles.awesomeHead}>Why we are awesome</div>
        <div className={styles.awesomeCon}>
          
          <div className={styles.aws}>
            <img src='/fast-time.png'></img>
            <div className={styles.heads}>Fast</div>
            <p>The AI lawyer platforms ability to provide instant legal help and document creation is a significant advantage. </p>
          </div>
          <div className={styles.aws}>
          <img src='/smartphone.png'></img>
            <div className={styles.heads}>Accessible</div>
            <p>The AI lawyer platforms online accessibility makes it easier for clients to access legal help, regardless of their location or schedule.</p>
          </div>
          <div className={styles.aws}>
          <img src='/lock.png'></img>
            <div className={styles.heads}>Private</div>
            <p>The AI lawyer platform provides privacy and anonymity to clients seeking legal assistance</p>
          </div>
          <div className={styles.aws}>
          <img src='/coin.png'></img>
            <div className={styles.heads}>Cost-Effective</div>
            <p>Law market is prohibitively expensive for many people, but the AI-lawyer platform offers affordable legal solutions.</p>
          </div>

        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <img src='/ss.png' height={600}></img>
    </div>
    <div className={styles.lawUp}>
      <div style={{width:'50%'}}>
      <div className={styles.awesomeHead}>Are You A Lawyer?</div>
      <p>Lets help You Grab some of the needful clients</p>
     <div className={styles.linkContainer}>
        <Link href="/lawReg">Register Here</Link>
      </div>
      </div>

      <div style={{width:'50%'}}>
        <img src='https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c8357e52-e875-4d2c-8e54-ea287288b208/George_OG__Lawyer_minimalistic_illustration_white_background_f1229583-550d-4ff6-b9a7-4e55831f4686/w=1920,quality=80' height={300}></img>
      </div>
    </div>
   
    
      
      
    </div>
  );
};

export default page;