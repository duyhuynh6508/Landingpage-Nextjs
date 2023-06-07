import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";


const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.footerColumn}>
        <h3>Quick Link</h3>
        <ul>
          <li>
            <Link className={styles.footerNav} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.footerNav} href="/Service">
              Service
            </Link>
          </li>
          <li>
            <Link className={styles.footerNav} href="/About">
              About
            </Link>
          </li>
          <li>
            <Link  className={styles.footerNav} href="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h3>Our Service</h3>
        <ul>
          <li>Legal Coverage</li>
          <li>Travel insurance</li>
          <li>Post-surgical Complications</li>
          <li>Car Insurance</li>
          <li>Home Insurance</li>
          <li>Pet Insurance</li>
        </ul>
      </div>
      <div className={styles.footerColumn}>
        <h3>Contact Us</h3>
        <ul>
          <li>Email: info@lifesafe.com</li>
          <li>Phone: (+91)1800-560-119</li>
          <li>Address: 1234 Lifesafe St. #1000, San Francisco, CA 92985</li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Footer;