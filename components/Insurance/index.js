import React, { useState } from "react";
import InsuranceCard from "./InsuranceCard";
import styles from "@/styles/Home.module.css";

const Insurance = () => {

    return (
      <section className={styles.insurances}>
        <InsuranceCard
        imageUrl="/LegalLogo.png"
        title="Legal Coverage"
        description="Legal and judicial protection tool designed for you, in order to shield your actions..."
      />
      <InsuranceCard
        imageUrl="/SurgicalLogo.png"
        title="Post-surgical Complications"
        description="Cover the medical, emergency, hospital and surgical expenses that derive from a complication of Cosmetic Surgery..."
      />
      <InsuranceCard
        imageUrl="/SOAT.png"
        title="SOAT"
        description="Complying with the law and with the responsibility of guaranteeing a benefit for drivers, passengers or pedestrians..."
      />
      <InsuranceCard
        imageUrl="/TravelLogo.png"
        title="Travel insurance"
        description="During your trip you have an accident or illness, coordinating the medical services you require..."
      />
      <InsuranceCard
        imageUrl="/LeasingLogo.png"
        title="Digital Leasing"
        description="Generating peace of mind knowing that every month you have the money paid by the tenants of your property..."
      />
      <InsuranceCard
        imageUrl="/PetLogo.png"
        title="Pet Insurance"
        description="Protecting your heritage. Affected by any event related to your dogs and cats, and it accompanies you by satisfying your needs and those of your pets..."
      />
      <InsuranceCard
        imageUrl="/CarLogo.png"
        title="Car Insurance"
        description="Through your mobility you carry out the activities of your daily life. We are with you so that you can travel safely, feeling accompanied..."
      />
      <InsuranceCard
        imageUrl="/HomeLogo.png"
        title="Home Insurance"
        description="You keep the heritage that you have built over the years or that you are starting, this you protect the place where you live..."
      />
      </section>
    );
  };
  
  export default Insurance;