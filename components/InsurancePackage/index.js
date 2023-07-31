import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import InsuranceSubmitForm from "../InsuranceSubmitForm";

const InsurancePackage = ({onchangeOpenForm}) => {
  const [isSubmit, setSubmit] = useState(false);

  useEffect(() => {
    setSubmit(false);
  }, []);

  const onChangeSubmit = () => {
    setSubmit(!isSubmit);
  };
  return (
    <section className={styles.benifits}>
      <h1>What You Get</h1>

      <div className={styles.policies}>
        <div className={styles.policy}>
          <div className={styles.packageImage}>
            <Image src="/Standard.png" width={350} height={270} />
          </div>
          <div className={styles.benifitCard}>
            <h2>Standard Coverage</h2>
            <ul>
              <li>Common car incident coverage</li>
              <li>Fully damaged car replacement</li>
              <li>Theft or malicious act recovery</li>
              <li>Liability to third party damage / injury</li>
            </ul>
          </div>
        </div>

        <div className={styles.policy}>
          <div className={styles.packageImage}>
            <Image src="/Premium.png" width={350} height={270} />
          </div>
          <div className={styles.benifitCard}>
            <h2>Premium Coverage</h2>
            <ul>
              <li>Includes all standard coverage service</li>
              <li>On road damage recovery</li>
              <li>Covers bodily injured medical payment</li>
              <li>Non-collision damage refund</li>
            </ul>
          </div>
        </div>
      </div>

      <button onClick={() => onchangeOpenForm()}>Ready To get a quote?</button>

      
      {/* <div className={styles.submitFormContainer}>
        <div className={styles.submitForm}>
          <InsuranceSubmitForm /> 
        </div>
      </div> */}
    </section>
  );
};
export default InsurancePackage;
