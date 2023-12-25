import React from 'react'
import styles from './Footer.module.css'
import { FaLinkedinIn,FaInstagram,FaFacebook,FaGithub,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={styles.FooterCon}>
        <div>
      <div className={styles.rightSec}>
       <div>
        <div>VirtuLaw</div>
        <p>An AI lawyer uses artificial intelligence to streamline legal tasks, from research to document drafting, but ethical concerns and human oversight are essential</p>
        </div>
      </div>
      <div className={styles.rightSec}>
        <div>
            <div>SOCIAL</div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <FaLinkedinIn className={styles.icon}></FaLinkedinIn>           
                <FaInstagram  className={styles.icon}></FaInstagram>
                <FaFacebook className={styles.icon}></FaFacebook>
                <FaGithub className={styles.icon}></FaGithub>
                <FaTwitter className={styles.icon}></FaTwitter>
            </div>

        </div>
      </div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><div className={styles.divider}></div></div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><p className={styles.copyright}>&copy; Copyright 2023. All Rights Reserved <b>AI Lawyer</b></p></div>
    </div>
  )
}

export default Footer
