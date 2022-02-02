import { List } from "@mui/material";
import WordsListItem from "./WordsListItem";

function WordsList({ rhymingWords }) {

  const generateWordsList = () => {
    return rhymingWords.map(({ word }) => <WordsListItem {...{ word }} key={word} />);
  };

  return (
    <List>
      {generateWordsList()}
    </List>
  )
}

export default WordsList;