'use client';
import React from 'react'
import styles from './Navbar.module.css'
import {useRouter} from 'next/navigation';
import {GoLaw} from 'react-icons/go'
const navbar = () => {
  const router = new useRouter();
  return (
    <div className={styles.NavCon}>
      <div className={styles.leftSec}><GoLaw className={styles.icon}></GoLaw><p>VirtuLaw</p></div>
      <div className={styles.rightSec}>
        {/* <div className={styles.menu} onClick={()=>{isOpen=="Menu"?setIsOpen("Close"):setIsOpen("Menu")}}>{isOpen}</div> */}
        {/* <div className={styles.botNav}  style={{display:isOpen=="Menu"?'none':'flex'}}>
          <div className={styles.leftBot} onClick={()=>{setIsOpen("Menu")}}></div>
          <div className={styles.rightBot}>
          <div onClick={()=>{router.push('/'); setIsOpen("Menu")}}className={styles.element}>HOME</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><div className={styles.divider}></div></div>
        <div onClick={()=>{router.push('/about'); setIsOpen("Menu")}} className={styles.element}>ABOUT</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><div className={styles.divider}></div></div>
        <div onClick={()=>{router.push('/projects'); setIsOpen("Menu")}}className={styles.element}>PROJECTS</div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><div className={styles.divider}></div></div>
        <div onClick={()=>{router.push('/#contact'); setIsOpen("Menu")}} className={styles.element}>CONTACT</div>
          </div>
        </div> */}
        {/* <div className={styles.botNav}  style={{display:isOpen=="Menu"?'none':'flex'}}>
          <div className={styles.notNav}></div>
        <div className={styles.activeNav}>
        <div>HOME</div>
        <divider className={styles.divider}></divider>
        <div>ABOUT</div>
        <divider className={styles.divider}></divider>
        <div>PROJECTS</div>
        <divider className={styles.divider}></divider>
        <div>CONTACT</div>
        </div>
         */}
        
        <p onClick={()=>{router.push('/'); setIsOpen("Menu")}}className={styles.element}>HOME</p>
        <p onClick={()=>{router.push('/lawyers'); setIsOpen("Menu")}} className={styles.element}>FIND LAWYERS</p>
        <p onClick={()=>{router.push('/chat'); setIsOpen("Menu")}}className={styles.element}>CHAT</p>
        <p onClick={()=>{router.push('/faqs'); setIsOpen("Menu")}} className={styles.element}>FAQs</p>
        <div className={styles.login} onClick={()=>{router.push('/login'); setIsOpen("Menu")}}>Login/Signup</div>
      </div>
    </div>
  )
}

export default navbar
