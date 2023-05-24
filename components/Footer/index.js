import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";


const Footer = () => {

    return (
      <div className={styles.footer} >
        Copyright&copy;2023
      </div>
    );
  };
  
  export default Footer;