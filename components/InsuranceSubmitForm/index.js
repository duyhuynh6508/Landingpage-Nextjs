import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import styles from "@/styles/Home.module.css";
import Image from 'next/image';



const InsuranceSubmitForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: ""
  });

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const pageTitles = [
    "Welcome! First things first...",
    "Let's set up a home for all your work",
    "How are you planning to use Eden?"
  ];
  const pageSubTitiles = [
    "You can always change them later.",
    "You can always create another workspace later",
    "We'll streamline your setup expereince accordingly.",
    "You have completed onboarding, you can start using the Eden"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
    else return <LastStep nextStep={nextStep} handleChange={handleChange} />;
  };

  //handle field changes
  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
  };

  return (
    <div className={styles.userForm}>
      <div className={styles.progressBar}>
        <MultiStepProgressBar step={page} />
      </div>

      <div className={styles.userFormContainer}>
        <div className={styles.userFormContainerTitle}>
          <Image src="/CarLogo.png" width={50} height={50} />
          <h1>
            {page === pageTitles.length
              ? `Congratulations, `
              : 'Car Insurance'}
          </h1>
        </div>
        <div className={styles.userFormContainerBody}>{PageDisplay()}</div>
        <div className={styles.userFormContainerFooter}>
          <button className={styles.formButton}
            onClick={() => {
              if (page === pageSubTitiles.length - 1) {
                console.log(userInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === pageSubTitiles.length - 1
              ? "Launch Eden"
              : "Create Workspace"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSubmitForm;
