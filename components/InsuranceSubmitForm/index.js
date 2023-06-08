import React, { useState } from "react";
import InsuranceForm from "./InsuranceForm";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import styles from "@/styles/Home.module.css";



const InsuranceSubmitForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };


  const PageDisplay = () => {
    if (page === 0)
      return <InsuranceForm nextStep={nextStep}/>;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} />;
    else return <LastStep nextStep={nextStep} />;
  };

  const displayTitle = () => {
    let title = "Car Insurance"
    if(page === 1){
      title = "Payment Summary"
    }
    else if(page === 2){
      title = "Payment Card"
    }
    else if(page === 3){
      title = "Complete"
    }
    return title;
  }

  return (
    <div className={styles.userForm}>
      <div className={styles.progressBar}>
        <MultiStepProgressBar step={page} />
      </div>

      <div className={styles.userFormContainer}>
        <div className={styles.userFormContainerTitle}>
          <h1 className={styles.formTitle}>
              {displayTitle()}
          </h1>
          <h2>{page === 0 ? '$100.00' : null}</h2>
        </div>
        <div className={styles.userFormContainerBody}>{PageDisplay()}</div>
        <div className={styles.userFormContainerFooter}>
          <button className={styles.formButton}
            onClick={() => {
                setPage((currPage) => currPage + 1);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSubmitForm;
