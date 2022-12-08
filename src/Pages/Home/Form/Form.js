import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="booking">
     
        <div className="form-text">
          <h1 >Reserve Your Seats to Confirm if You Come with Your Family</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>
        </div>
        <form className="reservation-form">
        <input className="input-field" type={'text'} placeholder='NAME' />
        <input className="input-field" type={'text'} placeholder='SUBJECT' />
        <input className="input-field" type={'email'} placeholder='EMAIL' />
        <input className="input-field" type={'number'} placeholder='NUMBER' />
        <input className="input-field" type={'date'}  />
       

       <input type={'submit'} value='Make Reservation' className="custom-btn" />
        </form>
      
    </section>
  );
};

export default Form;
