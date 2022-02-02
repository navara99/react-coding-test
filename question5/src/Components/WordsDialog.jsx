import { DialogTitle, Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import WordsList from "./WordsList";

function WordsDialog({ word, rhymingWords, showResults, toggleResults }) {

  return (
    <Dialog open={showResults} onClose={toggleResults}>
      <DialogTitle>Words that rhyme with {word}</DialogTitle>
      <DialogContent>
        <WordsList {...{ rhymingWords }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleResults}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
};

export default WordsDialog;