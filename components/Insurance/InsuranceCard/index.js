import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const InsuranceCard = ({ imageUrl, title, description }) => (
    <div className={styles.card}>
      <Image className={styles.cardImg} src={imageUrl} alt={title} width={32} height={32} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
  export default InsuranceCard;