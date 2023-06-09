import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Insurance from "@/components/Insurance";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/Home.module.css";
import InsurancePackage from "@/components/InsurancePackage";
import FAQ from "@/components/FAQ";
import OtherInsurance from "@/components/OtherInsurance";
import InsuranceSubmitForm from "@/components/InsuranceSubmitForm";

export default function Service() {
  return (
    <>
      <div className={styles.main}>
        <Header headerName="Service" />
        <Navbar navbarSelected="Service" />
        <InsurancePackage />
        <div className={styles.entry}>
          <InsuranceSubmitForm />
        </div>
        <FAQ />
        <OtherInsurance />
        <Footer />
      </div>
    </>
  );
}
