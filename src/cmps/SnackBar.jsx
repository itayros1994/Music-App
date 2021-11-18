import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { setIsOpen } from "../store/action/youtube.action";
import { useDispatch, useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackBar() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.youtubeModule);

  const handleClick = () => {
    dispatch(setIsOpen(true));
    
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setIsOpen(false));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Added To Liked ! 😀
        </Alert>
      </Snackbar>
    </Stack>
  );
}
