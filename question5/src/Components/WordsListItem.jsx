import { ListItemText, ListItem } from "@mui/material";

function WordsListItem({ word }) {

  return (
    <ListItem>
      <ListItemText primary={word} />
    </ListItem>
  )

};

export default WordsListItem;