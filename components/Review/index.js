import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Review = () => {
  return (
    <section className={styles.reviewWrapper}>
      <h2>Customers reviews</h2>

      <div className={styles.review}>
        <Image src="/user1.jpg" alt="" width={100} height={100} />
        <blockquote>
          Buying policy online on Lifesafe Insurance portal is smooth. Liked it
          and that is one of the reasons I completed the quotation into policy.
        </blockquote>
        <div className={styles.name}>Arthur Wells</div>
      </div>

      <div className={styles.review}>
        <Image src="/user2.jpg" alt="" width={100} height={100} />
        <blockquote>
          Excellent customer service. 24x7 support is just brilliant, I got my
          queries solved within minutes.
        </blockquote>
        <div className={styles.name}>Kyla George</div>
      </div>

      <div className={styles.review}>
        <Image src="/user3.jpg" alt="" width={100} height={100} />
        <blockquote>
          Finding a policy that meets my needs was never so easy. I definitely
          recommend Lifesafe for getting insurance👍.
        </blockquote>
        <div className={styles.name}>Matthew O'Ryan</div>
      </div>
    </section>
  );
};

export default Review;
