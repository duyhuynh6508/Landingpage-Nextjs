import React from "react";
import styles from "@/styles/Home.module.css";

const FirstStep = (props) => {
  return (
    <div className={styles.form}>
      <label className={styles.formLabel}>Full Name</label>
      <input
        className={styles.formInput}
        type="text"
        name="fullname"
        placeholder="Full Name"
        onChange={props.handleChange("fullName")}
      />

      <label className={styles.formLabel}>Identification</label>
      <input
        className={styles.formInput}
        type="text"
        name="displayName"
        placeholder="Steve"
        onChange={props.handleChange("displayname")}
      />

      <label className={styles.formLabel}>Email</label>
      <input
        className={styles.formInput}
        type="text"
        name="email"
        placeholder="Email"
        onChange={props.handleChange("displayname")}
      />

      <label className={styles.formLabel}>Phone number</label>
      <input
        className={styles.formInput}
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        onChange={props.handleChange("displayname")}
      />
      <label className={styles.formLabel}>Address</label>
      <input
        className={styles.formInput}
        type="text"
        name="address"
        placeholder="Address"
        onChange={props.handleChange("displayname")}
      />
      <label className={styles.formLabel}>Intervention Date</label>
      <input
        className={styles.formInput}
        type="text"
        name="displayName"
        placeholder="Steve"
        onChange={props.handleChange("displayname")}
      />
      <label className={styles.formLabel}>Intervention Time</label>
      <input
        className={styles.formInput}
        type="text"
        name="displayName"
        placeholder="Steve"
        onChange={props.handleChange("displayname")}
      />
    </div>
  );
};
export default FirstStep;
