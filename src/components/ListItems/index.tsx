import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermMedia from "@mui/icons-material/PermMedia";

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <PermMedia />
      </ListItemIcon>
      <ListItemText primary="Наши сайты" />
    </ListItemButton>
  </>
);
