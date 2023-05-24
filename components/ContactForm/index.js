import styles from "@/styles/Home.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h2>Put you & your family in good hands</h2>
      <div className={styles.formContainer}>
        <h2>Get in touch</h2>
        <p>Got questions? Let us know and we will reach you on time.</p>

        <form className={styles.form}>
          <label className={styles.formLabel} htmlFor="name-input">Name</label>
          <input className={styles.formInput} id="name-input" placeholder="Name" type="text" required />
          <label className={styles.formLabel} htmlFor="email-input">Email Address</label>
          <input className={styles.formInput}
            id="email-input"
            placeholder="Email Address"
            type="email"
            required
          />
          <label className={styles.formLabel} htmlFor="message-input">Message</label>
          <textarea className={styles.formInputTextarea}
            name="message"
            placeholder="Message"
            id="message-input"
            required
          ></textarea>
          <input type="submit" className={styles.formSubmitButton} role="button" />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
