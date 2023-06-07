import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Navbar = ({ navbarSelected }) => {

  return (
    <div className={styles.header}>
      <Image src="/InsuranceLogo.png" alt="Lifesafe-logo" className={styles.logo} width={18} height={18} />
      <div className={styles.brandNname}>T Insurance</div>
      <nav className={styles.nav}>
        <ul>
          <li className={navbarSelected == 'Home' ? styles.active : ""}>
            <Link className={styles.navLink} href="/">
              Home
            </Link>
          </li>
          <li className={navbarSelected == 'Service' ? styles.active : ""}>
            <Link href="/Service">
              Service
            </Link>
          </li>
          <li className={navbarSelected == 'About' ? styles.active : ""}>
            <Link href="/About">
              About
            </Link>
          </li>
          <li className={navbarSelected == 'Contact' ? styles.active : ""}>
            <Link href="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;