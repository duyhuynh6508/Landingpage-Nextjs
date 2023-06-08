import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={(props.step + 1) * 25}
      filledBackground="#003bde"
      height="4px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              color:'white',
              display:'flex',
              justifyContent:'center',
              height: "25px",
              width: "25px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              alignItems:'center',
              backgroundColor: '#003bde'
            }}
          >
            1
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              color:'white',
              display:'flex',
              justifyContent:'center',
              height: "25px",
              width: "25px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              alignItems:'center',
              backgroundColor: '#003bde'
            }}
          >
            2
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              color:'white',
              display:'flex',
              justifyContent:'center',
              height: "25px",
              width: "25px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              alignItems:'center',
              backgroundColor: '#003bde'
            }}
          >
            3
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              color:'white',
              display:'flex',
              justifyContent:'center',
              height: "25px",
              width: "25px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              alignItems:'center',
              backgroundColor: '#003bde'
            }}
          >
            4
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
