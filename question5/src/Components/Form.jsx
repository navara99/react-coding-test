import React from "react";
import { Button, TextField } from "@mui/material";
import "./form.css";

function Form() {

  return (
    <form>
      <TextField sx={{ m: "1em" }} />
      <Button variant="contained" type="submit">Find Words!</Button>
    </form>
  )
}

export default Form;