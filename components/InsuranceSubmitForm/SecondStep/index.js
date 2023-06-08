import React from "react";
import styles from "@/styles/Home.module.css";

const SecondStep = (props) => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymenSummaryContainer}>
        <span>Confirm and process your payment Pago Poliza</span>
        <h4>COP $100.00</h4>
      </div>
      <div className={styles.paymentCardContainer}>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Concept: <p className={styles.paymentSimpleText}>Pago Poliza</p>
          </span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Reference: <p className={styles.paymentSimpleText}>Pago Poliza-609731364</p>
          </span>
        </div>
        <div className={styles.cardItemWrapp}>
          <span className={styles.paymentBoldText}>
            Amount: <p className={styles.paymentSimpleText}>$100.00</p>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SecondStep;
