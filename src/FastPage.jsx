import React from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PublicIcon from "@mui/icons-material/Public";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Grid, ListItem, Typography } from "@mui/material";
const FastPage = () => {
  return (
    <Grid
      sx={{
        p: "10px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "3rem",
      }}
    >
      <Grid textAlign="left">
        <Typography sx={{ ml: "1rem" }}>Gaurav Garg</Typography>
        <Typography sx={{ ml: "1rem", fontSize: "1.5em", fontWeight: "bold" }}>
          15 Minute Meeting
        </Typography>

        <ListItem>
          <ListItemIcon>
            <WatchLaterIcon />
          </ListItemIcon>
          <ListItemText primary=" 15 min" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary=" 9.30am - 945am, Friday,September 16, 2022" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="India Standard Time" />
        </ListItem>
      </Grid>

      {/* <Grid textAlign="left"></Grid> */}
    </Grid>
  );
};

export default FastPage;
