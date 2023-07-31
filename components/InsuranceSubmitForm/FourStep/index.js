import React from "react";
import styles from "@/styles/Home.module.css";

const FourStep = (props) => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentCardContainer}>
        <div className={styles.approveTransactionTitle}>
          <span className={styles.paymentBoldTextTitle}>Approved transaction</span>
        </div>

        <div className={styles.Information}>
          <span className={styles.paymentTransactionInfo}>Transaction Information</span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>Transaction #: <p className={styles.paymentSimpleText}>17153-168-4757848-16922</p></span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Reference: <p className={styles.paymentSimpleText}>Pago Poliza-609731364</p>
          </span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Email: <p className={styles.paymentSimpleText}>testuser@gmail.com</p>
          </span>
        </div>

        <div className={styles.Information}>
          <span className={styles.paymentTransactionInfo}>Payer Information</span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Name: <p className={styles.paymentSimpleText}>Test User</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default FourStep;
