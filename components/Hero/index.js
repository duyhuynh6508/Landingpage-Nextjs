import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Hero = () => {

    return (
        <section className={styles.entryContent}>
        <div className={styles.question}>
          <h1 className=''>
            Are you covered?<br />
            Home, Life, &amp; Auto Insurance.
          </h1>
          <p className=''>
            Find the insurance that's best for you.
          </p>
          <span className={styles.button}>
            <Link href="/Contact">
              Talk with an agent
            </Link>
          </span>
        </div>
        <Image className={styles.team} src="/OnboardLogo.png" alt="team"  width={522} height={478}/>
      </section>
    );
  };
  
  export default Hero;