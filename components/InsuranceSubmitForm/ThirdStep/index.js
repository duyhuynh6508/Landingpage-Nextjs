import React from "react";
import Image from 'next/image';

const ThirdStep = (props) => {
  return (
    <div>
      <div>payment data top
        <div>topcard
          <Image src='/LogoVisa.png' width={100} height={100}></Image>
          <Image src='/LogoVisaBlack.png' width={100} height={100}></Image>
        </div>
        <div>4242424242424242</div>
        <div>card info
          <div>carlos Cardenas</div>
          <div>12/24</div>
        </div>
      </div>
      <div>payment data bottom
        <div>bottom card info
          <div>name on card</div>
          <div>card number</div>
          <div>expiration date and cvc
            <div>expirationd date</div>
            <div>cvc</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdStep;
