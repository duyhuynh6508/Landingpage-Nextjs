import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from 'next/image';
import styles from "@/styles/Home.module.css";


const Contact = () => {

    return (
        <div className={styles.main}>
            <Header headerName="Contact" />
            <Navbar navbarSelected="Contact" />
            <div className={styles.contactBg}>
                <section className={styles.contactEntryContent}>
                    <div>
                        <div className={styles.contactMessage}>
                            <h1>Contact Us</h1>
                            <p>
                                Get support or ask us questions about your policy 24/7. You can contact us via email ,
                                phone or visit our office.
                            </p>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.cardInCard}>
                                <div className={styles.dataInCard}>
                                    <h4>Email</h4>
                                    <div>info@lifesafe.com</div>
                                </div>
                            </div>

                            <div className={styles.cardInCard}>
                                <div className={styles.dataInCard}>
                                    <h4>Phone</h4>
                                    <div>(+91)1800-560-119</div>
                                </div>
                            </div>

                            <div className={styles.cardInCard}>
                                <div className={styles.dataInCard}>
                                    <h4>Address</h4>
                                    <div>1234 Lifesafe St. #1000, San Francisco, CA 92985</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contactForm}>
                        <div className={styles.formInForm}>
                            <input required type="text" placeholder="Name" />
                            <input required type="email" placeholder="Email" />
                            <input required type="number" maxlength="10" placeholder="Phone" />
                            <textarea required placeholder="Message"></textarea>
                            <button type="submit">SUBMIT</button>
                        </div>
                    </div>

                </section>
            </div>
            <section className="map">
                <iframe className={styles.contactIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.9275658690544!2d-122.40497951493982!3d37.788341584894106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858088565e749b%3A0x2c2247c0cd5a270c!2sSan%20Francisco%20Insurance%20Center!5e0!3m2!1sen!2sin!4v1593400462654!5m2!1sen!2sin"
                    frameborder="0"
                    allowfullscreen
                    aria-hidden="false"
                    tabindex="0"></iframe>
            </section>

            <section className={styles.visitUs}>
                <h1>Visit Us</h1>
                <p>Monday-Friday: 8am – 5pm, Saturday & Sunday: 11am – 5pm</p>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;