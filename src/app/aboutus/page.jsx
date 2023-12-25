import React from 'react';
import styles from './page.module.css';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const aboutus = () => {
  // Replace the placeholders with actual data
  const teamMembers = [
    {
      name: 'Tanisk Bansal',
      role: 'Team Leader',
      profileImage: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png', 
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Shubham Choudhary',
      role: 'Full Stack Lead',
      profileImage: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png',
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Vansh Khaneja',
      role: 'AI Integrator',
      profileImage: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png',
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'S Bhuvan',
      role: 'UI Developer',
      profileImage: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-1024.png',
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Shruti Negi',
      role: 'Front-end Dev',
      profileImage: 'https://media.discordapp.net/attachments/1072899954525356072/1140889085389590558/MadokaWiz_Picture_like_Hisashi_Eguchi_Multiple_poses_and_expess_8ac7e8e8-1704-4118-9988-9fb0214a13dc.png?width=575&height=575',
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'Khwaish Khandelwal',
      role: 'Front-end Dev',
      profileImage: 'https://media.discordapp.net/attachments/953413844183683082/1005250670816927805/Carolina_Buitragosofia_libertad_abstract_girl_profile_deep_blue_9035961d-debd-4018-84c7-966450124467.png?width=575&height=575',
      social: {
        github: '#',
        instagram: '#',
        facebook: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.card}>
          <center>
            <div className={styles.profileImage}>
              <img src={member.profileImage} alt={member.name} height={50} width={50} className={styles.pngs}/>
            </div>
            <div className={styles.name}>
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
            <div className={styles.socialBar}>
              <a href={member.social.github}>
                <FaGithub />
              </a>
              <a href={member.social.instagram}>
                <FaInstagram />
              </a>
              <a href={member.social.facebook}>
                <FaFacebook />
              </a>
              <a href={member.social.twitter}>
                <FaTwitter />
              </a>
            </div>
          </center>
        </div>
      ))}
    </div>
  );
};

export default aboutus;
