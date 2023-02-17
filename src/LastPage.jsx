import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const initialValues = {
  name: "",
  email: "",
  details: "",
};

const userSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const LastPage = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt="10%" display="flex" alignItems="center" justifyContent="center">
      <Formik
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
          //alert("successfully Submit");

          console.log(values);
          setOpen(true);
        }}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Typography
              sx={{
                fontWeight: "bold",
                display: "flex",
                justifyContent: "start",
                mb: "2rem",
                fontSize: "2em",
              }}
            >
              Enter Details
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                FullName *
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 4" }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "start",
                  mt: "2rem",
                }}
              >
                Email *
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />{" "}
              <Box display="flex" justifyContent="start" mb="40px" mt="10px">
                <Button
                  variant="outlined"
                  style={{ borderRadius: 30, padding: 5 }}
                >
                  Add Guests
                </Button>
              </Box>
              <Typography sx={{ fontWeight: "bold" }}>
                Please share anything that will help prepare for our meeting .
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="filled"
                type="text"
                label="Details"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="details"
              />{" "}
            </Box>
            <Box display="flex" justifyContent="start" mt="40px">
              <Button
                type="submit"
                variant="contained"
                style={{ borderRadius: 30, padding: 10 }}
              >
                Schedule Event
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Successfully Submit
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default LastPage;
