import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
      <section className={styles.main} style={{backgroundColor:"#020202"}}>
          <img src="./rdr2.jpg" alt="rdr2" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
    
          <div className={styles.center}  >
              
          
              <h1>{`Welcome to Sanjeev's worst app`}</h1>
        <div className={styles.linkContainer}>
          <a href="http://localhost:3000/hello" className={styles.link}>
            Some other stuff
          </a>
          {/* <a href="https://www.example.com" className={styles.link}>
            Link 2
          </a>
          <a href="https://www.example.com" className={styles.link}>
            Link 3
          </a> */}
        </div>
      </div>
    </section>
  );
}
