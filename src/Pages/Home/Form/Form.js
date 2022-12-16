import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <section className="booking">
      <div className="form-text">
        <h1>Reserve Your Seats to Confirm if You Come with Your Family</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea.
        </p>
      </div>
      <form className="reservation-form">
        <input className="input-field" type={"text"} placeholder="Your Name" />
        <input className="input-field" type={"text"} placeholder="Your Phone Number" />
        <input className="input-field" type={"email"} placeholder="Your Email" />
        <select name="" className="input-field">
          <option disabled selected='selected' >Select Event</option>
        <option value="Event One"> Event One </option>
        <option value="Event Two"> Event Two </option>
        <option value="Event Three"> Event Three </option>
        <option value="Event Four"> Event Four </option>
        </select>
       
          <DatePicker
            selected={startDate}
            className="input-field"
            onChange={(date) => setStartDate(date)}
            placeholderText="Select a Date"

          />
       

        <input
          type={"submit"}
          value="Make Reservation"
          className="custom-btn"
        />
      </form>
    </section>
  );
};

export default Form;
