import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import WordsDialog from "./WordsDialog";
import "./form.css";

function Form() {
  const [word, setWord] = useState("");
  const [rhymingWords, setRhymingWords] = useState();
  const [showResults, setShowResults] = useState(false);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`);
      const words = await data.json();
      console.log(words);
      setRhymingWords(words);
      toggleResults();
    } catch (e) {
      console.log(e.message);
    };

  };

  return (
    <>
      <WordsDialog {...{ rhymingWords, word, showResults, toggleResults }} />
      <form onSubmit={handleSubmission}>
        <TextField sx={{ m: "1em" }} value={word} onChange={handleWordChange} />
        <Button variant="contained" type="submit">Find Words!</Button>
      </form>
    </>
  )
}

export default Form;