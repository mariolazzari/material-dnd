import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <ListItem
          id="boadin"
          draggable
          onDragStart={e => {
            e.dataTransfer.setData("Text", e.target.id);
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Spostabile" secondary="Jan 9, 2014" />
        </ListItem>

        <ListItem
          onDragOver={e => {
            e.preventDefault();
          }}
          onDrop={e => {
            e.preventDefault();
            console.log("Spostato", e.dataTransfer.getData("Text"));
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Sposta qui" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
    </div>
  );
}
