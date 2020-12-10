import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("Events Start")}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log("Event Info")}>
          Event Info
        </ListItem>

      </List>
    </Drawer>
  );
};

export default SideDrawer;
