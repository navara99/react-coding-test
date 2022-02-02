import React, { useState } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "./form.css"
import { useEffect } from "react";
import { formatDate } from "./helper";

function Form() {
  const [date, setDate] = useState("");

  useEffect(() => {
    $(function () {
      $("#birthday").datepicker().on("input change", function (e) {
        const formattedDate = formatDate(e.target.value);
        setDate(formattedDate);
      });
    });
  }, []);

  return (
    <form>
      <label for="full-name">Your full given name:</label>
      <input type="text" id="full-name" name="full-name" className="fullwidth"></input>
      <div className="side-by-side">
        <div className="input-wrapper one-third">
          <label for="birthday">Date of Birth</label>
          <input type="text" value={date} readOnly id="birthday" name="birthday"></input>
        </div>
        <div className="input-wrapper two-third">
          <label for="country">Country of residence or citizenship:</label>
          <input type="text" id="country" name="country"></input>
        </div>
      </div>
      <label for="school">What school do you plan to attend?</label>
      <input type="text" id="school" name="school" className="fullwidth"></input>
      <label for="study-area">Please take a moment to describe your intended area of study:</label>
      <textarea id="study-area" className="fullwidth" name="study-area" placeholder="Enter details here" rows="6"></textarea>
    </form>
  )
}

export default Form;