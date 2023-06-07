import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const OtherInsurance = () => (
  <section className={styles.others}>
    <h1>Other Insurances</h1>
    <div className={styles.otherInsurances}>
      <div className={styles.otherInsurance}>
        <Image src="/LegalLogo.png" width={50} height={50} />
        <h4>Legal Coverage</h4>
        <p>
          Legal and judicial protection tool designed for you, in order to shield your actions...
        </p>
      </div>

      <div className={styles.otherInsurance}>
        <Image src="/SurgicalLogo.png" width={50} height={50} />
        <h4>Post-surgical Complications</h4>
        <p>
          Cover the medical, emergency, hospital and surgical expenses that derive from a complication of Cosmetic Surgery...
        </p>
      </div>

      <div className={styles.otherInsurance}>
        <Image src="/TravelLogo.png" width={50} height={50} />
        <h4>Travel insurance</h4>
        <p>
          During your trip you have an accident or illness, coordinating the medical services you require...
        </p>
      </div>

    </div>
    <div className={styles.otherInsurances}>
      <div className={styles.otherInsurance}>
        <Image src="/PetLogo.png" width={50} height={50} />
        <h4>Pet Insurance</h4>
        <p>
          Protecting your heritage. Affected by any event related to your dogs and cats, and it accompanies you by satisfying your needs and those of your pets...
        </p>
      </div>


      <div className={styles.otherInsurance}>
        <Image src="/CarLogo.png" width={50} height={50} />
        <h4>Car Insurance</h4>
        <p>
          Through your mobility you carry out the activities of your daily life. We are with you so that you can travel safely, feeling accompanied...
        </p>
      </div>


      <div className={styles.otherInsurance}>
        <Image src="/HomeLogo.png" width={50} height={50} />
        <h4>Home Insurance</h4>
        <p>
          You keep the heritage that you have built over the years or that you are starting, this you protect the place where you live...
        </p>
      </div>


    </div>
  </section>
);
export default OtherInsurance;