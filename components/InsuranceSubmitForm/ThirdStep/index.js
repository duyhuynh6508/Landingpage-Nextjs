import React from "react";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const ThirdStep = (props) => {
  return (
    <div className={styles.paymentWrapp}>
      <div className={styles.paimentDataTop}>
        <div className={styles.paimentDataTopCard}>
          <div className={styles.paimentDataCardImgs}>
            <Image src='/LogoVisa.png' width={120} height={120}></Image>
            <Image src='/LogoVisaBlack.png' width={150} height={150}></Image>
          </div>

        </div>
        <div className={styles.paimentDataBottomCard}>

          <div className={styles.inputContainer}>
            <span className={styles.paymentSpan}>Card number</span>
            <input className={styles.paimentInput} value="4242424242424242" />
          </div>

          <div className={styles.inputContainer}>
            <span className={styles.paymentSpan}>Name in card</span>
            <input className={styles.paimentInputName} value="Test User" />
          </div>

          <div className={styles.paimentDataBottomCardInfo2}>
            <div className={styles.inputContainer}>
              <span className={styles.paymentSpan}>Expiration Date</span>
              <input className={styles.paimentInputName} value="12/24" />
            </div>

            <div>
              <div className={styles.inputContainer}>
                <span className={styles.paymentSpan}>CVC</span>
                <input className={styles.paimentInputName} value="798" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdStep;
