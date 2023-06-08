import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InsuranceForm = (props) => {

  const [interventionDate, setInterventionDate] = useState(new Date());

  return (
    <div className={styles.form}>
      <label className={styles.formLabel}>Full Name</label>
      <input
        className={styles.formInput}
        type="text"
        name="fullname"
        placeholder="Full Name"
      />

      <label className={styles.formLabel}>Identification</label>
      <input
        className={styles.formInput}
        type="text"
        name="displayName"
        placeholder="Steve"
      />

      <label className={styles.formLabel}>Email</label>
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
      />

      <label className={styles.formLabel}>Phone number</label>
      <input
        className={styles.formInput}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
      />
      <label className={styles.formLabel}>Address</label>
      <input
        className={styles.formInput}
        type="text"
        name="address"
        placeholder="Address"
      />
      <label className={styles.formLabel}>Intervention Date</label>
      <DatePicker  className={styles.formInput} selected={interventionDate} onChange={(date) => setInterventionDate(date)} />
    </div>
  );
};
export default InsuranceForm;
