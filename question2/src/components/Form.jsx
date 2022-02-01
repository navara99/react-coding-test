import React from "react";
import "./form.css"

function Form() {

  return (
    <form>
      <label for="full-name">Your full given name:</label>
      <input type="text" id="full-name" name="full-name"></input>
      <label for="birthday">Date of Birth</label>
      <input type="date" id="birthday" name="birthday"></input>
      <label for="country">Country of residence or citizenship:</label>
      <input type="text" id="country" name="country"></input>
      <label for="school">What school do you plan to attend?</label>
      <input type="text" id="school" name="school"></input>
      <label for="study-area">Please take a moment to describe your intended area of study:</label>
      <textarea id="study-area" name="study-area" placeholder="Enter details here"></textarea>
    </form>
  )
}

export default Form;