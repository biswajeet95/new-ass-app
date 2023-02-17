import FastPage from "./FastPage";
import "./App.css";
import Divider from "@mui/material/Divider";
import { Box, Grid } from "@mui/material";
import LastPage from "./LastPage";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",

          borderRadius: "10px",
          height: "90vh",
          width: "90%",
          mt: "3rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Grid
          sx={{
            borderRadius: "10px",
            height: "90vh",
            width: "30%",
          }}
        >
          <FastPage />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          sx={{
            borderRadius: "10px",
            height: "90vh",
            width: "70%",
          }}
        >
          <LastPage />
        </Grid>
      </Box>
    </div>
  );
}

export default App;
