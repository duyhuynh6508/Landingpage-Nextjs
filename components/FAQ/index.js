import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const FAQ = () => (
    <section className={styles.faqs}>
      <h1>
        Frequently asked questions
      </h1>
      <div className={styles.faqContainer}>
        <div className={styles.faq}>
          <h4 className={styles.q}>
            What if the car insurance policy expires?
          </h4>
  
          <p className={styles.ans}>
            In case the car insurance policy expires, the car will be inspected
            by the vehicle inspector assigned by insurer. The inspection process
            could be chargeable * (as declared in the T&C of the policy) If the
            renewal is not done within 90 days of date of expiry, you lose on
            your No Claim Bonus (NCB), leading to a substantial financial loss.
          </p>
        </div>
  
        <div className={styles.faq}>
          <h4 className={styles.q}>What is third-party car insurance?</h4>
  
          <p className={styles.ans}>
            Third party insurance offers a cover against any legal liability to
            a third party in case of accident and or any damage. The sum of
            liability cover can be unlimited* in case of death and bodily
            injury. Liability cover for property damage can go up to 7.5Lacs.
          </p>
        </div>
  
        <div className={styles.faq}>
          <h4 className={styles.q}>Can car insurance be cancelled?</h4>
  
          <p className={styles.ans}>
            Car insurance policy can’t be cancelled until or unless there is a
            genuine case* and is intimated within 1 month from the date of
            purchase of the policy. *Genuine cases can be if there is an
            alternate policy done for the same vehicle or in case your vehicle
            is commercial, and you bought private vehicle policy by mistake.
            However, there are no cancellation charges applicable (depending
            upon the T&C mentioned in the policy)
          </p>
        </div>
  
        <div className={styles.faq}>
          <h4 className={styles.q}>
            Is it mandatory to inform RTO about any changes I make in my car?
          </h4>
  
          <p className={styles.ans}>
            Yes, it is mandatory to inform RTO and insurance company about any
            installation done in the car. May it be CNG or any changes if done
            in the documentation. Similarly, in case of theft, the owner has to
            inform RTO about the incident in order to avoid transfer of
            registration on other name, resulting in any fraudulent activity.
          </p>
        </div>
  
        <div className={styles.faq}>
          <h4 className={styles.q}>Are natural calamities covered under car insurance?</h4>
  
          <p className={styles.ans}>
            Any tangible damage caused to vehicle due to natural calamity like-
            flood, tempest, cyclone, earthquake, hurricane etc. are covered
            under comprehensive insurance policy.
          </p>
        </div>
  
        <div className={styles.faq}>
          <h4 className={styles.q}>
            Is unnamed passenger cover a part of comprehensive car insurance
            policy?
          </h4>
  
          <p className={styles.ans}>
            Yes, one can take an add-on called Personal accident cover, in
            comprehensive car insurance policy for unnamed passengers, while
            paying an extra small payment. This cover can extend to the
            co-passengers in the car, can be family, friends, and colleagues.
          </p>
        </div>
      </div>
    </section>
  );
  export default FAQ;