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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Header headerName="Home"/>
        <Navbar navbarSelected="Home"/>
        <Hero />
        <Insurance />
        <Review />
        <ContactForm/>
        <Footer />
      </div>
    </>
  );
}
