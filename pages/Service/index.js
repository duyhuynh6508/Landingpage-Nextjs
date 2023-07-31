import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import InsurancePackage from "@/components/InsurancePackage";
import FAQ from "@/components/FAQ";
import OtherInsurance from "@/components/OtherInsurance";
import InsuranceSubmitForm from "@/components/InsuranceSubmitForm";

export default function Service() {

  const [isOpenForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(!isOpenForm)
  }
  return (
    <>
      <div className={styles.main}>
        <Header headerName="Service" />
        <Navbar navbarSelected="Service" />
        <InsurancePackage onchangeOpenForm={() => handleOpenForm()} />
        {isOpenForm ?
          <div className={styles.entry}>
            <InsuranceSubmitForm handleChangeOpenForm={() => handleOpenForm()} />
          </div>
          : null}
        <FAQ />
        <OtherInsurance />
        <Footer />
      </div>
    </>
  );
}
