import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const About = () => {

  return (
    <div className={styles.main}>
      <Header headerName="About" />
      <Navbar navbarSelected="About" />
      <section className={styles.aboutEntryContent}>
        <div className={styles.aboutQuestion}>
          <h1>
            About Lifesafe Insurance
          </h1>
          <p>
            At Lifesafe, we’re reimagining the way you compare, buy, and manage your insurance online.
            Through artificial intelligence, we make insurance shopping simple, affordable, and hassle-free.
            When it comes to making your life easier, we make no compromises.
          </p>
          <span className={styles.aboutButton} >
            <Link href='/Contact'>Talk with an agent</Link>
          </span>
        </div>
        <Image className={styles.packageImage} src='/AboutContainer.jpg' width={650} height={500} />
      </section>

      <section className={styles.aboutDetails}>
        <div className={styles.familyContainer}>
          <Image className={styles.familyImage} src='/AboutFamily.jpg' width={650} height={500} />
        </div>

        <div className={styles.aboutD}>
          <h3>
            Providing Coverage for Over 20 years
          </h3>

          <p>
            With our experienced staff and artificial intelligence tools, we are providing the best experience for
            over 20 years.
          </p>
          <span className={styles.aboutButton} >
            <Link href='/Service'>Ready to get a quote</Link>
          </span>
        </div>

        <div className={styles.aboutD}>
          <div>
            <h4>Our Mission</h4>
            <p>
              We provide financial protection and peace of mind for our customers.
              In all we do, we are dedicated to going beyond the expected.
            </p>
          </div>
          <div>
            <h4>Our Vision</h4>
            <p>
              Our vision is to set the standard of excellence among insurance providers by being innovative,
              being financially strong and exceeding customer expectations.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.aboutOffers}>
        <h1>
          What We Offer
        </h1>
        <p>We try our best to provide top quality services</p>

        <div className={styles.aboutOffersWrapper}>
          <div className={styles.aboutOffer}>
            <Image src='/trust.png' width={120} height={120} />
            <h4>General Insurance Policies</h4>
            <p>
              General Insurance Policies include Home Insurance, Automobile Insurance,
              Life & health Insurance and Travel Insurance.
            </p>
          </div>

          <div className={styles.aboutOffer}>
          <Image src='/chat.png' width={120} height={120} />
            <h4>Premium Customer Service</h4>
            <p>
              Customer satisfaction is our ultimate goal.
              We provide the best service to our clients in least possible prices.
            </p>
          </div>

          <div className={styles.aboutOffer}>
          <Image src='/customize.png' width={120} height={120} />
            <h4>Customized Plans</h4>
            <p>
              Customize your plans as you wish to best fit your requirements.
            </p>
          </div>

          <div className={styles.aboutOffer}>
          <Image src='/detect.png' width={120} height={120} />
              <h4>Fraud Detection & Warnings</h4>
              <p>
                We protect you and your family in every possible.
                In any emergency, the appointed team are aware and will solve your problems in time.
              </p>
          </div>

          <div className={styles.aboutOffer}>
          <Image src='/management.png' width={120} height={120} />
              <h4>Online Policy Management</h4>
              <p>
                We provide policies that can be sanctioned
                from home without any risk.
              </p>
          </div>

          <div className={styles.aboutOffer}>
          <Image src='/rate.png' width={120} height={120} />
              <h4>Low Rates & Best Quality</h4>
              <p>
                Low rates and best quality is the key feature of Lifesafe.
                with low cost, we provides the best customer services.
              </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;